import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    // Function to check if an element is in viewport
    const isInViewport = (element: Element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
        rect.bottom >= 0
      );
    };

    // Function to handle scroll animation
    const handleScrollAnimation = () => {
      const animatedElements = document.querySelectorAll('.data-animate');
      
      animatedElements.forEach((element) => {
        if (isInViewport(element)) {
          element.classList.add('animate-fade-in');
        }
      });
    };

    // Initial check
    handleScrollAnimation();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);
};