import { gsap } from "gsap";

const hasPlayed = sessionStorage.getItem("hasMyAnimationPlayed");

let delay = 0.2;
if (!hasPlayed) {
  delay = 6.2;
}

export const HeaderAnimation = () => {
  const t1 = gsap.timeline();
  t1.from("#logo", {
    opacity: 0,
    duration: 0.5,
    delay: delay,
  });
  return t1;
};
