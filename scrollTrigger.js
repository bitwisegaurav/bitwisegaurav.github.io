let tl = gsap.timeline();

// tl.from("nav .logo, nav .last a", {
//     duration: 1,
//     opacity: 0,
//     y: -100,
//     delay: 1,
//     stagger: 0.3,
// });

gsap.from(".text h1, .text h1 name, .text p", {
    duration: 1,
    opacity: 0,
    y: 100,
    delay: 1,
    stagger: 0.2,
})

gsap.from("#projects-title", {
    y: 100,
    // stagger: 1,
    opacity: 0,
    // delay: 1,
    duration: 1,
    scrollTrigger:{
        trigger: "#projects", 
        start: "top 50%",
        // onUpdate: ()=>{console.log("chal gya h", document.querySelector('#projects-title'))},
        // markers: true,
    },
})

// gsap.from(".projects-outerBox a .row", {
//     y: 100,
//     delay: 1,
//     duration: 1,
//     scrollTrigger: {
//         trigger: "#projects",
//         start: "top 50%",
//         onUpdate: () => {
//             document.querySelectorAll('.projects-outerBox a').forEach(tag => {
//                 tag.style.overflow = "unset";
//             })
//         },
//         markers: true,
//     }
// })

gsap.from(".projects-lower a", {
    y: 100,
    opacity: 0,
    // delay: 1,
    duration: 1,
    scrollTrigger: {
        trigger: ".projects-lower",
        start: "top 70%",
        // markers: true,
    }
})

gsap.from(".about-title, .about-desc p, .my-image", {
    y: 200,
    opacity: 0,
    duration: 1.5,
    stagger: 0.3,
    scrollTrigger: {
        trigger: "#about",
        start: "top 50%",
        // markers: true,
    }
})

gsap.from(".technology-title, .technologies", {
    y: 200,
    opacity: 0,
    duration: 1.5,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".technology-title",
        start: "top 90%",
        // markers: true,
    }
})

gsap.from(".upper, .lower, .contact-form", {
    y: 200,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: "footer",
        start: "top 70%",
        // markers: true,
    }
})