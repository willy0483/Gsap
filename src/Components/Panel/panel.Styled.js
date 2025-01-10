import styled from "styled-components";

export const PanelParent = styled.div`
  font-family: "Space Grotesk", serif;
  overflow: hidden;
`;

export const PanelContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  position: relative;
  text-transform: uppercase;
  color: white;
  padding: 20px;

  &.panel {
    border: none;
    box-shadow: none;
    margin: 0;
    padding: 0;
  }

  &.green {
    background-color: #4caf50;
    border: 5px solid #388e3c;
  }

  &.red {
    background-color: #f44336;
    border: 5px solid #d32f2f;
  }

  &.blue {
    background-color: #2196f3;
    border: 5px solid #1976d2;
  }

  &.black {
    background-color: #212121;
    border: 5px solid #000;
  }

  h1 {
    font-size: 4rem;
    letter-spacing: 0.1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    margin: 0;
    opacity: 0.9;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
