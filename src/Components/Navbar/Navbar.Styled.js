import styled from "styled-components";

import { ResetList } from "../../Styles/Mixins";

export const NavbarStyled = styled.nav`
  grid-area: navbar;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    ${ResetList}
    display: flex;
    gap: 2rem;
    align-items: center;
    li {
      text-align: center;
      a {
        color: white;
        text-decoration: none;
        transition: color 0.3s ease-in-out;
        font-family: ${(props) => props.theme.fonts[0]};
        font-size: 1.2rem;
        &:hover {
          color: ${(props) => props.theme.color.primary};
        }
      }
    }
  }
`;
