import React from "react";
import {
  Container,
  CreateButton,
  ForgotPassword,
  LeftContainer,
  LeftDesc,
  LeftTitle,
  LeftWrapper,
  LoginButton,
  RightContainer,
  RightInput,
  RightWrapper,
} from "./Login.styles";

const Login = () => {
  return (
    <Container>
      <LeftContainer>
        <LeftWrapper>
          <LeftTitle>Ozkan's Social</LeftTitle>
          <LeftDesc>
            Connect with friends and the world around you on Ozkan's Social
          </LeftDesc>
        </LeftWrapper>
      </LeftContainer>
      <RightContainer>
        <RightWrapper>
          <RightInput placeholder="Username" />
          <RightInput placeholder="Password" />
          <LoginButton>Log In</LoginButton>
          <ForgotPassword>Forgot Password?</ForgotPassword>
          <CreateButton>Create a New Account</CreateButton>
        </RightWrapper>
      </RightContainer>
    </Container>
  );
};

export default Login;
