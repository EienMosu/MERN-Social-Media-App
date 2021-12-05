import React from "react";
// Material UI Icons
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
// Dummy Data
import { Users } from "../../dummyData";
// Styled Components
import {
  BottomContainer,
  CenterContainer,
  Container,
  Line,
  List,
  ListItem,
  ShowMore,
  Span,
  TopContainer,
} from "./LeftContainer.styles";
import LeftContainerFriends from "../LeftContainerFriends";

const LeftContainer = () => {
  return (
    <Container>
      <TopContainer>
        <List>
          <ListItem>
            <RssFeed />
            <Span>Feed</Span>
          </ListItem>
          <ListItem>
            <Chat />
            <Span>Chats</Span>
          </ListItem>
          <ListItem>
            <PlayCircleFilledOutlined />
            <Span>Videos</Span>
          </ListItem>
          <ListItem>
            <Group />
            <Span>Groups</Span>
          </ListItem>
          <ListItem>
            <Bookmark />
            <Span>Bookmarks</Span>
          </ListItem>
          <ListItem>
            <HelpOutline />
            <Span>Questions</Span>
          </ListItem>
          <ListItem>
            <WorkOutline />
            <Span>Jobs</Span>
          </ListItem>
          <ListItem>
            <Event />
            <Span>Events</Span>
          </ListItem>
          <ListItem>
            <School />
            <Span>Courses</Span>
          </ListItem>
        </List>
        <ShowMore>Show More</ShowMore>
      </TopContainer>
      <CenterContainer>
        <Line />
      </CenterContainer>
      <BottomContainer>
        {Users.map((user) => (
          <LeftContainerFriends
            key={user.id}
            name={user.username}
            image={user.profilePicture}
          />
        ))}
      </BottomContainer>
    </Container>
  );
};

export default LeftContainer;
