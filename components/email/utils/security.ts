export const encryptData = (data: any): string => {
    const jsonString = JSON.stringify(data);

    return btoa(jsonString);
};

export const generateNonce = (length: number = 16): string => {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const randomValues = new Uint8Array(length);

    if (window.crypto && window.crypto.getRandomValues) {
        window.crypto.getRandomValues(randomValues);

        for (let i = 0; i < length; i++) {
            result += charset[randomValues[i] % charset.length];
        }
    } else {
        for (let i = 0; i < length; i++) {
            result += charset[Math.floor(Math.random() * charset.length)];
        }
    }

    return result;
}