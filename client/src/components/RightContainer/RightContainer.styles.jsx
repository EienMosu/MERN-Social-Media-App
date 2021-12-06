import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  padding: 20px;
`;

export const BirthdayContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BirthdayIcon = styled.img`
  width: 40px;
  height: 42px;
  margin-right: 10px;
`;

export const Span = styled.span`
  font-size: 18px;
`;

export const AdContainer = styled.div`
  margin: 20px 0px;
`;

export const AdImage = styled.img`
  width: 450px;
  height: 300px;
  border-radius: 30px;
`;

export const OnlineContainer = styled.div`
  margin-top: 20px;
`;

export const Title = styled.span`
  font-size: 24px;
  font-weight: 500;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserInfoTitle = styled.h3`
  margin-bottom: 10px;
`;

export const UserInfo = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export const UserInfoName = styled.span`
  color: #696969;
  font-weight: 500;
  margin-right: 10px;
`;

export const UserInfoDetail = styled.p`
  color: #8f8f8f;
  font-weight: 300;
`;

export const UserFriendsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserFriendsTitle = styled.h3`
  margin-top: 20px;
`;

export const UserFriends = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const User = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  margin: 15px 0px;
  cursor: pointer;
`;

export const UserFriendsPhotos = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  object-fit: cover;
`;

export const UserFriendsUsernames = styled.span`
  margin-top: 5px;
`;
