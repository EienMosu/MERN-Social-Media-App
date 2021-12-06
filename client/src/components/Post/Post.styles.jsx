import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

export const Username = styled.span`
  font-size: 18px;
  margin-left: 10px;
  font-weight: 600;
  cursor: pointer;
`;

export const HourAgo = styled.span`
  font-size: 13px;
  margin-left: 10px;
`;

export const MoreContainer = styled.div`
  margin: 0px 5px;
`;

export const CenterContainer = styled.div`
  margin: 20px 0px 20px 20px;
`;

export const Desc = styled.span`
  margin-bottom: 20px;
`;

export const PostImage = styled.img`
  width: 95%;
  height: 90%;
  object-fit: cover;
  margin-top: 20px;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 20px;
  margin-bottom: 20px;
`;

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LikeIcon = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  margin-right: 7px;
`;

export const HeartIcon = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

export const LikeInfo = styled.span`
  margin-left: 10px;
  font-weight: 500;
`;

export const Comment = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;
