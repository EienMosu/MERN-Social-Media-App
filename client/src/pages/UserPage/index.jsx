import React from "react";
// Images
import ProfilePhoto from "../../assets/person/1.jpeg";
import CoverPicture from "../../assets/post/4.jpeg";
// Components
import LeftContainer from "../../components/LeftContainer";
import CenterContainer from "../../components/CenterContainer";
import Navbar from "../../components/Navbar";
import RightContainer from "../../components/RightContainer";
import {
  BottomContainer,
  Container,
  CoverPhoto,
  ProfilePicture,
  RightPageContainer,
  UserContainer,
  UserInfoContainer,
  UserMessage,
  Username,
} from "./UserPage.styles";

const UserPage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <LeftContainer />
        <RightPageContainer>
          <UserContainer>
            <CoverPhoto src={CoverPicture} />
            <ProfilePicture src={ProfilePhoto} />
            <UserInfoContainer>
              <Username>Ozkan Selcuk</Username>
              <UserMessage>
                Hello There! Thanks for checking my profile!
              </UserMessage>
            </UserInfoContainer>
          </UserContainer>
          <BottomContainer>
            <CenterContainer />
            <RightContainer page="user" />
          </BottomContainer>
        </RightPageContainer>
      </Container>
    </>
  );
};

export default UserPage;
