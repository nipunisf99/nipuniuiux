import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { easeIn } from 'framer-motion';

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

//Navbar
export const animateNavbar = (isOpen, onClose) => {
    if (isOpen) {
        // Animate to close (slide out)
        gsap.to('.nav-link', {
            x: 400,   // Slide out of the viewport
            duration: 0.8,
            ease: 'power2.inOut',
            onComplete: onClose,  // Call the onClose function when animation completes
        });
    } else {
        // Animate to open (slide in)
        gsap.fromTo('.nav-link',
            { x: 400 },  // Start off-screen
            { x: 0, duration: 0.8, ease: 'power2.inOut' }  // Slide into view
        );
    }
};

//Homepage
export const animateHome = () => {
    gsap.timeline()
        .fromTo(
            'h1',
            { text: "" },
            {
                text: "UI/UX Engineer",
                duration: 1,
                ease: "none",

            }
        );
};

//AboutPage
export const animateIntro = () => {
    gsap.fromTo(['.about-item1 p', '.about-item3 p'],
        {
            opacity: 0,
            y: 10
        },
        {
            opacity: 1,
            duration: 0.75,
            y: 0,
            delay: 0.25,

        }
    );
};
export const animateImage = () => {
    gsap.fromTo(['.about-item-pic img'],
        {
            opacity: 0,
            x: 10
        },
        {
            opacity: 1,
            duration: 0.75,
            x: 0,
            delay: 0.25,

        }
    );
};


export const animateExp = () => {
    gsap.fromTo(".para",
        {
            opacity: 0,
            y: 20
        },
        {
            opacity: 1,
            duration: 1,
            y: 0,
            delay: 1,
            scrollTrigger: {
                trigger: ".exp-sec",
                scroller: "body",
                scrub: 2,
            },
        }
    );
};
export const animateEdu = () => {
    gsap.fromTo(".para2",
        {
            opacity: 0,
            y: 20
        },
        {
            opacity: 1,
            duration: 0.5,
            y: 0,
            delay: 2,
            scrollTrigger: {
                trigger: ".edu-sec",
                scroller: "body",
                scrub: 2,
            },
        }
    );
};

//WorkPage
export const animateWorkCards = () => {
    gsap.fromTo(['.dynamic-sec'],
        {
            opacity: 0,
            y: 10
        },
        {
            opacity: 1,
            duration: 0.75,
            y: 0,
            delay: 0.25,

        }
    );
};

function startCounter() {
    let valueDisplays = document.querySelectorAll(".count");
    let interval = 1000;

    valueDisplays.forEach((valueDisplays) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplays.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
            startValue += 1;
            valueDisplays.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counter);
            }
        }, duration);

    });
}
export default startCounter;