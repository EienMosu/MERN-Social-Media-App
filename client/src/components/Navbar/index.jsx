import React from "react";
// Matererial UI Icons
import { Person, Notifications, Message, Search } from "@material-ui/icons";
// Image
// import Image from "../../assets/person/1.jpeg";
// Reacr Router
import { Link } from "react-router-dom";
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
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Container>
      <Left>
        <Link to="/" style={{ textDecoration: "none" }}>
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
        <Link to={`/user/${user._id}`}>
          <Profile src={user.profilePicture} />
        </Link>
      </Right>
    </Container>
  );
};

export default Navbar;
