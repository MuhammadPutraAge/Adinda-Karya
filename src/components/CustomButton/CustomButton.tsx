import { CustomButtonContainer, CustomButtonTitle } from "./CustomButtonStyles";

interface Props {
  title: string;
  to: string;
}

const CustomButton: React.FC<Props> = ({ title, to }) => {
  return (
    <CustomButtonContainer to={to}>
      <CustomButtonTitle>{title}</CustomButtonTitle>
    </CustomButtonContainer>
  );
};

export default CustomButton;
