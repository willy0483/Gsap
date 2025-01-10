import styled from "styled-components";

export const HeroContainer = styled.section`
  height: calc(100vh - 200px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0f0f0f;
`;

export const HeroTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts[0]};
  color: #f7fafc;
  font-size: 4rem;
  font-weight: bold;
  display: flex;

  @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.s}) {
    font-size: 6rem;
  }

  @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.m}) {
    font-size: 7.5rem;
  }

  @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.l}) {
    font-size: 9rem;
  }
  div {
    transition: color 0.3s ease-in-out;
    &:hover {
      color: ${(props) => props.theme.color.primary};
    }
  }
`;

export const HeroRelative = styled.div``;

export const HeroAbsolute = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  z-index: 10;
  height: 100vh;
  width: 100vw;
  padding: 2.5rem;
  background-color: #f9fafb;

  h1 {
    font-family: ${(props) => props.theme.fonts[0]};
    line-height: 1;
    letter-spacing: -0.025em;
    font-size: 4rem;
    @media screen and (min-width: ${(props) =>
        props.theme.grid.breakpoints.s}) {
      font-size: 6rem;
    }

    @media screen and (min-width: ${(props) =>
        props.theme.grid.breakpoints.m}) {
      font-size: 7.5rem;
    }

    @media screen and (min-width: ${(props) =>
        props.theme.grid.breakpoints.l}) {
      font-size: 9rem;
    }
  }
`;
