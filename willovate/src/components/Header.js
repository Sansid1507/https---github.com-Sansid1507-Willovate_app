import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    width: 100%;
  }
`;

const Navbar = styled.nav`
  background: linear-gradient(90deg, rgb(0, 201, 167, 0.7), rgb(0, 114, 255, 0.5));
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  z-index: 10;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
  ${({ scroll }) => scroll && "background: linear-gradient(90deg, rgb(0, 114, 255, 0.7), rgb(0, 201, 167, 0.5));"}
`;

const Logo = styled.img`
  height: 50px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding-left: 10px;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: absolute;
    top: 60px;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 20px;
    z-index: 3;
    width: 150px; /* Adjusted width for narrower container */
    height: auto;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: #0cf;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 4px;

  & div {
    width: 30px;
    height: 4px;
    background-color: #fff;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar scroll={scroll}>
        <Logo src="/logo.png" alt="Logo" />
        <HamburgerIcon onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </HamburgerIcon>
        <NavLinks isOpen={isOpen}>
          <NavLink href="#">About Us</NavLink>
          <NavLink href="#">Contact</NavLink>
          <NavLink href="#">Services</NavLink>
          <NavLink href="#">Project</NavLink>
        </NavLinks>
      </Navbar>
    </>
  );
};

export default Header;
