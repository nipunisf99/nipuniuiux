import React from 'react'
import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import { animateIntro, animateImage, animateExp, animateEdu } from './gsapAnimation';
import startCounter from './gsapAnimation';
import { transition } from './framerMotionAnimation';
import aboutProfilePic from '../assets/images/aboutpropic.png';

function About() {
  useEffect(() => {
    animateIntro(); // Trigger the home animation
  }, []);
  useEffect(() => {
    animateImage(); // Trigger the home animation
  }, []);
  useEffect(() => {
    animateExp(); // Trigger the home animation
  }, []);
  useEffect(() => {
    animateEdu(); // Trigger the home animation
  }, []);
  useEffect(() => {
    startCounter(); // Trigger counter on component mount
  }, []); // Empty dependency array ensures it runs on mount
  return (
    <div className='main-grid mt-5'>

      <div className="about-grid">
        <div className="about-item1">
          <div className='about-item1'>
            <span>Who am I?</span>
            <p>I'm a final-year undergraduate, UX/UI designer, and creative web developer with a passion for learning and exploring new interactions and designs. </p>
          </div>

        </div>

        <div className="about-item-pic">
          <img src={aboutProfilePic} alt="Profile Pic" width='100%' />
        </div>
        <div className="about-item3">
          <p>I'm an IT and Management undergraduate with a passon that led me to learn HTML & CSS. Over time, I expanded my skills to include UX/UI design, React.js, and more. Currently, I’m focused on exploring minimalistic UI design. I have a deep appreciation for typography and colors and consider myself a versatile UI design generalist. I adapt my design style—whether minimalistic, colorful, typographic, tech-inspired, or elegant—to meet the unique needs of each project, always adhering to core design principles.</p>
          <div className="counter-sec mt-5">
            <div className='counter-card'>
              <div className='counter-icon'>
                <h2 className='count' data-val="6">0</h2>
                <Icon icon="ic:round-plus" className='icon-style' />
              </div>
              <p className='text-center mb-0'>Months of experience</p>
            </div>
            <div className='counter-card'>
              <div className='counter-icon'>
                <h2 className='count' data-val="4">0</h2>
                <Icon icon="ic:round-plus" className='icon-style' />
              </div>
              <p className='text-center mb-0'>Featured Projects</p>
            </div>
            <div className='counter-card'>
              <div className='counter-icon'>
                <h2 className='count' data-val="10">0</h2>
                <Icon icon="ic:round-plus" className='icon-style' />
              </div>
              <p className='text-center mb-0'>Self Projects</p>
            </div>
          </div>
        </div>
      </div>




      <h3 className='mt-5'>Skills</h3>
      <div className='dev-des-skills mt-3'>
        <p className='mb-1 fw-bold'>Development Tools</p>
        <div className='skill-grid'>
          <div className='skills-sec grid-1'>
            <div className='skill-set'>
              <Icon icon="devicon:html5" className='icon-style' style={{ color: "#ffffff" }} />
              <span>HTML</span>
            </div>

            <div className='skill-set'>
              <Icon icon="devicon:css3" className='icon-style' style={{ color: "#ffffff" }} />
              <span>CSS</span>
            </div>

            <div className='skill-set'>
              <Icon icon="skill-icons:sass" className='icon-style' style={{ color: "#ffffff" }} />
              <span>Saas</span>
            </div>
          </div>

          <div className='skills-sec grid-2'>
            <div className='skill-set'>
              <Icon icon="skill-icons:javascript" className='icon-style' style={{ color: "#ffffff" }} />
              <span>JavaScript</span>
            </div>

            <div className='skill-set'>
              <Icon icon="devicon:bootstrap" className='icon-style' style={{ color: "#ffffff" }} />
              <span>Bootstrap</span>
            </div>

            <div className='skill-set'>
              <Icon icon="skill-icons:react-dark" className='icon-style' style={{ color: "#ffffff" }} />
              <span>React</span>
            </div>
          </div>
        </div>
      </div>

      <div className='dev-des-skills mt-3'>
        <p className='mb-1 fw-bold'>Designing Tools</p>
        <div className='skill-grid'>
          <div className='skills-sec grid-1'>
            <div className='skill-set'>
              <Icon icon="logos:figma" className='icon-style' style={{ color: "#ffffff" }} />
              <span>Figma</span>
            </div>

            <div className='skill-set'>
              <Icon icon="skill-icons:illustrator" className='icon-style' style={{ color: "#ffffff" }} />
              <span>Illustrator</span>
            </div>
          </div>
          <div className='skills-sec grid-2'>
            <div className='skill-set'>
              <Icon icon="devicon:photoshop" className='icon-style' style={{ color: "#ffffff" }} />
              <span>Photoshop</span>
            </div>

            <div className='skill-set'>
              <Icon icon="devicon:blender" className='icon-style' style={{ color: "#ffffff" }} />
              <span>Blender</span>
            </div>
          </div>
        </div>
      </div>

      <h3 className='exp-sec mt-5'>Experience</h3>
      <div className='para mt-3'>
        <p className='mb-1 fw-bold'>UI Engineer Intern | Intervest Software Technologies</p>
        <p>Worked as an UI Engineer intern with exposing to lot of experiences throughout 6 months in the company under supervisor guidence. Was able to work with other software engineers, quality assuarance engineers and business analysts. </p>
      </div>

      <h3 className='edu-sec mt-5'>Education</h3>
      <div className='para2 mt-3'>
        <p className='  mb-1 fw-bold'>B.SC. Information Technology and Management | 2020-2024</p>
        <p>Worked as an UI Engineer intern with exposing to lot of experiences throughout 6 months in the company under supervisor guidence. Was able to work with other software engineers, quality assuarance engineers and business analysts. </p>
      </div>

    </div>
  )
}

export default transition(About);
