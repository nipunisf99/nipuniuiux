import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { animateWorkCards } from './gsapAnimation';
import { transition } from './framerMotionAnimation';
import { AnimatedSection } from './framerMotionAnimation';
import mealMate from '../assets/images/mealmateui.png';
import ugc from '../assets/images/ugc.png';
import tourism from '../assets/images/tourism.png';
import apartment from '../assets/images/apartment.jpg';
import smobsy from '../assets/images/smobsy.png';
import portfolio from '../assets/images/portfolio.png';
import villa from '../assets/images/villa.png';


function Work() {
  useEffect(() => {
    animateWorkCards(); // Trigger the home animation
  }, []);

  const [activeSection, setActiveSection] = useState('designsec');
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className='main-grid mt-2 mt-sm-5'>
      <div className='btn-sec'>
        <button className="btn" onClick={() => handleSectionChange('designsec')}>
          <span className='btn-font'>UI/UX Design</span>
        </button>
        <button className="btn" onClick={() => handleSectionChange('devsec')}>
          <span className='btn-font'>UI Development</span>
        </button>
      </div>

      <div className='dynamic-sec align-self-stretch mt-3'>
        {activeSection === 'designsec' && (
          <AnimatedSection key="designsec">
            <div className='work-cards mt-3'>
              <div className='card-body card1'>
                <div className='img-cont'>
                  <img src={mealMate} alt="MealMate" className='card-img-top' />
                </div>
                <div className='card-bottom'>
                  <div className='text-sec'>
                    <p className='mb-0 fw-bold'>MealMate</p>
                    <p className='mb-0'>Food delivery mobile app</p>
                    <p className='mb-0'>UI/UX Case Study</p>
                  </div>
                  <div className='icon-btn'>
                    <a href="https://www.behance.net/gallery/206301991/MealMate_FoodDelivery_MobileApp-UIUX-Case-Study" target="_blank" rel="noopener noreferrer">
                      <Icon icon="devicon-plain:behance" className='icon-style' />
                    </a>
                  </div>
                </div>
              </div>

              <div className='card-body card2'>
                <div className='img-cont'>
                  <img src={ugc} alt="Ausluch" className='card-img-top' />
                </div>
                <div className='card-bottom'>
                  <div className='text-sec'>
                    <p className='mb-0 fw-bold'>University Grant Commission</p>
                    <p className='mb-0'>Higher education website</p>
                    <p className='mb-0'>UI/UX Re Design</p>
                  </div>
                  <div className='icon-btn'>
                    <a href="https://www.behance.net/gallery/206913523/UGC-Website-Re-Design-UIUX-Revamp" target="_blank" rel="noopener noreferrer">
                      <Icon icon="devicon-plain:behance" className='icon-style' />
                    </a>
                  </div>
                </div>
              </div>

              <div className='card-body card3'>
                <div className='img-cont'>
                  <img src={tourism} alt="Ausluch" className='card-img-top' />
                </div>
                <div className='card-bottom'>
                  <div className='text-sec'>
                    <p className='mb-0 fw-bold'>Nature Tech</p>
                    <p className='mb-0'>Web and mobile compatible toursim solution</p>
                    <p className='mb-0'>UI Design</p>
                  </div>
                  <div className='icon-btn'>
                    <a href="https://www.figma.com/design/PCErbjaj9DBl1EATiWrkot/Tourism-UIUX?node-id=0-1&t=ATAp5yLOIPI7r2SD-1" target="_blank" rel="noopener noreferrer">
                      <Icon icon="streamline:figma-solid" className='icon-style' />
                    </a>
                  </div>
                </div>
              </div>

              <div className='card-body card4'>
                <div className='img-cont'>
                  <img src={apartment} alt="Ausluch" className='card-img-top' />
                </div>
                <div className='card-bottom'>
                  <div className='text-sec'>
                    <p className='mb-0 fw-bold'>Apartment Solutions</p>
                    <p className='mb-0'>Apartment management mobile application</p>
                    <p className='mb-0'>UI/UX Research and Design</p>
                  </div>
                  <div className='icon-btn'>
                    <a href="https://www.behance.net/gallery/149501445/UI-design-of-Apartment-Solution-mobile-application" target="_blank" rel="noopener noreferrer">
                      <Icon icon="devicon-plain:behance" className='icon-style' />
                    </a>
                  </div>
                </div>
              </div>

              <div className='card-body card5'>
                <div className='img-cont'>
                  <img src={smobsy} alt="Ausluch" className='card-img-top' />
                </div>
                <div className='card-bottom'>
                  <div className='text-sec'>
                    <p className='mb-0 fw-bold'>Smobsy</p>
                    <p className='mb-0'>Online shopping platform</p>
                    <p className='mb-0'>UI Design</p>
                  </div>
                  <div className='icon-btn'>
                    <a href="https://www.behance.net/gallery/150274583/SMOBSY-online-shopping-platform-Website-UI-Design" target="_blank" rel="noopener noreferrer">
                      <Icon icon="devicon-plain:behance" className='icon-style' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {activeSection === 'devsec' && (
          <AnimatedSection key="devsec">
            <div className='work-cards mt-3'>
              <div className='card-body card1'>
                <div className='img-cont'>
                  <img src={portfolio} alt="Portfolio" className='card-img-top' />
                </div>
                <div className='d-flex gap-3 mt-1'>
                  <p className='mb-0' style={{ color: "#F3C500" }}>ReactJs</p>
                  <p className='mb-0' style={{ color: "#F3C500" }}>Bootstrap</p>
                  <p className='mb-0' style={{ color: "#F3C500" }}>Sass</p>
                  <p className='mb-0' style={{ color: "#F3C500" }}>Framer</p>
                  <p className='mb-0' style={{ color: "#F3C500" }}>GSAP</p>
                </div>
                <div className='card-bottom'>
                  <div className='text-sec'>
                    <p className='mb-0 fw-bold'>Portfolio</p>
                    <p className='mb-0'>Portfolio Website</p>
                    <p className='mb-0'>UI Design and Development</p>
                  </div>
                  <div className='icon-btn'>
                    <a href="https://github.com/nipunisf99/nipuniuiux" target="_blank" rel="noopener noreferrer">
                      <Icon icon="akar-icons:github-fill" className='icon-style' />
                    </a>
                  </div>
                </div>
              </div>

              <div className='card-body card2'>
                <div className='img-cont'>
                  <img src={villa} alt="Villa Marisol" className='card-img-top' />
                </div>
                <div className='d-flex gap-3 mt-1'>
                  <p className='mb-0' style={{ color: "#F3C500" }}>ReactJs</p>
                  <p className='mb-0' style={{ color: "#F3C500" }}>Bootstrap</p>
                  <p className='mb-0' style={{ color: "#F3C500" }}>CSS</p>
                </div>
                <div className='card-bottom'>
                  <div className='text-sec'>
                    <p className='mb-0 fw-bold'>Villa Marisol</p>
                    <p className='mb-0'>Villa Website</p>
                    <p className='mb-0'>UI Design and Development</p>
                  </div>
                  <div className='icon-btn d-flex gap-4'>
                  <a href="https://nipunisf99.github.io/villamarisol/" target="_blank" rel="noopener noreferrer">
                      <Icon icon="ph:link" className='icon-style' />
                    </a>
                    <a href="https://github.com/nipunisf99/villamarisol" target="_blank" rel="noopener noreferrer">
                      <Icon icon="akar-icons:github-fill" className='icon-style' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  )
}

export default transition(Work);
