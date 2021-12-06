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
} from "./Register.styles";

const Register = () => {
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
          <RightInput placeholder="Email" />
          <RightInput placeholder="Password" />
          <RightInput placeholder="Confirm Password" />
          <LoginButton>Log In</LoginButton>
          <ForgotPassword>Forgot Password?</ForgotPassword>
          <CreateButton>Create a New Account</CreateButton>
        </RightWrapper>
      </RightContainer>
    </Container>
  );
};

export default Register;
