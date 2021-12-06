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
} from "./RightContainer.styles";

const RightContainer = () => {
  return (
    <Container>
      <BirthdayContainer>
        <BirthdayIcon src={Gift} />
        <Span>
          <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
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
    </Container>
  );
};

export default RightContainer;
