import React from "react";
// Image
import Gift from "../../assets/gift.png";
import Ad from "../../assets/ad.png";
// Components
import LeftContainerFriends from "../LeftContainerFriends";
// Dummy Data
import { Users } from "../../dummyData";
// Styled Components
import {
  AdContainer,
  AdImage,
  BirthdayContainer,
  BirthdayIcon,
  Container,
  OnlineContainer,
  Span,
  Title,
  User,
  UserFriends,
  UserFriendsContainer,
  UserFriendsPhotos,
  UserFriendsTitle,
  UserFriendsUsernames,
  UserInfo,
  UserInfoContainer,
  UserInfoDetail,
  UserInfoName,
  UserInfoTitle,
} from "./RightContainer.styles";

const RightContainer = ({ page }) => {
  return (
    <Container>
      {page === "home" ? (
        <>
          <BirthdayContainer>
            <BirthdayIcon src={Gift} />
            <Span>
              <b>Pola Foster</b> and <b>3 other friends</b> have a birthday
              today.
            </Span>
          </BirthdayContainer>
          <AdContainer>
            <AdImage src={Ad} />
          </AdContainer>
          <Title>Online Friends</Title>
          <OnlineContainer>
            {Users.map((user) => (
              <LeftContainerFriends
                name={user.username}
                image={user.profilePicture}
                online={"online"}
                key={user.id}
              />
            ))}
          </OnlineContainer>
        </>
      ) : (
        <>
        <UserInfoContainer>
          <UserInfoTitle>User Information</UserInfoTitle>
          <UserInfo>
            <UserInfoName>City:</UserInfoName>
            <UserInfoDetail>New York</UserInfoDetail>
          </UserInfo>
          <UserInfo>
            <UserInfoName>From:</UserInfoName>
            <UserInfoDetail>Madrid</UserInfoDetail>
          </UserInfo>
          <UserInfo>
            <UserInfoName>Relationship:</UserInfoName>
            <UserInfoDetail>Single</UserInfoDetail>
          </UserInfo>
        </UserInfoContainer>
        <UserFriendsContainer>
          <UserFriendsTitle>User Friends</UserFriendsTitle>
          <UserFriends>
            {Users.map((user) => (
              <User>
              <UserFriendsPhotos src={user.profilePicture}/>
              <UserFriendsUsernames>{user.username}</UserFriendsUsernames>
            </User>
              ))}
          </UserFriends>
        </UserFriendsContainer>
        </>
      )}
    </Container>
  );
};

export default RightContainer;
