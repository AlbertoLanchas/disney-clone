import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <Nav>
        <Logo src="/assets/images/logo.svg" alt="Disney+" />
        <NavMenu>
          <a href="/home">
            <img src="/assets/images/home-icon.svg" alt="HOME" />
            <span>HOME</span>
          </a>
          <a href="/search">
            <img src="/assets/images/search-icon.svg" alt="SEARCH" />
            <span>SEARCH</span>
          </a>
          <a href="/watchlist">
            <img src="/assets/images/watchlist-icon.svg" alt="WATCHLIST" />
            <span>WATCHLIST</span>
          </a>
          <a href="/originals">
            <img src="/assets/images/original-icon.svg" alt="ORIGINALS" />
            <span>ORIGINALS</span>
          </a>
          <a href="/movies">
            <img src="/assets/images/movie-icon.svg" alt="MOVIES" />
            <span>MOVIES</span>
          </a>
          <a href="/series">
            <img src="/assets/images/series-icon.svg" alt="SERIES" />
            <span>SERIES</span>
          </a>
        </NavMenu>
        <UserImg src="/assets/images/logo.svg" alt="Disney+" />
      </Nav>
    </div>
  );
};

export default Header;
const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  padding: 0;
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 40px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
