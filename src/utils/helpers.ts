export const isValidPhoneNumber = (phone: string) => /^5\d{8}$/.test(phone);

export const fileToBase64 = (file: File): Promise<string | ArrayBuffer | null> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            resolve(reader.result);
        };
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
    });
};