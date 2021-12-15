import React, { useEffect, useState, useRef } from "react";
// Material UI Icons
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
// Firebase
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
// Axios
import { publicRequest } from "../../requestMethods";
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
  const inputRef = useRef();
  const user = useSelector((state) => state.user.currentUser);
  const [posts, setPosts] = useState([]);
  const [file, setFile] = useState(null);
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
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          const userId = user._id;

          const postDetails = {
            userId,
            desc: newPost,
            img: downloadURL,
          };
          try {
            await publicRequest.post("/posts", postDetails);

            window.location.reload(false);
          } catch (err) {
            console.log(err);
          }
        });
      }
    );
  };

  const handleFileInput = () => {
    inputRef.current.click();
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
            <input
              type="file"
              ref={inputRef}
              style={{ display: "none" }}
              onChange={(event) => setFile(event.target.files[0])}
            />
            <PermMedia
              onClick={handleFileInput}
              style={{ color: "tomato", cursor: "pointer" }}
            />
            <ListItem onClick={handleFileInput}>Photo or Video</ListItem>
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
          photo={post.img}
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
