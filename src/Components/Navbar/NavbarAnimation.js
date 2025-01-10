import { gsap } from "gsap";

const hasPlayed = sessionStorage.getItem("hasMyAnimationPlayed");

let delay = 0;
if (!hasPlayed) {
  delay = 6.2;
}

export const NavbarAnimation = () => {
  const t1 = gsap.timeline();
  t1.from("#nav-list", {
    opacity: 1,
    delay: delay,
  }).from(["#link-1", "#link-2", "#link-3", "#link-4"], {
    opacity: 0,
    y: "+=30",
    stagger: 0.5,
  });
  return t1;
};
