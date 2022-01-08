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
// Redux
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userRedux";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);

  const handleLogout = () => {
    dispatch(logout());
  };

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
        <Span onClick={handleLogout}>Logout</Span>
      </Right>
    </Container>
  );
};

export default Navbar;
