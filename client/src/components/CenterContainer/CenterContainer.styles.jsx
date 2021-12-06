import styled from "styled-components";

export const Container = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PostContainer = styled.div`
  width: 90%;
  height: 200px;
  margin-top: 25px;
  margin-bottom: 50px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const TopPostContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const PostInput = styled.input`
  width: 90%;
  margin-left: 20px;
  font-size: 18px;
  border: none;
  outline: none;
`;

export const LineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px 0px;
`;

export const PostLine = styled.div`
  width: 90%;
  height: 0.1px;
  background-color: #a1a1a1;
`;

export const BottomPostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 50px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-left: 2px;
  margin-right: 25px;
  font-size: 18px;
  cursor: pointer;
`;

export const PostButton = styled.button`
  background-color: green;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  width: 70px;
  height: 35px;
  cursor: pointer;
`;
