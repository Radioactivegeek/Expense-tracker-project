import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useWindowSize } from '../../utils/useWindowSize';

function Orb() {
  const { width, height } = useWindowSize()

  console.log(width, height);

  const moveOrb = keyframes`
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(${width/1.2}px, ${height/2}px);
    }
    100% {
      transform: translate(0, 0);
    }
`;

const OrbStyled = styled.div`
  width: 70vh;
  height: 70vh;
  margin-left: -35vh; // Center the orb horizontally
  margin-top: -35vh; // Center the orb vertically
  border-radius: 50%;
  position: absolute;
  background: linear-gradient(180deg, #DFFFD6 0%, #B2FF66 100%);
  filter: blur(200px);
  animation: ${moveOrb} 8s  alternate linear infinite; // Apply the animation
`;


  return <OrbStyled />;
}

export default Orb;
