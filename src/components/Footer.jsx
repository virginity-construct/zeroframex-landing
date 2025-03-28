import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterSection = styled.footer`
  padding: var(--spacing-xl) 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, rgba(0, 255, 0, 0) 0%, rgba(0, 255, 0, 0.5) 50%, rgba(0, 255, 0, 0) 100%);
  }
`;

const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterLogo = styled.div`
  font-family: var(--font-mono);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
  display: flex;
  align-items: center;
  
  span {
    margin-left: var(--spacing-xs);
  }
`;

const FooterText = styled.p`
  text-align: center;
  font-size: 0.875rem;
  opacity: 0.7;
  margin-bottom: var(--spacing-md);
`;

const FooterLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
`;

const FooterLink = styled.a`
  color: var(--color-text);
  font-size: 0.875rem;
  opacity: 0.7;
  transition: all 0.2s ease;
  
  &:hover {
    color: var(--color-primary);
    opacity: 1;
  }
`;

const Copyright = styled.p`
  font-size: 0.75rem;
  opacity: 0.5;
  text-align: center;
`;

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterSection>
      <FooterContent>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <FooterLogo>
            🕶️ <span>ZeroFrameX</span>
          </FooterLogo>
          
          <FooterText>
            Deploy. Dominate. Disappear.
          </FooterText>
          
          <FooterLinks>
            <FooterLink href="#home">Home</FooterLink>
            <FooterLink href="#features">Features</FooterLink>
            <FooterLink href="#access">Access</FooterLink>
          </FooterLinks>
          
          <Copyright>
            © {currentYear} ZeroFrameX. All rights reserved.
          </Copyright>
        </motion.div>
      </FooterContent>
    </FooterSection>
  );
};

export default Footer;
