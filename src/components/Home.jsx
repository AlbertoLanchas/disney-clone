import React from "react";
import styled from "styled-components";

const Home = () => {
  return <Container>Home</Container>;
};

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("../../assets/images/home-background.png") center center /
      cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
