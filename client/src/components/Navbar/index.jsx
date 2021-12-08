import React from "react";
// Matererial UI Icons
import { Person, Notifications, Message, Search } from "@material-ui/icons";
// Image
import Image from "../../assets/person/1.jpeg";
// Styled Components
import {
  Center,
  Container,
  Left,
  ListItem,
  Logo,
  PersonNotification,
  Profile,
  Right,
  SearchBar,
  SearchInput,
  Span,
} from "./Navbar.styles";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <Container>
      <Left>
        <Link to="/" style={{textDecoration:"none", width:"0px"}}>
          <Logo>Ozkan's Social</Logo>
        </Link>
      </Left>
      <Center>
        <SearchBar>
          <Search />
          <SearchInput placeholder="Search for friend, post or video" />
        </SearchBar>
        <Span>Homepage</Span>
        <Span>Timeline</Span>
      </Center>
      <Right>
        <ListItem>
          <PersonNotification>1</PersonNotification>
          <Person style={{ fontSize: "28px" }} />
        </ListItem>
        <ListItem>
          <PersonNotification>5</PersonNotification>
          <Message style={{ fontSize: "28px" }} />
        </ListItem>
        <ListItem>
          <PersonNotification>2</PersonNotification>
          <Notifications style={{ fontSize: "28px" }} />
        </ListItem>
        <Profile src={Image} />
      </Right>
    </Container>
  );
};

export default index;
