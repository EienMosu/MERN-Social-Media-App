import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  padding: 20px;
  height: calc(100vh - 70px);
  position: sticky;
  overflow-y: scroll;

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

export const TopContainer = styled.div``;

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
  background-color: #bebdbd;
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
`;

export const Line = styled.div`
  width: 250px;
  height: 0.5px;
  background-color: black;
`;

export const BottomContainer = styled.div``;
