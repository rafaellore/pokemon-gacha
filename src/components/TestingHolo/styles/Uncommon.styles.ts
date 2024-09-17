import { keyframes } from "styled-components";

// This is the bg used on the animation
export const gradientAndPngBackgroundConfig = `
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(
    125deg,
    rgba(255, 255, 255, 0.05) 15%,
    rgba(255, 255, 255, 0.03) 30%,
    rgba(255, 255, 255, 0.02) 40%,
    rgba(255, 255, 255, 0.01) 60%,
    rgba(255, 255, 255, 0.02) 70%,
    rgba(255, 255, 255, 0.05) 85%
  ),
  url('/assets/glitter.png'); /* Usando background completo */
  background-position: center; /* Centralizando a imagem de fundo */
  background-repeat: repeat; /* Ajustando para repetir a imagem */
  mix-blend-mode: overlay; /* Usando blend-mode para menos clareza */
  opacity: 0.1; /* Reduzindo a opacidade geral ainda mais */  
  z-index: 1;
`;

export const holoSparkleAnimationPng = keyframes`
  0%, 100% {
    opacity: .4; 
    filter: brightness(0.8) contrast(1); 
  }
  5%, 8% {
    opacity: .6;
    filter: brightness(0.7) contrast(1.1);
  }
  13%, 16% {
    opacity: .3;
    filter: brightness(0.9) contrast(0.9);
  }
  35%, 38% {
    opacity: .5;
    filter: brightness(0.8) contrast(1);
  }
  55% {
    opacity: .2;
    filter: brightness(0.7) contrast(1.1);
  }
`;

export const holoGradientAnimationPng = keyframes`
  0%, 100% {
    opacity: 0.3; 
    background-position: 50% 50%;
    filter: brightness(0.3) contrast(1);
  }
  5%, 9% {
    background-position: 100% 100%;
    opacity: 0.5;
    filter: brightness(0.4) contrast(1.1);
  }
  13%, 17% {
    background-position: 0% 0%;
    opacity: .45;
  }
  35%, 39% {
    background-position: 100% 100%;
    opacity: 0.6;
    filter: brightness(0.4) contrast(1);
  }
  55% {
    background-position: 0% 0%;
    opacity: 0.6;
    filter: brightness(0.5) contrast(1.1);
  }
`;

// this is the bg before the animation
export const uncommonSparkles = ` 
    &:after {
      background-image: 
        url('/assets/glitter.png'),
        linear-gradient(
          125deg,
          #ff008440 15%,
          #fca40030 30%,
          #ffff0020 40%,
          #00ff8a15 60%,
          #00cfff30 70%,
          #cc4cfa40 85%
        );
      background-position: center; /* Centralizando a imagem de fundo */
      background-repeat: repeat; /* Ajustando para repetir a imagem */
      opacity: 0.3; 
      z-index: 1;
    }
  `;
