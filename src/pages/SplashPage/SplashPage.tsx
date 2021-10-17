import { useEffect } from "react";
import { useHistory } from "react-router";
import { BarLoader } from "react-spinners";
import { Logo } from "../../assets";
import { colors } from "../../utils";
import { SplashPageContainer, SplashPageLogo } from "./SplashPageStyles";

const SplashPage = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/beranda");
    }, 1500);
  }, [history]);

  return (
    <SplashPageContainer>
      <SplashPageLogo src={Logo} alt="Logo Meubel Adinda Karya" />
      <BarLoader color={colors.black} />
    </SplashPageContainer>
  );
};

export default SplashPage;
