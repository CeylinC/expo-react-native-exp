export const emailControl = (email: string) => {
    return email.includes("@") && email.includes(".com");
}