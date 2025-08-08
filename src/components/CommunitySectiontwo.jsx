import { gsap } from "gsap"; // Why? Imports the core GSAP library, which provides animation functionality like gsap.to for moving elements.
import { useGSAP } from "@gsap/react"; // Why? Imports the useGSAP hook to integrate GSAP with React's component lifecycle, ensuring animations run after DOM rendering and clean up on unmount.
import { useRef } from "react"; // Why? Imports useRef to create a reference to a DOM element, used here to scope animations to a specific container.

export default function CommunitySectiontwo() {
    // Why containerRef? useRef creates a stable reference to the container div, allowing GSAP to scope animations to this specific DOM node.
    // This is more reliable than global selectors and ensures animations only affect elements within this container.
    const containerRef = useRef(null);

    // Why useGSAP? This hook ties GSAP animations to React's lifecycle, running them after the component mounts and cleaning them up on unmount to prevent memory leaks.
    useGSAP(() => {
        // Why gsap.context? Creates a GSAP context to scope animations to the containerRef, ensuring only elements within this container (e.g., .box) are animated.
        // This is useful for managing multiple animations and avoiding conflicts in larger apps with similar class names.
        const ctx = gsap.context(() => {
            // Why gsap.to(".box")? Defines an animation that moves elements with the .box class 300 pixels along the x-axis.
            // The class selector is used here, but it's scoped to containerRef, so only .box elements inside the referenced div are affected.
            gsap.to(".box", {
                x: 300, // Why? Specifies the horizontal translation (300 pixels right) for a clear visual effect.
                duration: 1, // Why? Sets a 1-second duration for a smooth, noticeable animation (default is instant, which is often too fast).
            });
        }, containerRef); // Why containerRef? Scopes the GSAP context to the container div, ensuring animations only target its children.

        // Why return ctx.revert? The revert function cleans up all animations in the context when the component unmounts,
        // resetting animated elements to their original state and preventing memory leaks.
        return () => ctx.revert();
    }, []); // Why empty array? Ensures the animation runs only once on component mount, similar to useEffect, preventing unnecessary re-runs.

    // Why this structure? The outer div with containerRef scopes the animation context, and the inner div with .box is the animated element.
    // The classes (block, bg-green-700, w-[50px]) handle styling, while the ref handles animation scoping.
    return (
        <div ref={containerRef}>
            <div className="box block bg-green-700 w-[50px]">Test</div>
        </div>
    );
}