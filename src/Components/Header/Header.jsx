import { HeaderStyled } from "./Header.Styled";

import logo from "../../Assets/Image/Bear.png";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

import { HeaderAnimation } from "./HeaderAnimation";

export const Header = () => {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const headerTimeline = gsap.timeline();
      headerTimeline.add(HeaderAnimation());
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <HeaderStyled ref={comp}>
      <img id="logo" src={logo} alt="logo" />
    </HeaderStyled>
  );
};
