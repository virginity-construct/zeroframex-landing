import React, { useEffect } from 'react';
import styled from 'styled-components';
import Hero from './components/Hero';
import Features from './components/Features';
import Access from './components/Access';
import Footer from './components/Footer';

// Import global CSS
import './styles/global.css';

const AppWrapper = styled.div`
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%);
    z-index: -1;
  }
`;

const App = () => {
  useEffect(() => {
    // Add event listener for scroll animations
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
          el.classList.add('is-visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppWrapper>
      <div className="noise"></div>
      <Hero />
      <Features />
      <Access />
      <Footer />
    </AppWrapper>
  );
};

export default App;
