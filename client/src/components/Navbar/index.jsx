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
  List,
  ListItem,
  Logo,
  Profile,
  Right,
  SearchBar,
  SearchInput,
  Span,
} from "./Navbar.styles";

const index = () => {
  return (
    <Container>
      <Left>
        <Logo>Ozkan's Social</Logo>
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
        <List>
          <ListItem>
            <Person style={{ fontSize: "28px" }} />
          </ListItem>
          <ListItem>
            <Notifications style={{ fontSize: "28px" }} />
          </ListItem>
          <ListItem>
            <Message style={{ fontSize: "28px" }} />
          </ListItem>
        </List>
        <Profile src={Image} />
      </Right>
    </Container>
  );
};

export default index;
