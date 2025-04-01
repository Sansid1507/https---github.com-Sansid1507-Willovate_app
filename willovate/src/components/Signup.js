import React from 'react';
import styled from 'styled-components';
import image from '../assets/image.png';

const SignupContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: url(${image}) no-repeat center;
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: white;
  position: relative;
  padding-right: 10%;
  
  @media (max-width: 768px) {
    justify-content: center;
    padding-right: 0;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Dark overlay for better contrast */
  z-index: 1;
`;

const FormContainer = styled.div`
  background: white;
  padding: 40px;
  border-radius: 20px;
  width: 350px;
  position: relative;
  z-index: 2;
  color: black;
  
  @media (max-width: 768px) {
    width: 90%;
    padding: 20px;
  }
`;

const Input = styled.input`
  width: 90%;
  padding: 12px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid #555;
  background-color: #f0f0f0;
  color: #333;
  font-size: 14px;
  transition: all 0.3s;

  &:focus {
    border-color: #0072ff;
    box-shadow: 0 0 8px rgba(0, 114, 255, 0.5);
    outline: none;
  }
`;

const Label = styled.label`
  display: block;
  margin-top: 15px;
  font-size: 14px;
  color: #333;
  font-weight: bold;
  text-align: left;
  width: 100%;
`;

const SubmitButton = styled.button`
  background: linear-gradient(90deg, #00c9a7, #0072ff);
  color: white;
  border: none;
  padding: 12px;
  border-radius: 20px;
  margin-top: 20px;
  width: 60%;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
  display: block;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background: linear-gradient(90deg, #0072ff, #00c9a7);
  }
`;

const LeftText = styled.div`
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 70px;
  font-weight: bold;
  color: white;
  z-index: 2;
  
  @media (max-width: 768px) {
    font-size: 40px;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;

const CenteredInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SignupWithCenteredInput = () => (
  <SignupContainer>
    <Overlay />
    <LeftText>What's Next??</LeftText>
    <FormContainer>
      <h2 style={{ fontSize: '28px', fontWeight: 'bold', textAlign: 'center' }}>Sign Up</h2>
      <CenteredInputContainer>
        <Label>Name</Label>
        <Input type="text" placeholder="Enter your name" />
        <Label>Email</Label>
        <Input type="email" placeholder="Enter your email" />
        <SubmitButton>Sign Up</SubmitButton>
      </CenteredInputContainer>
    </FormContainer>
  </SignupContainer>
);

export default SignupWithCenteredInput;
