import React, { useState, useEffect } from "react";
import styled from "styled-components";
import heroBg1 from "../assets/heroBg.jpeg";
import heroBg2 from "../assets/heroBg1.jpeg";
import heroBg3 from "../assets/heroBg.jpeg";
import img1 from "../assets/floating-image1.jpeg";
import img2 from "../assets/floating-image.jpeg";
import img3 from "../assets/floating-image1.jpeg";

// Styled Components
const HeroContainer = styled.section`
  position: relative;
  width: 95%;
  height: 80vh;
  background: url(${(props) => props.bgImage}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  padding: 60px; // Increased padding for more space
  transition: background 1s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgb(0, 0, 0));
    z-index: 0;
  }

  @media (max-width: 768px) {
    height: 65vh; // Slightly reduced height for mobile screens
    padding: 40px; // Less padding
  }

  @media (max-width: 480px) {
    height: 60vh; // Reduced for smaller screens
    padding: 30px; // Even less padding
  }
`;

const Content = styled.div`
  max-width: 600px;
  z-index: 1;
  margin-left: 5%;
  position: relative;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) => (props.isVisible ? "translateY(0)" : "translateY(30px)")};
  transition: opacity 1s ease, transform 1s ease;

  @media (max-width: 768px) {
    max-width: 80%;
    margin-left: 0;
    top: 15%; // Moving content down a bit more for small screens
  }

  @media (max-width: 480px) {
    max-width: 100%;
    text-align: center;
    top: 20%; // Further adjustment on very small screens
  }
`;

const Heading = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  color: #fff;
  line-height: 1.2;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-top: 10px;
  color: #ddd;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ExploreButton = styled.button`
  margin-top: 20px;
  padding: 12px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(90deg, ${(props) => 
    props.bgIndex === 1 ? "#84F4EE, #2DEB9C" : 
    props.bgIndex === 2 ? "#C784F4, #2D5CEB" : 
    "#D1ED53, #EBAF2D"});
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 20px ${(props) => 
      props.bgIndex === 1 ? "rgba(132, 244, 238, 0.7)" : 
      props.bgIndex === 2 ? "rgba(199, 132, 244, 0.7)" : 
      "rgba(209, 237, 83, 0.7)"};
  }

  @media (max-width: 768px) {
    padding: 10px 25px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 8px 20px;
    font-size: 0.9rem;
  }
`;

// Floating Images
const ImageSection = styled.div`
  position: absolute;
  right: 7%;
  top: 70%; // Adjusted this for a lower position
  transform: translateY(-50%);
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    right: 5%;
    top: 60%; // Adjusted for better alignment
  }

  @media (max-width: 480px) {
    right: 3%;
    top: 50%; // Lower position on very small screens
    display: none; /* Still hide images on mobile screens */
  }
`;

const FloatingImage = styled.img`
  width: ${(props) => (props.isBig ? "300px" : "150px")};
  height: ${(props) => (props.isBig ? "300px" : "150px")};
  border-radius: 20px;
  border: 5px solid ${(props) => 
    props.bgIndex === 1 ? "#84F4EE" : 
    props.bgIndex === 2 ? "#C784F4" : 
    "#D1ED53"};
  box-shadow: 0px 0px 15px ${(props) => 
    props.bgIndex === 1 ? "rgba(132, 244, 238, 0.7)" : 
    props.bgIndex === 2 ? "rgba(199, 132, 244, 0.7)" : 
    "rgba(209, 237, 83, 0.7)"};
  transition: all 1s ease-in-out;
  transform: ${(props) => (props.isExiting ? "translateX(-200%)" : "translateX(0)")};
  opacity: ${(props) => (props.isExiting ? 0 : 1)};

  @media (max-width: 768px) {
    width: ${(props) => (props.isBig ? "250px" : "125px")};
    height: ${(props) => (props.isBig ? "250px" : "125px")};
  }

  @media (max-width: 480px) {
    width: ${(props) => (props.isBig ? "200px" : "100px")};
    height: ${(props) => (props.isBig ? "200px" : "100px")};
  }
`;

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(1);
  const [showContent, setShowContent] = useState(true);
  const [exitingImg, setExitingImg] = useState(null);

  const backgrounds = [
    { id: 1, bg: heroBg1, text: "You Think It,\nWe Build It", desc: "We create customized applications or systems tailored to meet your specific needs by solving unique challenges through technology.", btn: "Explore More", img: img1 },
    { id: 2, bg: heroBg2, text: "IT Consultancy", desc: "Providing strategic guidance, software architecture solutions, and seamless development to help businesses build scalable, efficient, and future-ready technology systems.", btn: "View More", img: img2 },
    { id: 3, bg: heroBg3, text: "AI & Automation", desc: "Implementing AI-powered solutions to optimize business processes, improve efficiency, and drive innovation.", btn: "Discover", img: img3 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowContent(false);
      setExitingImg(backgrounds[bgIndex - 1].img);
      setTimeout(() => {
        setBgIndex((prev) => (prev === 3 ? 1 : prev + 1));
        setShowContent(true);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [bgIndex]);

  return (
    <HeroContainer bgImage={backgrounds[bgIndex - 1].bg}>
      <Content isVisible={showContent}>
        <Heading>{backgrounds[bgIndex - 1].text}</Heading>
        <Paragraph>{backgrounds[bgIndex - 1].desc}</Paragraph>
        <ExploreButton bgIndex={bgIndex}>{backgrounds[bgIndex - 1].btn}</ExploreButton>
      </Content>

      <ImageSection>
        {exitingImg && <FloatingImage src={exitingImg} isExiting bgIndex={bgIndex} />}
        <FloatingImage src={backgrounds[bgIndex - 1].img} isBig bgIndex={bgIndex} />
      </ImageSection>
    </HeroContainer>
  );
};

export default Hero;
