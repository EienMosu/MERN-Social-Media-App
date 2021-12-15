import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #eeeeee;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const CoverPhoto = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  cursor: pointer;
`;

export const ProfilePicture = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 3px solid white;
  object-fit: cover;
  position: absolute;
  left: 0;
  right: 0;
  top: 150px;
  margin: auto;
  cursor: pointer;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 110px;
  margin-bottom: 15px;
`;
export const Username = styled.h3`
  font-size: 40px;
`;

export const UserMessage = styled.span`
  font-size: 24px;
  font-weight: 300;
`;

export const RightPageContainer = styled.div`
  flex: 4;
`;

export const BottomContainer = styled.div`
  display: flex;
`;
