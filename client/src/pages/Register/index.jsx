import React, { useState } from "react";
// Redux
import { useDispatch } from "react-redux";
import { register } from "../../redux/apiCalls";
// Styled Components
import {
  Container,
  CreateButton,
  LeftContainer,
  LeftDesc,
  LeftTitle,
  LeftWrapper,
  RightContainer,
  RightInput,
  RightWrapper,
} from "./Register.styles";

const Register = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      title:
        "Username should be 3-16 characters and shouldn't include any special character!",
      // regex code for only letter and numbers
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      title: "It should be a valid email address!",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      title:
        " Passwrod should be 8-16 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      title: "Password don't match!",
      pattern: values.password,
      required: true,
    },
  ];

  const handleChange = (event) => {
    setValues((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleClick = (event) => {
    event.preventDefault();

    const user = { ...values };
    register(dispatch, user);
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
          {inputs.map((input) => (
            <RightInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={handleChange}
            />
          ))}
          <CreateButton >
            Create a New Account
          </CreateButton>
        </RightWrapper>
      </RightContainer>
    </Container>
  );
};

export default Register;
