export const isValidEmail = (value: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value.trim());
};

export const isValidPassword = (value: string) => {
    return value.trim().length >= 6;
};