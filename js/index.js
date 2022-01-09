window.onload = () => {
    let tl = gsap.timeline();
    tl.from("#main-show-text-hello", 1.2, {
        y: 100,
        ease: "power4.out",
        delay: 0.5,
        opacity: 0,
        stagger: {amount: 0.3}
    })
    .to("#main-show-text-hello", 1.8, {
        opacity: 1,
        ease: "expo.inOut",
        stagger: 0.4
    })
    .from("#main-show-background", 1.5 ,{
        delay: -10,
        css:{height:"100vh"}
    })
    .to("#main-show-background", 1.5, {
        delay: -2,
        ease: "power4.out",
        css: {height: "0vh"},
        stagger: {amount: 0.2}
    })
    .to("#main-show-text-hello", 1.7, {
        delay: 0.3,
        ease: "power4.out",
        css: {left: "35%"},
        stagger: {amount: 0.3}
    })
    .from("#main-show-text-welcome", 0.5, {
        delay: 0.1,
        css: {opacity: "0"}
    })
    .to("#main-show-text-welcome", 0.1, {
        delay: -0.1,
        ease: "power4.out",
        css: {opacity: "inline"}
    })
    .to("#main-show", 1.5, {
        delay: 1,
        ease: "power4.out",
        y: "-100vh",
        display: "none",
        stagger: {amount: 0.3}
    })
}


