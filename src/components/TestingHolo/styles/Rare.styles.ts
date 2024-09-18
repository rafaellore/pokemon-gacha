export const gradientBackground = `
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-image:linear-gradient(
        120deg,
        #ff00cc 0%,
        #ffcc00 20%,
        #00ffcc 40%,
        #00ccff 60%,
        #ff6600 80%,
        #ff00cc 100%
      );
        background-position: 0% 0%;
        background-repeat: no-repeat;
        background-size: 300% 300%;
        mix-blend-mode: screen;
        opacity: 0.15;
        z-index: 1;
`;

export const rareHoverEffect = `
  &:hover {
    box-shadow: 
      0 0 15px rgba(0, 0, 0, 0.2),
      0 0 20px rgba(255, 0, 204, 0.6),
      0 0 20px rgba(255, 204, 0, 0.6),
      0 0 20px rgba(0, 255, 204, 0.6),
      0 0 20px rgba(0, 204, 255, 0.6),
      0 0 20px rgba(255, 102, 0, 0.6);
    transition: box-shadow 0.5s ease;
  }
`;
