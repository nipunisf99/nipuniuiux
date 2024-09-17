import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

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
    gsap.fromTo(".para p",
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
    gsap.fromTo(".para2 p",
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