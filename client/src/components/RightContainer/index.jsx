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
  FollowButton,
  FollowContainer,
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

const RightContainer = ({ page, city, from, relationShip }) => {
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
          <FollowContainer>
            <FollowButton>Follow</FollowButton>
          </FollowContainer>
          <UserInfoContainer>
            <UserInfoTitle>User Information</UserInfoTitle>
            <UserInfo>
              <UserInfoName>City:</UserInfoName>
              <UserInfoDetail>{city}</UserInfoDetail>
            </UserInfo>
            <UserInfo>
              <UserInfoName>From:</UserInfoName>
              <UserInfoDetail>{from}</UserInfoDetail>
            </UserInfo>
            <UserInfo>
              <UserInfoName>Relationship:</UserInfoName>
              <UserInfoDetail>{relationShip}</UserInfoDetail>
            </UserInfo>
          </UserInfoContainer>
          <UserFriendsContainer>
            <UserFriendsTitle>User Friends</UserFriendsTitle>
            <UserFriends>
              {Users.map((user) => (
                <User key={user.id}>
                  <UserFriendsPhotos src={user.profilePicture} />
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
