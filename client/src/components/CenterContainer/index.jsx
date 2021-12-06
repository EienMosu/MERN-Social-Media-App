import React from "react";
// Material UI Icons
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  PortraitSharp,
} from "@material-ui/icons";
// Image
import Image from "../../assets/person/1.jpeg";
// Dummy Data
import { Posts } from "../../dummyData";
// Styled Components
import {
  BottomPostContainer,
  Container,
  LineContainer,
  List,
  ListItem,
  PostButton,
  PostContainer,
  PostInput,
  PostLine,
  ProfilePicture,
  TopPostContainer,
} from "./CenterContainer.styles";
import Post from "../Post";

const CenterContainer = () => {
  return (
    <Container>
      <PostContainer>
        <TopPostContainer>
          <ProfilePicture src={Image} />
          <PostInput placeholder="What's in your mind Ozkan?" />
        </TopPostContainer>
        <LineContainer>
          <PostLine />
        </LineContainer>
        <BottomPostContainer>
          <List>
            <PermMedia style={{ color: "tomato", cursor: "pointer" }} />
            <ListItem>Photo or Video</ListItem>
            <Label style={{ color: "blue", cursor: "pointer" }} />
            <ListItem>Tag</ListItem>
            <Room style={{ color: "green", cursor: "pointer" }} />
            <ListItem>Location</ListItem>
            <EmojiEmotions style={{ color: "goldenrod", cursor: "pointer" }} />
            <ListItem>Feelings</ListItem>
          </List>
          <PostButton>Share</PostButton>
        </BottomPostContainer>
      </PostContainer>
      {Posts.map((post) => (
        <Post
          key={post.id}
          desc={post.desc}
          photo={post.photo}
          date={post.date}
          userId={post.userId}
          like={post.like}
          comment={post.comment}
        />
      ))}
    </Container>
  );
};

export default CenterContainer;
