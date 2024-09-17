import styled, { keyframes, css, CSSKeyframes } from "styled-components";
import Keyframes from "styled-components/dist/models/Keyframes";
import {
  holoGradientAnimation,
  holoSparkleAnimation,
  whiteGradientBackground,
  sparkles,
} from "./styles/Common.styles";
import { gradientBackground } from "./styles/Rare.styles";
import {
  gradientAndPngBackgroundConfig,
  holoGradientAnimationPng,
  holoSparkleAnimationPng,
  uncommonSparkles,
} from "./styles/Uncommon.styles";

interface StyledHoloCardProps {
  active: boolean;
  activeBackgroundPosition: {
    tp: number;
    lp: number;
  };
  activeRotation: {
    x: number;
    y: number;
  };
  url: string;
  animated: boolean;
  height: number;
  width: number;
  showSparkles: boolean;
  rarity: string;
}

type Rarity = string;

interface Config {
  background: string;
  sparkles: string;
  sparkleAnimation: Keyframes;
  gradientAnimation: Keyframes;
}

const configs: { [key in Rarity]: Config } = {
  Common: {
    sparkleAnimation: holoSparkleAnimation,
    gradientAnimation: holoGradientAnimation,
    background: whiteGradientBackground,
    sparkles,
  },

  Uncommon: {
    sparkleAnimation: holoSparkleAnimationPng,
    gradientAnimation: holoGradientAnimationPng,
    background: gradientAndPngBackgroundConfig,
    sparkles: uncommonSparkles,
  },

  Rare: {
    sparkleAnimation: holoSparkleAnimation,
    gradientAnimation: holoGradientAnimation,
    background: gradientBackground,
    sparkles,
  },
};

export const StyledHoloCard = styled.div<StyledHoloCardProps>(
  ({
    active,
    activeBackgroundPosition,
    activeRotation,
    animated,
    url,
    height,
    width,
    showSparkles,
    rarity,
  }) => [
    css`
      width: ${width}px;
      height: ${height}px;
      background-color: #211799;
      background-size: cover; /* Ensure no background image conflicts */
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 5% / 3.5%;
      box-shadow: -3px -3px 3px 0 rgba(#26e6f7, 0.3),
        3px 3px 3px 0 rgba(#f759e4, 0.3), 0 0 6px 2px rgba(#ffe759, 03),
        0 35px 25px -15px rgba(0, 0, 0, 0.3);
      position: relative;
      overflow: hidden;
      display: inline-block;
      vertical-align: middle;
      margin: 20px 10px;
      transform: rotateX(${activeRotation.y}deg) rotateY(${activeRotation.x}deg);
      &:before,
      &:after {
        ${configs[rarity].background}
      }
    `,
    showSparkles && configs[rarity].sparkles,
    active &&
      `
  :before {
    opacity: 1;
    animation: none;
    transition: none;
    linear-gradient(28deg,#678959,#d88b20,#f546b1,#eb3aa2);
    background-position: ${activeBackgroundPosition.lp}% ${activeBackgroundPosition.tp}%;
  }
`,
    animated &&
      css`
        transition: 1s;
        transform: rotateX(0deg) rotateY(0deg);
        &:before {
          transition: 1s;
          animation: ${configs[rarity].gradientAnimation} 12s ease ;
        }
        &:after {
          transition: 1s;
          animation: ${configs[rarity].sparkleAnimation} 12s ease ;
        }
      `,
  ]
);
