import { BarLoader } from "react-spinners";
import { Logo } from "../../assets";
import { colors } from "../../utils";
import { SplashPageContainer, SplashPageLogo } from "./SplashPageStyles";

const SplashPage = () => {
  return (
    <SplashPageContainer>
      <SplashPageLogo src={Logo} alt="Logo Meubel Adinda Karya" />
      <BarLoader color={colors.black} />
    </SplashPageContainer>
  );
};

export default SplashPage;
