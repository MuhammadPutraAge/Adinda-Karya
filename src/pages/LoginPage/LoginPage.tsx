import { Logo } from "../../assets";
import {
  AuthWrapper,
  CustomButton,
  SizedBox,
  TextInput,
  PasswordInput,
} from "../../components";
import {
  LoginBrandContainer,
  LoginBrandSubtitle,
  LoginBrandTitle,
  ForgotPasswordLink,
  LoginLogo,
  LoginLogoContainer,
  NavigateToRegister,
  NavigateToRegisterLink,
} from "./LoginPageStyles";

const LoginPage = () => {
  return (
    <AuthWrapper>
      <LoginLogoContainer>
        <LoginLogo src={Logo} alt="Logo Adinda Karya" />
        <LoginBrandContainer>
          <LoginBrandSubtitle>Meubel</LoginBrandSubtitle>
          <LoginBrandTitle>Adinda Karya</LoginBrandTitle>
        </LoginBrandContainer>
      </LoginLogoContainer>

      <TextInput
        label="Alamat Email"
        type="email"
        placeholder="Masukkan alamat email anda"
      />
      <SizedBox height="2.4rem" />
      <PasswordInput
        label="Kata Sandi"
        placeholder="Masukkan kata sandi anda"
      />
      <SizedBox height="0.8rem" />
      <ForgotPasswordLink to="/lupa-password">
        Lupa kata sandi?
      </ForgotPasswordLink>
      <SizedBox height="2.4rem" />

      <CustomButton title="Masuk" onClick={() => {}} />
      <SizedBox height="0.8rem" />
      <NavigateToRegister>
        Belum punya akun?
        <NavigateToRegisterLink to="/daftar">
          Daftar Disini
        </NavigateToRegisterLink>
      </NavigateToRegister>
    </AuthWrapper>
  );
};

export default LoginPage;
