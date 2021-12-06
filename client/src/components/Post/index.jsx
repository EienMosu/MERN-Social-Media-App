import React, { useState } from "react";
// Dummy Data
import { Users } from "../../dummyData";
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

const Post = ({ desc, photo, date, userId, like, comment }) => {
  const [postLike, setPostLike] = useState(like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setPostLike(isLiked ? postLike - 1 : postLike + 1);
    setIsLiked(!isLiked);
  };

  return (
    <Container>
      <TopContainer>
        <UserContainer>
          <ProfilePicture
            src={Users.filter((user) => user.id === userId)[0].profilePicture}
          />
          <Username>
            {Users.filter((user) => user.id === userId)[0].username}
          </Username>
          <HourAgo>{date}</HourAgo>
        </UserContainer>
        <MoreContainer>
          <MoreVert style={{ cursor: "pointer" }} />
        </MoreContainer>
      </TopContainer>
      <CenterContainer>
        <Desc>{desc}</Desc>
        <PostImage src={photo} />
      </CenterContainer>
      <BottomContainer>
        <LikeContainer>
          <LikeIcon src={LikeIconPng} onClick={handleLike} />
          <HeartIcon src={HeartIconPng} onClick={handleLike} />
          <LikeInfo>{postLike} people like it</LikeInfo>
        </LikeContainer>
        <Comment>
          {comment <= 1 ? `${comment} comment` : `${comment} comments`}
        </Comment>
      </BottomContainer>
    </Container>
  );
};

export default Post;
