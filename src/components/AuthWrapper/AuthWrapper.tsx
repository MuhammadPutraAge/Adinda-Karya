import {
  AuthWrapperBackground,
  AuthWrapperContainer,
  AuthWrapperContent,
} from "./AuthWrapperStyles";

const AuthWrapper: React.FC = ({ children }) => {
  return (
    <AuthWrapperContainer>
      <AuthWrapperContent>{children}</AuthWrapperContent>
      <AuthWrapperBackground />
    </AuthWrapperContainer>
  );
};

export default AuthWrapper;
