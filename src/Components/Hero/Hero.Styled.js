import styled from "styled-components";

export const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0f0f0f;
`;

export const HeroTitle = styled.h1`
  font-family: "Space Grotesk", serif;
  color: #f7fafc;
  font-size: 9rem;
  font-weight: bold;
`;

export const HeroRelative = styled.div``;

export const HeroAbsolute = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-family: "Space Grotesk", serif;
  font-size: 4rem;
  line-height: 1;
  letter-spacing: -0.025em;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  z-index: 10;
  height: 100vh;
  width: 100vw;
  padding: 2.5rem;
  background-color: #f9fafb;
`;
