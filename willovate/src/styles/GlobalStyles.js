import styled, { createGlobalStyle } from "styled-components";

// Global styles for body
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #0a0a0a;
    color: #fff;
  }
`;

// Hero Section Container
export const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("../assets/heroBg.jpeg") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  padding: 50px;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 1));
  }
`;

// Text Content Section
export const Content = styled.div`
  max-width: 600px;
  z-index: 1;
`;

// Heading Styles
export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

// Paragraph Styles
export const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-top: 10px;
`;

// Button with Animation
export const ExploreButton = styled.button`
  margin-top: 20px;
  padding: 12px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(90deg, #0cf, #07f);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 20px rgba(0, 255, 255, 0.7);
  }
`;

// Floating Image Container
export const ImageSection = styled.div`
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 20px;
`;

// Floating Image Styles
export const FloatingImage = styled.img`
  width: 250px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.3);
`;

export default GlobalStyle;
