import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FeaturesSection = styled.section`
  padding: var(--spacing-xxl) 0;
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
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, rgba(0, 255, 0, 0) 0%, rgba(0, 255, 0, 0.5) 50%, rgba(0, 255, 0, 0) 100%);
  }
`;

const FeaturesContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  margin-bottom: var(--spacing-xl);
  color: var(--color-primary);
  font-family: var(--font-mono);
  
  span {
    color: var(--color-text);
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xxl);
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Feature = styled(motion.div)`
  padding: var(--spacing-lg);
  border: 1px solid rgba(0, 255, 0, 0.2);
  background: rgba(0, 0, 0, 0.5);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top left, rgba(0, 255, 0, 0.1) 0%, rgba(0, 0, 0, 0) 70%);
    z-index: -1;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
  color: var(--color-primary);
  font-family: var(--font-mono);
  display: flex;
  align-items: center;
  
  span {
    margin-right: var(--spacing-sm);
  }
`;

const FeatureContent = styled.div`
  p {
    margin-bottom: var(--spacing-sm);
  }
  
  ul {
    list-style: none;
    margin-bottom: var(--spacing-md);
    
    li {
      margin-bottom: var(--spacing-xs);
      position: relative;
      padding-left: var(--spacing-md);
      
      &::before {
        content: '›';
        position: absolute;
        left: 0;
        color: var(--color-primary);
      }
    }
  }
`;

const TargetAudience = styled(motion.div)`
  margin-top: var(--spacing-xxl);
`;

const AudienceList = styled.ul`
  list-style: none;
  margin-bottom: var(--spacing-xl);
  
  li {
    margin-bottom: var(--spacing-md);
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    
    &::before {
      content: '⟶';
      color: var(--color-primary);
      margin-right: var(--spacing-md);
      font-family: var(--font-mono);
    }
  }
`;

const Warning = styled(motion.p)`
  font-family: var(--font-mono);
  font-size: 1.5rem;
  margin-top: var(--spacing-xl);
  padding: var(--spacing-lg);
  border: 1px solid rgba(255, 0, 102, 0.3);
  background: rgba(255, 0, 102, 0.05);
  text-align: center;
`;

// Animation variants
const fadeInUp = {
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

const Features = () => {
  return (
    <FeaturesSection id="features">
      <FeaturesContent>
        <SectionTitle
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          🧠 <span>What It Is</span>
        </SectionTitle>
        
        <FeatureGrid>
          <Feature
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <FeatureTitle>
              <span>⚡</span> Modular AGI Operator
            </FeatureTitle>
            <FeatureContent>
              <p>A modular AGI operator that builds, runs, and adapts on command.</p>
              <ul>
                <li>Web apps</li>
                <li>Bots</li>
                <li>Protocols</li>
                <li>Systems</li>
              </ul>
              <p>No devs. No decks. No delay.</p>
            </FeatureContent>
          </Feature>
          
          <Feature
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <FeatureTitle>
              <span>🔄</span> Autonomous Execution
            </FeatureTitle>
            <FeatureContent>
              <p>ZeroFrameX doesn't just generate code — it executes, monitors, and adapts.</p>
              <ul>
                <li>Self-healing systems</li>
                <li>Autonomous deployment</li>
                <li>Continuous optimization</li>
                <li>Silent operation</li>
              </ul>
            </FeatureContent>
          </Feature>
        </FeatureGrid>
        
        <TargetAudience
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <SectionTitle
            variants={fadeInUp}
          >
            🎯 <span>Who It's For</span>
          </SectionTitle>
          
          <AudienceList>
            <motion.li variants={fadeInUp}>Shadow LPs</motion.li>
            <motion.li variants={fadeInUp}>Crypto-native tacticians</motion.li>
            <motion.li variants={fadeInUp}>AGI-era founders</motion.li>
            <motion.li variants={fadeInUp}>High-functioning maniacs who don't need hand-holding</motion.li>
          </AudienceList>
          
          <Warning
            variants={fadeInUp}
          >
            If you're still asking "What does it do?"<br />You're not ready.
          </Warning>
        </TargetAudience>
      </FeaturesContent>
    </FeaturesSection>
  );
};

export default Features;
