import { useState } from "react";
import { IcHide, IcShow } from "../../../assets";
import {
  PasswordInputContainer,
  PasswordInputField,
  PasswordInputFieldContainer,
  PasswordInputIcon,
  PasswordInputLabel,
} from "./PasswordInputStyles";

interface Props {
  label: string;
  placeholder: string;
}

const PasswordInput: React.FC<Props> = ({ label, placeholder }) => {
  const [isShow, setIsShow] = useState(false);

  const onShow = () => setIsShow(!isShow);

  return (
    <PasswordInputContainer>
      <PasswordInputLabel>{label}</PasswordInputLabel>
      <PasswordInputFieldContainer>
        <PasswordInputField
          type={isShow ? "text" : "password"}
          placeholder={placeholder}
        />
        <PasswordInputIcon
          onClick={onShow}
          src={isShow ? IcHide : IcShow}
          alt="Visibility Icon"
        />
      </PasswordInputFieldContainer>
    </PasswordInputContainer>
  );
};

export default PasswordInput;
