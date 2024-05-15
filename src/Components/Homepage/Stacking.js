import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Stacking = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let panels = gsap.utils.toArray(".panel");

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: i === panels.length - 1 ? false : true,
        pinSpacing: false
      });
    });
    
  }, []);
  
    return(
        <>

        <section id="stack">
            <div className="container">
            <div class="description panel blue">
  <div>
    <h1>Layered pinning</h1>
    <p>Use pinning to layer panels on top of each other as you scroll.</p>
    <div class="scroll-down">Scroll down<div class="arrow"></div>
    </div>
  </div>
</div>

<section class="panel red">
  ONE
</section>
<section class="panel orange">
  TWO
</section>
<section class="panel purple">
  THREE
</section>

<section class="green">
  Four<br/>Four<br/>Four<br/>
</section>
            </div>
        </section>
        
        </>
    )
}

export default Stacking;