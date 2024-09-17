import { keyframes } from "styled-components";

export const holoSparkleAnimation = keyframes`
  0%, 100% {
    opacity: .6; 
    filter: brightness(1) contrast(1.1); 
  }
  5%, 8% {
    opacity: .9; 
    filter: brightness(.9) contrast(1.1); 
  }
  13%, 16% {
    opacity: .4;
    filter: brightness(1.1) contrast(.9);
  }
  35%, 38% {
    opacity: .85;
    filter: brightness(1) contrast(1); 
  }
  55% {
    opacity: .3;
    filter: brightness(1) contrast(1.1);
  }
`;

export const holoGradientAnimation = keyframes`
  0%, 100% {
    opacity: 0.4; 
    background-position: 50% 50%;
    filter: brightness(.4) contrast(1);
  }
  5%, 9% {
    background-position: 100% 100%;
    opacity: 0.8; 
    filter: brightness(.6) contrast(1.15);
  }
  13%, 17% {
    background-position: 0% 0%;
    opacity: .75; 
  }
  35%, 39% {
    background-position: 100% 100%;
    opacity: 0.9;
    filter: brightness(.6) contrast(1); 
  }
  55% {
    background-position: 0% 0%;
    opacity: 0.9;
    filter: brightness(.7) contrast(1.1);
  }
`;

export const whiteGradientBackground = `
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-image: linear-gradient(
        125deg,
        rgba(255, 255, 255, 0.4) 15%,
        rgba(255, 255, 255, 0.3) 30%,
        rgba(255, 255, 255, 0.2) 40%,
        rgba(255, 255, 255, 0.15) 60%,
        rgba(255, 255, 255, 0.3) 70%,
        rgba(255, 255, 255, 0.4) 85%
      );
        background-position: 0% 0%;
        background-repeat: no-repeat;
        background-size: 300% 300%;
        mix-blend-mode: screen;
        opacity: 0.15;
        z-index: 1;
`;

export const sparkles = ` 
    &:after {
      background-image: 
        url('/assets/sparkles.gif'),
        linear-gradient(
          125deg,
          #ff008440 15%,
          #fca40030 30%,
          #ffff0020 40%,
          #00ff8a15 60%,
          #00cfff30 70%,
          #cc4cfa40 85%
        );
      background-position: center center; 
      background-size: cover, 180%, 100%; 
      mix-blend-mode: screen; 
      opacity: 0.8; 
      z-index: 1;
    }
  `;
