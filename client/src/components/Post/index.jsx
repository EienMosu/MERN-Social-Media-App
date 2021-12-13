import React, { useEffect, useState } from "react";
// Dummy Data
// import { Users } from "../../dummyData";
// Timeago.js
import { format } from "timeago.js";
// Axios
import { publicRequest } from "../../requestMethods";
// Images
import LikeIconPng from "../../assets/like.png";
import HeartIconPng from "../../assets/heart.png";
// Material UI Icons
import { MoreVert } from "@material-ui/icons";
// Styled Components
import {
  BottomContainer,
  CenterContainer,
  Comment,
  Container,
  Desc,
  HeartIcon,
  HourAgo,
  LikeContainer,
  LikeIcon,
  LikeInfo,
  MoreContainer,
  PostImage,
  ProfilePicture,
  TopContainer,
  UserContainer,
  Username,
} from "./Post.styles";
import { Link } from "react-router-dom";

const Post = ({ desc, photo, date, userId, like, comment, id }) => {
  const [postData, setPostData] = useState(null);
  const [likeNumber, setLikeNumber] = useState(like);
  const [preLikeNumber, setPreLikeNumber] = useState(false);

  const handleLike = async () => {
    setLikeNumber(preLikeNumber ? likeNumber - 1 : likeNumber + 1);
    setPreLikeNumber(!preLikeNumber);

    try {
      await publicRequest.put(`/posts/${id}/like`, { userId });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await publicRequest.get(`/users/${userId}`);

        setPostData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getPost();
  }, []);

  return (
    <Container>
      <TopContainer>
        <UserContainer>
          {postData && (
            <>
              <Link to={`/user/${userId}`}>
                <ProfilePicture src={postData.profilePicture} />
              </Link>
              <Link
                to={`/user/${userId}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Username>
                  {postData.username.charAt(0).toUpperCase() +
                    postData.username.slice(1)}
                </Username>
              </Link>
            </>
          )}
          <HourAgo>{format(date)}</HourAgo>
        </UserContainer>
        <MoreContainer>
          <MoreVert style={{ cursor: "pointer" }} />
        </MoreContainer>
      </TopContainer>
      <CenterContainer>
        <Desc>{desc}</Desc>
        {photo && <PostImage src={photo} />}
      </CenterContainer>
      <BottomContainer>
        <LikeContainer>
          <LikeIcon src={LikeIconPng} onClick={handleLike} />
          <HeartIcon src={HeartIconPng} onClick={handleLike} />
          <LikeInfo>{likeNumber} people like it</LikeInfo>
        </LikeContainer>
        <Comment>{comment ? `${comment} comments` : "0 comment"}</Comment>
      </BottomContainer>
    </Container>
  );
};

export default Post;
