import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #e9e9e9;
`;

export const LeftContainer = styled.div`
  height: 100vh;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
`;

export const LeftTitle = styled.h1`
  font-size: 50px;
  color: #4267b2;
  margin-bottom: 10px;
`;

export const LeftDesc = styled.span`
  font-size: 28px;
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RightWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  padding: 50px 5px;
  background-color: white;
  border-radius: 20px;
`;

export const RightInput = styled.input`
  font-size: 18px;
  margin: 10px 0px;
  padding: 5px 20px;
  width: 80%;
  height: 50px;
  border: none;
  border: 1px solid gray;
  outline: none;
  border-radius: 10px;
`;

export const LoginButton = styled.button`
  font-size: 24px;
  margin: 20px 0px;
  padding: 15px 20px;
  width: 80%;
  border: none;
  border-radius: 10px;
  background-color: #4267b2;
  color: white;
  cursor: pointer;
`;

export const ForgotPassword = styled.span`
  color: #0273be;
  cursor: pointer;
`;

export const CreateButton = styled.button`
  font-size: 24px;
  margin: 20px 0px;
  padding: 15px 20px;
  width: 60%;
  border: none;
  border-radius: 10px;
  background-color: #197e00;
  color: white;
  cursor: pointer;
`;
