import React from "react";
import { Container, Image, Span } from "./LeftContainerFriends.styles";

const LeftContainerFriends = ({ name, image }) => {
  return (
    <Container>
      <Image src={image} />
      <Span>{name}</Span>
    </Container>
  );
};

export default LeftContainerFriends;
