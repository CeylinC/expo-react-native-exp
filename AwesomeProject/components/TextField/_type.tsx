export interface ITextField {
  placeholder: string;
  setValue: (newValue: string) => void;
  defaultValue?: string;
  type?: "text" | "numeric" | "email" | "password";
}
