import React, { useEffect, useState } from "react";
// Material UI Icons
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
// Image
// import Image from "../../assets/person/1.jpeg";
// Axios
import { publicRequest } from "../../requestMethods";
// Dummy Data
// import { Posts } from "../../dummyData";
// Components
import Post from "../Post";
// Redux
import { useSelector } from "react-redux";
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

const CenterContainer = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    const userId = user._id;
    const getAllPost = async () => {
      try {
        const response = await publicRequest.get(`/posts/timeline/${userId}`);

        setPosts(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getAllPost();
  }, []);

  const handleNewPost = async () => {
    const userId = user._id;
    const postDetails = {
      userId,
      desc: newPost,
    };

    try {
      await publicRequest.post("/posts", postDetails);

      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <PostContainer>
        <TopPostContainer>
          <ProfilePicture src={user.profilePicture} />
          <PostInput
            placeholder={`What's in your mind ${
              user.username.charAt(0).toUpperCase() + user.username.slice(1)
            }?`}
            value={newPost}
            onChange={(event) => setNewPost(event.target.value)}
          />
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
          <PostButton onClick={handleNewPost}>Share</PostButton>
        </BottomPostContainer>
      </PostContainer>
      {posts.map((post) => (
        <Post
          key={post._id}
          id={post._id}
          desc={post.desc}
          photo={post.photo}
          date={post.createdAt}
          userId={post.userId}
          like={post.likes.length}
          comment={post.comment}
        />
      ))}
    </Container>
  );
};

export default CenterContainer;
