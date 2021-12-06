import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin-bottom: 5px;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
`;

export const Span = styled.span`
  font-size: 18px;
`;

export const Online = styled.div`
  position: absolute;
  background-color: #00b600;
  width: 12px;
  height: 12px;
  border: 0.3px solid white;
  border-radius: 50%;
  left: 27px;
  top: 2px;
`;
