import {
  HeroContainer,
  HeroTitle,
  HeroRelative,
  HeroAbsolute,
} from "./Hero.Styled";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import { HeroAnimation, heroBounceAnimation } from "./HeroAnimation";

export let delay = 0.3;

export let loadDelay = 0.3;

export const Hero = () => {
  const comp = useRef(null);
  const hasPlayed = sessionStorage.getItem("hasMyAnimationPlayed");

  useLayoutEffect(() => {
    if (!hasPlayed) {
      let ctx = gsap.context(() => {
        const heroTimeline = gsap.timeline();
        heroTimeline
          .add(HeroAnimation())
          .add(heroBounceAnimation())
          .eventCallback("onComplete", (e) => {
            sessionStorage.setItem("hasMyAnimationPlayed", true);
            const slider = document.getElementById("intro-slider");
            if (slider) {
              slider.style.display = "none";
            }
          });
      }, comp.current);

      return () => ctx.revert();
    } else {
      const slider = document.getElementById("intro-slider");
      if (slider) {
        slider.style.display = "none";
      }
    }
  }, [hasPlayed]);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const heroBounceTimeline = gsap.timeline();
      heroBounceTimeline.add(heroBounceAnimation());
    }, comp.current);

    return () => ctx.revert();
  }, []);

  return (
    <HeroRelative ref={comp}>
      <HeroAbsolute id="intro-slider">
        <h1 id="title-1">Web Developer</h1>
        <h1 id="title-2">Designer</h1>
        <h1 id="title-3">Freelancer</h1>
      </HeroAbsolute>
      <HeroContainer>
        <HeroTitle id="welcome">
          <div id="welcome-w">W</div>
          <div id="welcome-e-one">e</div>
          <div id="welcome-l">l</div>
          <div id="welcome-c">c</div>
          <div id="welcome-o">o</div>
          <div id="welcome-m">m</div>
          <div id="welcome-e-two">e</div>
          <div id="welcome-dot">.</div>
        </HeroTitle>
      </HeroContainer>
    </HeroRelative>
  );
};
