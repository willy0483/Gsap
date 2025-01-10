import { NavbarStyled } from "./Navbar.Styled";
import { NavLink } from "react-router-dom";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

import { NavbarAnimation } from "./NavbarAnimation";

export const Navbar = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const navbarTimeline = gsap.timeline();
      navbarTimeline.add(NavbarAnimation());
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <NavbarStyled ref={comp}>
      <ul id="nav-list">
        <li>
          <NavLink id="link-1" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink id="link-2" to={"/About Us"}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink id="link-3" to={"/Careers"}>
            Careers
          </NavLink>
        </li>
        <li>
          <NavLink id="link-4" to={"/Contact"}>
            Contact
          </NavLink>
        </li>
      </ul>
    </NavbarStyled>
  );
};
