import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import db from "../firebase";
import NewDisney from "./NewDiseney";
import Originals from "./Originals";
import Trending from "./Trending";
import { setMovies } from "../features/movies/moviesSlice";
import { selectUserName } from "../features/user/userSlice";
import {
  collection,
  getDoc,
  getDocs,
  doc,
  onSnapshot,
  getFirestore,
} from "firebase/firestore";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let newDisney = [];
  let recommends = [];
  let originals = [];
  let trending = [];

  const db = getFirestore();
  const movieRef = collection(db, "movies");
  getDoc(movieRef)
    .then((snapshot) => {
      let movies = [];
      snapshot.docs.forEach((doc) => {
        movies.push({ ...doc.data(), id: doc.id });
      });
      console.log(movies);
    })
    .catch((err) => {
      console.log(err.message);
    });

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  overflow-x: hidden;

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
