import { PanelContainer, PanelParent } from "./panel.Styled";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 2 });

export const Panel = () => {
    const comp = useRef(null);
  
    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        let panels = gsap.utils.toArray(".panel");
        try {
          panels.forEach((panel, index) => {
            ScrollTrigger.create({
              trigger: panel,
              start: "top top",
              pin: true,
              scrub: true,
              snap: {
                snapTo: 1,
                duration: { min: 0.2, max: 1 },
                ease: "power1.inOut"
              },
              end: "+=100%",
              pinSpacing: index === panels.length - 1,
            });
          });
        } catch (error) {
          console.error("Error creating ScrollTrigger for panel:", error);
        }
      }, comp);
  
      return () => ctx.revert();
    }, []);

    return(
        <PanelParent id="container" ref={comp}>
        <PanelContainer className="panel green">
          <h1>Panel green</h1>
        </PanelContainer>
  
        <PanelContainer className="panel red">
          <h1>Panel red</h1>
        </PanelContainer>
  
        <PanelContainer className="panel blue">
          <h1>Panel blue</h1>
        </PanelContainer>

        <PanelContainer className="panel black">
          <h1>Panel black</h1>
        </PanelContainer>
      </PanelParent>
    )
}