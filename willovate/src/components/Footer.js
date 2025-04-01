import React from 'react';
import styled from 'styled-components';
import { YouTube, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { config } from '../config';

const FooterWrapper = styled.footer`
  background: linear-gradient(90deg, #00c9a7, #0072ff);
  color: white;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 20px;
  width: 100%;
  flex-wrap: wrap;
  gap: 40px; /* Gap between the columns */
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-bottom: 20px;
  justify-content: center;
`;

const Logo = styled.img`
  height: 80px;
  margin-bottom: 10px;
  width: auto;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 10px;
`;

const StyledIcon = styled.a`
  color: white;
  font-size: 32px;
  transition: color 0.3s ease;
  &:hover {
    color: #f0f0f0;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  margin-bottom: 20px;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

// Media Queries for Responsiveness
const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      {/* Logo Section */}
      <LogoSection>
        <Logo src={config?.logoSrc || ''} alt="Logo" />
        <SocialIcons>
          {config?.socialLinks?.[0]?.url && <StyledIcon href={config.socialLinks[0].url}><Twitter /></StyledIcon>}
          {config?.socialLinks?.[2]?.url && <StyledIcon href={config.socialLinks[2].url}><YouTube /></StyledIcon>}
          {config?.socialLinks?.[1]?.url && <StyledIcon href={config.socialLinks[1].url}><Instagram /></StyledIcon>}
          {config?.socialLinks?.[3]?.url && <StyledIcon href={config.socialLinks[3].url}><LinkedIn /></StyledIcon>}
        </SocialIcons>
      </LogoSection>

      {/* Footer Columns */}
      <FooterColumn>
        {config?.footerLinks?.map((link, index) => (
          <FooterLink key={index} href={link?.link || '#'}>{link?.label || 'Link'}</FooterLink>
        ))}
      </FooterColumn>

      <FooterColumn>
        <FooterLink href="#">Ongoing</FooterLink>
        <FooterLink href="#">Upcoming</FooterLink>
        <FooterLink href="#">Stipended Based</FooterLink>
      </FooterColumn>

      <FooterColumn>
        <FooterLink href="#">Home</FooterLink>
        <FooterLink href="#">Home</FooterLink>
        <FooterLink href="#">Home</FooterLink>
      </FooterColumn>
    </FooterContainer>
  </FooterWrapper>
);

export default Footer;
