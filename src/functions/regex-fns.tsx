export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const isEmailValid = (email: string) => emailRegex.test(email);
