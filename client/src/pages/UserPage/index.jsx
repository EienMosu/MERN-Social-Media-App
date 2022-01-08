import React, { useEffect, useState, useRef } from "react";
// Firebase
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
// Components
import LeftContainer from "../../components/LeftContainer";
import CenterContainer from "../../components/CenterContainer";
import Navbar from "../../components/Navbar";
import RightContainer from "../../components/RightContainer";
// Axios
import { publicRequest } from "../../requestMethods";
// React Router
import { useParams } from "react-router-dom";
// Styled Components
import {
  BottomContainer,
  Container,
  CoverPhoto,
  ProfilePicture,
  RightPageContainer,
  SubmitButton,
  UserContainer,
  UserInfoContainer,
  UserMessage,
  Username,
} from "./UserPage.styles";

const UserPage = () => {
  const initialState = {
    username: "",
    profilePicture: "",
    coverPicture: "",
    city: "",
    from: "",
    realationShip: "",
  };

  const params = useParams();
  const userId = params.id;

  const [user, setUser] = useState(initialState);
  const [file, setFile] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await publicRequest.get(`/users/${userId}`);

        console.log(response.data);
        setUser(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getUser();
  }, []);

  const handleProfilePicture = async () => {
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
            profilePicture: downloadURL,
          };
          try {
            await publicRequest.put(`/users/${userId}`, postDetails);

            window.location.reload(false);
          } catch (err) {
            console.log(err);
          }
        });
      }
    );
  };

  const handleCoverPicture = async () => {
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
            coverPicture: downloadURL,
          };
          try {
            await publicRequest.put(`/users/${userId}`, postDetails);

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
    <>
      <Navbar />
      <Container>
        <LeftContainer />
        {user && (
          <RightPageContainer>
            <UserContainer>
              <CoverPhoto src={user.coverPicture} />
              <ProfilePicture src={user.profilePicture} />
              <UserInfoContainer>
                <Username>
                  {user.username.charAt(0).toUpperCase() +
                    user.username.slice(1)}
                </Username>
                <UserMessage>{user.desc}</UserMessage>
              </UserInfoContainer>
            </UserContainer>
            <input
              type="file"
              ref={inputRef}
              style={{ display: "none" }}
              onChange={(event) => setFile(event.target.files[0])}
            />
            <SubmitButton onClick={handleFileInput}>Add Photo</SubmitButton>
            <SubmitButton onClick={handleProfilePicture}>
              Change Profile Picture
            </SubmitButton>
            <SubmitButton onClick={handleCoverPicture}>
              Change Cover Image
            </SubmitButton>
            <BottomContainer>
              <CenterContainer />
              <RightContainer
                page="user"
                city={user.city}
                from={user.from}
                relationShip={user.relationShip}
              />
            </BottomContainer>
          </RightPageContainer>
        )}
      </Container>
    </>
  );
};

export default UserPage;
