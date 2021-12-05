import React from "react";
// Components
import CenterContainer from "../../components/CenterContainer";
import LeftContainer from "../../components/LeftContainer";
import Navbar from "../../components/Navbar";
import RightContainer from "../../components/RightContainer";
// Styled Components
import { MainContainer } from "./HomePage.styles";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <LeftContainer />
        <CenterContainer />
        <RightContainer />
      </MainContainer>
    </>
  );
};

export default HomePage;
