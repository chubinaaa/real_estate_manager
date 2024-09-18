export const isValidPhoneNumber = (phone: string) => /^5\d{8}$/.test(phone);
