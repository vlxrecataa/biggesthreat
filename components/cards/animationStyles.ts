export const setupAnimationStyles = () => {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes moveDot {
      0% { transform: translateY(0); }
      50% { transform: translateY(20px); }
      100% { transform: translateY(0); }
    }
    
    @keyframes cardPopUp {
      0% { 
        opacity: 0;
        transform: translateY(20px) scale(0.95);
      }
      100% { 
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    
    .card-hidden {
      opacity: 0;
      transform: translateY(20px) scale(0.95);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .card-visible {
      animation: cardPopUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }
  `;
  document.head.appendChild(style);
  
  return style;
};

export default setupAnimationStyles;