import { EmailData, EmailResponse } from './types';
import { logError } from './utils/logger';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
import { encryptData } from './utils/security';

interface EnvVariables {
  NEXT_PUBLIC_API_URL?: string;
  EMAIL_API_KEY?: string;
}

const env: EnvVariables = {
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  EMAIL_API_KEY: process.env.EMAIL_API_KEY
};

const API_URL = env.NEXT_PUBLIC_API_URL || 'https://api.example.com/send-email';

/**
 * @param data Email form data
 * @returns Promise with email send result
 */
export const sendEmail = async (data: EmailData): Promise<EmailResponse> => {
  const lastSubmitTime = localStorage.getItem('last_email_submit');
  const now = Date.now();

  if (lastSubmitTime && now - parseInt(lastSubmitTime) < 60000) {
    throw new Error('Rate limit exceeded. Please wait before sending another email.');
  }

  try {
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

    const sanitizedData = {
      name: data.name.trim().replace(/<\/?[^>]+(>|$)/g, ""),
      email: data.email.trim().toLowerCase(),
      message: data.message.trim().replace(/<\/?[^>]+(>|$)/g, "")
    };

    const encryptedData = encryptData(sanitizedData);

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': env.EMAIL_API_KEY || '',
        'X-CSRF-Token': csrfToken || '',
      },
      body: JSON.stringify({
        data: encryptedData,
        timestamp: now,
        clientInfo: {
          userAgent: navigator.userAgent,
          screenSize: `${window.innerWidth}x${window.innerHeight}`,
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
        }
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const statusCode = response.status;

      switch (statusCode) {
        case 400:
          throw new Error('Invalid data submitted. Please check your inputs.');
        case 401:
          throw new Error('Authentication failed. Please refresh and try again.');
        case 403:
          throw new Error('You do not have permission to send emails.');
        case 429:
          throw new Error('Too many requests. Please try again later.');
        case 500:
          logError('Server error', { statusCode, errorData });
          throw new Error('Server error occurred. Our team has been notified.');
        default:
          throw new Error(`Failed to send email (Status ${statusCode})`);
      }
    }

    const result = await response.json();

    localStorage.setItem('last_email_submit', now.toString());

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'email_sent', {
        event_category: 'engagement',
        event_label: 'contact_form'
      });
    }

    return {
      success: true,
      messageId: result.messageId,
      timestamp: result.timestamp
    };

  } catch (error) {
    logError('Email send error', { error });

    throw error;
  }
};