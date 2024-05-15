import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react"; // Import useEffect and useRef

const HorizonatalSection = () => {
    
    const racesRef = useRef(null);

    useEffect(() => {
 
        if (racesRef.current) {
            const races = racesRef.current;
            console.log(races.offsetWidth);

            function getScrollAmount() {
                let racesWidth = races.scrollWidth;
                return -(racesWidth - window.innerWidth);
            }

            const tween = gsap.to(races, {
                x: getScrollAmount,
                duration: 3,
                ease: "none"
            });

            ScrollTrigger.create({
                trigger: ".racesWrapper",
                start: "top 20%",
                end: () => `+=${getScrollAmount() * -1}`,
                pin: true,
                animation: tween,
                scrub: 1,
                invalidateOnRefresh: true,
                markers: true
            });
        }
    }, []);

    return (
        <>
            <div className="space-50vh lightBG"></div>

            <div className="racesWrapper">
                {/* Attach ref to the races element */}
                <div className="races" ref={racesRef}>
                    <h2>Monaco</h2>
                    <h2>Austria</h2>
                    <h2>Hungary</h2>
                    <h2>Netherlands</h2>
                    <h2>Japan</h2>
                </div>
            </div>

            <div className="space-100vh lightBG"></div>
        </>
    );
};

export default HorizonatalSection;
