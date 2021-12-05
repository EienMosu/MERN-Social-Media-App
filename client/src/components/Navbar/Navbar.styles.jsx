import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  width: 100%;
  background-color: #4267b2;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const Left = styled.div`
  flex: 1;
  margin-left: 20px;
`;

export const Logo = styled.h1`
  font-size: 24px;
  color: white;
  cursor: pointer;
`;

export const Center = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`;

export const SearchBar = styled.div`
  padding: 0 10px;
  align-items: center;
  border-radius: 30px;
  width: 70%;
  height: 30px;
  background-color: white;
  display: flex;
`;

export const SearchInput = styled.input`
  width: 90%;
  border: none;
  outline: none;
  margin-left: 10px;
  font-size: 16px;
`;

export const Span = styled.span`
  color: white;
  margin-left: 15px;
  font-size: 17px;
  cursor: pointer;
`;

export const Right = styled.div`
  flex: 0.5;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
`;

export const ListItem = styled.li`
  color: white;
  font-size: 40px;
  margin-left: 10px;
  cursor: pointer;
`;

export const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
