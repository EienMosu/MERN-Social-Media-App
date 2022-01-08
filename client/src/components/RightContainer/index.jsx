import React from "react";
// Image
import Gift from "../../assets/gift.png";
import Ad from "../../assets/ad.png";
// Custom History
import history from "../../history";
// Components
import LeftContainerFriends from "../LeftContainerFriends";
// React Router
import { useParams } from "react-router-dom";
// Axios
import { publicRequest } from "../../requestMethods";
// Redux
import { useSelector } from "react-redux";
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
  const params = useParams();
  const userId = useSelector((state) => state.user.currentUser._id);

  const handleFollow = async () => {
    try {
      await publicRequest.put(`/users/${params.id}/follow`, { userId });

      history.push("/");
      history.go(0);
    } catch (err) {
      console.log(err);
    }
  };

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
            <FollowButton onClick={handleFollow}>Follow</FollowButton>
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
