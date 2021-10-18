import { CustomButtonContainer, CustomButtonTitle } from "./CustomButtonStyles";

interface Props {
  title: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  type?: "primary" | "secondary";
}

const CustomButton: React.FC<Props> = ({
  title,
  onClick,
  type = "primary",
}) => {
  return (
    <CustomButtonContainer onClick={onClick} type={type}>
      <CustomButtonTitle type={type}>{title}</CustomButtonTitle>
    </CustomButtonContainer>
  );
};

export default CustomButton;
