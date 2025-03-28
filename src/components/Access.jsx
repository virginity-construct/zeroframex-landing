import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AccessSection = styled.section`
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
`;

const AccessContent = styled.div`
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

const AccessInfo = styled.div`
  margin-bottom: var(--spacing-xxl);
`;

const AccessPoints = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
`;

const AccessPoint = styled(motion.div)`
  padding: var(--spacing-lg);
  border-left: 2px solid var(--color-primary);
  background: rgba(0, 0, 0, 0.3);
  
  p {
    margin-bottom: 0;
  }
`;

const PitchSection = styled(motion.div)`
  margin-top: var(--spacing-xxl);
  padding: var(--spacing-xl);
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
    background: radial-gradient(circle at center, rgba(0, 255, 0, 0.05) 0%, rgba(0, 0, 0, 0) 70%);
    z-index: -1;
  }
`;

const PitchQuote = styled.blockquote`
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: var(--spacing-lg);
  font-family: var(--font-mono);
  color: var(--color-primary);
  
  p {
    margin-bottom: var(--spacing-md);
  }
`;

const SignalSection = styled(motion.div)`
  margin-top: var(--spacing-xl);
  text-align: center;
`;

const SignalText = styled.p`
  font-size: 1.25rem;
  margin-bottom: var(--spacing-md);
`;

const SignalLink = styled.a`
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-lg);
  background: transparent;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  font-family: var(--font-mono);
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, transparent, rgba(0, 255, 0, 0.2), transparent);
    transition: all 0.5s ease;
  }
  
  &:hover {
    background: rgba(0, 255, 0, 0.1);
    
    &::before {
      left: 100%;
    }
  }
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

const Access = () => {
  return (
    <AccessSection id="access">
      <AccessContent>
        <SectionTitle
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          🔒 <span>Access</span>
        </SectionTitle>
        
        <AccessInfo
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <AccessPoints>
            <AccessPoint variants={fadeInUp}>
              <p>There's no launch.</p>
            </AccessPoint>
            
            <AccessPoint variants={fadeInUp}>
              <p>There's no hype.</p>
            </AccessPoint>
            
            <AccessPoint variants={fadeInUp}>
              <p>There's only entry — and it isn't free.</p>
            </AccessPoint>
          </AccessPoints>
          
          <motion.div variants={fadeInUp}>
            <p>Operator demo by invite</p>
            <p>Micro-rounds: 5 backers, 5%</p>
            <p>Then it disappears into the field</p>
          </motion.div>
        </AccessInfo>
        
        <PitchSection
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ marginBottom: 'var(--spacing-lg)' }}
          >
            🫥 <span>The Pitch</span>
          </SectionTitle>
          
          <PitchQuote>
            <p>"This doesn't scale like SaaS.</p>
            <p>It scales like a virus — lean, invisible, and lethal."</p>
          </PitchQuote>
          
          <SignalSection
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <SignalText variants={fadeInUp}>
              Want a look?
            </SignalText>
            <SignalText variants={fadeInUp}>
              You don't sign up.
            </SignalText>
            <SignalText variants={fadeInUp}>
              You signal.
            </SignalText>
            
            <motion.div 
              variants={fadeInUp}
              style={{ marginTop: 'var(--spacing-xl)' }}
            >
              <SignalLink href="https://twitter.com/zeroframex" target="_blank" rel="noopener noreferrer">
                DM @zeroframex
              </SignalLink>
            </motion.div>
            
            <motion.p 
              variants={fadeInUp}
              style={{ marginTop: 'var(--spacing-md)', opacity: 0.7 }}
            >
              — we'll see what you're made of.
            </motion.p>
          </SignalSection>
        </PitchSection>
      </AccessContent>
    </AccessSection>
  );
};

export default Access;
