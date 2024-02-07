import { ITextField } from "./_type";
import { Input } from "./_style";

export function TextField({
  placeholder,
  type = "text",
  setValue,
  defaultValue = "",
}: ITextField) {
  return (
    <Input
      placeholder={placeholder}
      inputMode={type === "password" ? "text" : type}
      secureTextEntry={type === "password"}
      placeholderTextColor="#55575d"
      onChangeText={(value) => setValue(value)}
      defaultValue={defaultValue}
    />
  );
}
