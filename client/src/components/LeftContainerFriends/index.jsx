import React from "react";
import { Container, Image, Online, Span } from "./LeftContainerFriends.styles";

const LeftContainerFriends = ({ name, image, online }) => {
  return (
    <Container>
      <Image src={image} />
      <Span>{name}</Span>
      {online === "online" && <Online />}
    </Container>
  );
};

export default LeftContainerFriends;
