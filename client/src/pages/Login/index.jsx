import React, { useState } from "react";
// Redux
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
// Custom History
import history from "../../history";
// Styled Components
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
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (event) => {
    event.preventDefault();

    const user = {
      username,
      password,
    };
    login(dispatch, user);
  };

  const handleCreate = () => {
    history.push("/register");
    history.go(0);
  };

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
        <RightWrapper onSubmit={handleClick}>
          <RightInput
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <RightInput
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <LoginButton>Log In</LoginButton>
          <ForgotPassword>Forgot Password?</ForgotPassword>

          <CreateButton onClick={handleCreate}>
            Create a New Account
          </CreateButton>
        </RightWrapper>
      </RightContainer>
    </Container>
  );
};

export default Login;
