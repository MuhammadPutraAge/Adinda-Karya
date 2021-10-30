import { Logo } from "../../assets";
import {
  AuthWrapper,
  CustomButton,
  PasswordInput,
  SizedBox,
  TextInput,
} from "../../components";
import {
  NavigateToLogin,
  NavigateToLoginLink,
  RegisterBrandContainer,
  RegisterBrandSubtitle,
  RegisterBrandTitle,
  RegisterLogo,
  RegisterLogoContainer,
} from "./RegisterPageStyles";

const RegisterPage = () => {
  return (
    <AuthWrapper>
      <RegisterLogoContainer>
        <RegisterLogo src={Logo} alt="Logo Adinda Karya" />
        <RegisterBrandContainer>
          <RegisterBrandSubtitle>Meubel</RegisterBrandSubtitle>
          <RegisterBrandTitle>Adinda Karya</RegisterBrandTitle>
        </RegisterBrandContainer>
      </RegisterLogoContainer>

      <TextInput
        label="Nama Lengkap"
        type="text"
        placeholder="Masukkan nama lengkap anda"
      />
      <SizedBox height="2.4rem" />
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
      <SizedBox height="2.4rem" />
      <PasswordInput
        label="Konfirmasi Kata Sandi"
        placeholder="Ketik Ulang kata sandi anda"
      />
      <SizedBox height="4rem" />

      <CustomButton title="Daftar" onClick={() => {}} />
      <SizedBox height="0.8rem" />
      <NavigateToLogin>
        Sudah punya akun?
        <NavigateToLoginLink to="/masuk">Masuk Disini</NavigateToLoginLink>
      </NavigateToLogin>
    </AuthWrapper>
  );
};

export default RegisterPage;
