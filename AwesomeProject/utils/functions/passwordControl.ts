const lowerCaseLetter = /[a-z]/g;
const upperCaseLetter = /[A-Z]/g;
const numericLetter = /[0-9]/g;

export const passwordControl = (password: string) => {
  return (
    password.length >= 8 &&
    password.match(lowerCaseLetter) &&
    password.match(upperCaseLetter) &&
    password.match(numericLetter)
  );
};
