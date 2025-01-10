import styled from "styled-components";

export const HeaderStyled = styled.header`
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  padding: 10px 0;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;
