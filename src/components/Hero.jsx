import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: var(--spacing-xl) 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(0, 255, 0, 0.1) 0%, rgba(0, 0, 0, 0) 70%);
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 1) 100%);
    z-index: 2;
  }
`;

const HeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  position: relative;
  z-index: 3;
`;

const Logo = styled(motion.div)`
  font-family: var(--font-mono);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--spacing-xl);
  display: flex;
  align-items: center;
  
  span {
    margin-left: var(--spacing-xs);
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  line-height: 1.1;
  
  span {
    color: var(--color-primary);
    position: relative;
    display: inline-block;
  }
`;

const Subtitle = styled(motion.div)`
  font-size: clamp(1.25rem, 4vw, 2rem);
  font-weight: 400;
  margin-bottom: var(--spacing-xl);
  max-width: 800px;
  
  p {
    margin-bottom: var(--spacing-md);
  }
`;

const Tagline = styled(motion.p)`
  font-family: var(--font-mono);
  font-size: 1.25rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-xl);
  max-width: 800px;
`;

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const glitchText = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.3,
      yoyo: Infinity,
      repeatDelay: 10
    }
  }
};

const Hero = () => {
  return (
    <HeroSection id="home">
      <div className="noise"></div>
      <HeroContent>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <Logo
            variants={fadeIn}
            className="terminal-text"
          >
            🕶️ <span>ZeroFrameX</span>
          </Logo>
          
          <Title 
            variants={fadeIn}
            className="glitch"
            data-text="Deploy. Dominate. Disappear."
          >
            Deploy. Dominate. Disappear.
          </Title>
          
          <Subtitle variants={staggerContainer}>
            <motion.p variants={fadeIn}>
              This isn't SaaS.
            </motion.p>
            <motion.p variants={fadeIn}>
              This isn't no-code.
            </motion.p>
            <motion.p variants={fadeIn}>
              This is war-grade autonomy — wrapped in silence.
            </motion.p>
          </Subtitle>
          
          <Tagline
            variants={glitchText}
          >
            &gt; System initialized. Awaiting command...
          </Tagline>
        </motion.div>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
