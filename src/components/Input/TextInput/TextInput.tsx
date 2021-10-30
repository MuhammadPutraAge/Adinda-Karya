import {
  TextInputContainer,
  TextInputField,
  TextInputLabel,
} from "./TextInputStyles";

interface Props {
  label: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
}

const TextInput: React.FC<Props> = ({ label, type, placeholder }) => {
  return (
    <TextInputContainer>
      <TextInputLabel>{label}</TextInputLabel>
      <TextInputField type={type} placeholder={placeholder} />
    </TextInputContainer>
  );
};

export default TextInput;
