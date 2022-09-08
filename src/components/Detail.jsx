import React from "react";
import styled from "styled-components";

const Detail = () => {
  return (
    <Container>
      <Background>
        <img src="/assets/images/login-background.jpg" alt="background image" />
      </Background>
      <ImageTitle>
        <img src="/assets/images/logo.svg" alt="" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/assets/images/play-icon-black.png" alt="play button" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/assets/images/play-icon-white.png" alt="trailer button" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupwatchButton>
          <img src="/assets/images/group-icon.png" alt="" />
        </GroupwatchButton>
      </Controls>
      <Subtitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Subtitle>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam expedita
        numquam id odio, nesciunt soluta laboriosam, dignissimos mollitia amet
        aliquid porro sit eius vero fugit obcaecati aut et explicabo est. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Deleniti amet
        obcaecati aut. Modi autem incidunt tempore dignissimos repellendus vel,
        quia cum beatae quo optio labore accusamus earum id laboriosam harum.
      </Description>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  position: relative;
  min-height: calc(180vh-70px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0;
  opacity: 0.8;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: flex-start;
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const PlayButton = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;
const AddButton = styled.button`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupwatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  margin-top: 16px;
  text-align: justify;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
