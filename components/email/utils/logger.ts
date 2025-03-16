interface LogData {
    timestamp: string;
    level: 'info' | 'warn' | 'error';
    message: string;
    details?: any;
}

export const logError = (message: string, details?: any): void => {
    const logEntry: LogData = {
      timestamp: new Date().toISOString(),
      level: 'error',
      message,
      details
    };

    if (process.env.NODE_ENV === 'development') {
        console.error(`[ERROR] ${logEntry.message}`, logEntry.details);
    }

    if (process.env.NODE_ENV === 'production') {
        try {
          const sanitizedDetails = details ? JSON.parse(JSON.stringify(details)) : {};
          if (sanitizedDetails.error && sanitizedDetails.error.stack) {
            sanitizedDetails.error = {
              message: sanitizedDetails.error.message,
              name: sanitizedDetails.error.name
            };
          }
     
        } catch (e) {
          console.error('Failed to send log to service', e);
        }
    }
};