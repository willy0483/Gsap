import { gsap } from "gsap";

export const HeroAnimation = () => {
  const t1 = gsap.timeline();
  t1.from("#intro-slider", {
    xPercent: -100,
    duration: 1.3,
    delay: 0.3,
  })
    .from(["#title-1", "#title-2", "#title-3"], {
      opacity: 0,
      y: "+=30",
      stagger: 0.5,
    })
    .to(["#title-1", "#title-2", "#title-3"], {
      opacity: 0,
      y: "-=30",
      delay: 0.3,
      stagger: 0.5,
    })
    .to("#intro-slider", {
      xPercent: -100,
      duration: 1.3,
    })
    .from("#welcome", {
      delay: 2.5,
      opacity: 0,
      duration: 0.5,
    });
  return t1;
};

export const heroBounceAnimation = () => {
  const t2 = gsap.timeline();
  t2.to(
    [
      "#welcome-w",
      "#welcome-e-one",
      "#welcome-l",
      "#welcome-c",
      "#welcome-o",
      "#welcome-m",
      "#welcome-e-two",
      "#welcome-dot",
    ],
    {
      y: "-30",
      duration: 0.5,
      stagger: 0.1,
      ease: "bounce.out",
    }
  ).to(
    [
      "#welcome-w",
      "#welcome-e-one",
      "#welcome-l",
      "#welcome-c",
      "#welcome-o",
      "#welcome-m",
      "#welcome-e-two",
      "#welcome-dot",
    ],
    {
      y: "0",
      duration: 0.5,
      stagger: 0.1,
      ease: "bounce.out",
    }
  );
  return t2;
};
