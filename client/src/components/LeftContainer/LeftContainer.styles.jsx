import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  height: calc(100vh - 70px);
  top: 50px;
  position: sticky;
  overflow-y: scroll;
  width: 300px;
  z-index: 998;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(179, 179, 179);
  }
`;

export const TopContainer = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  margin-bottom: 20px;
  display: flex;
  cursor: pointer;
  width: max-content;

  &:hover {
    background-color: #d6d6d6;
    border-radius: 5px;
  }
`;

export const Span = styled.div`
  font-size: 20px;
  margin-left: 10px;
`;

export const ShowMore = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #d4d4d4;
  font-size: 16px;
  font-weight: 500;
  width: 120px;
  height: 40px;
  cursor: pointer;
`;

export const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  margin-left: 20px;
`;

export const Line = styled.div`
  width: 90%;
  height: 0.5px;
  background-color: black;
`;

export const BottomContainer = styled.div`
  margin-left: 20px;
`;
