import React, { useEffect, useState } from "react";
// Images
// import ProfilePhoto from "../../assets/person/1.jpeg";
// import CoverPicture from "../../assets/post/4.jpeg";
// Components
import LeftContainer from "../../components/LeftContainer";
import CenterContainer from "../../components/CenterContainer";
import Navbar from "../../components/Navbar";
import RightContainer from "../../components/RightContainer";
// Redux
import { useSelector } from "react-redux";
// Axios
import { publicRequest } from "../../requestMethods";
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
import { useParams } from "react-router-dom";

const UserPage = () => {
  const params = useParams();
  const userId = params.id;
  const initialState = {
    username: "",
    profilePicture: "",
    coverPicture: "",
    city: "",
    from: "",
    realationShip: "",
  };

  const [user, setUser] = useState(initialState);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await publicRequest.get(`/users/${userId}`);

        console.log(response.data);
        setUser(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getUser();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <LeftContainer />
        {user && (
          <RightPageContainer>
            <UserContainer>
              <CoverPhoto src={user.coverPicture} />
              <ProfilePicture src={user.profilePicture} />
              <UserInfoContainer>
                <Username>
                  {user.username.charAt(0).toUpperCase() +
                    user.username.slice(1)}
                </Username>
                <UserMessage>{user.desc}</UserMessage>
              </UserInfoContainer>
            </UserContainer>
            <BottomContainer>
              <CenterContainer />
              <RightContainer
                page="user"
                city={user.city}
                from={user.from}
                relationShip={user.relationShip}
              />
            </BottomContainer>
          </RightPageContainer>
        )}
      </Container>
    </>
  );
};

export default UserPage;
