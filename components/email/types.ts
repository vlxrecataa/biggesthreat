export interface EmailData {
    name: string;
    email: string;
    message: string;
}

export interface EmailResponse {
    success: boolean;
    messageId?: string;
    timestamp?: string;
    error?: string;
}

export interface EmailServiceConfig {
    apiUrl: string;
    apiKey: string;
    timeout?: number;
    maxRetries?: number;
    rateLimitMs?: number;
}

export interface EmailPayload extends EmailData {
    metadata: {
        timestamp: number;
        origin: string;
        clientInfo?: {
            userAgent: string;
            screenSize: string;
            timeZone: string;
        }
    }
}

export enum EmailErrorType {
    VALIDATION = 'validation_error',
    NETWORK = 'network_error',
    SERVER = 'server_error',
    RATE_LIMIT = 'rate_limit_error',
    AUTH = 'authentication_error',
    PERMISSION = 'permission_error',
    UNKNOWN = 'unknown_error'
}

export class EmailError extends Error {
    type: EmailErrorType;
    statusCode?: number;

    constructor(message: string, type: EmailErrorType, statusCode?: number) {
        super(message);
        this.type = type;
        this.statusCode = statusCode;
        this.name = 'EmailError';
    }
}