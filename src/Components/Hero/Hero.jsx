import { HeroContainer, HeroTitle, HeroRelative, HeroAbsolute } from "./Hero.Styled";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export const Hero = () => {
    const comp = useRef(null);
    useLayoutEffect(() =>{
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline()
            t1.from("#intro-slider",{
                xPercent: -100,
                duration: 1.3,
                delay: 0.3,
            }).from(["#title-1", "#title-2", "#title-3"],{
                opacity: 0,
                y: "+=30",
                stagger: 0.5,
            }).to(["#title-1", "#title-2", "#title-3"],{
                opacity: 0,
                y: "-=30",
                delay:0.3,
                stagger: 0.5,
            }).to("#intro-slider",{
                xPercent:-100,
                duration: 1.3,
            }).from("#welcome",{
                opacity: 0,
                duration: 0.5,
            })
        }, comp)
        return () => ctx.revert()
    },[])
    return (
        <HeroRelative ref={comp}>
            <HeroAbsolute id="intro-slider">
                <h1 id="title-1">Web Developer</h1>
                <h1 id="title-2">Designer</h1>
                <h1 id="title-3">Freelancer</h1>
            </HeroAbsolute>
        <HeroContainer>
        <HeroTitle id="welcome">Welcome.</HeroTitle>
        </HeroContainer>
        </HeroRelative>
    )
}