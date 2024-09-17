import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import { animateHome } from './gsapAnimation';
import { transition } from './framerMotionAnimation';
import profilePic from '../assets/images/Profilepic-YellowBG.png';
import resume from '../assets/PNSFernando Resume.pdf';

function Home() {
    useEffect(() => {
        animateHome(); // Trigger the home animation
    }, []);
    return (
        <div>
            <div className='main-grid mt-5'>
                <center>
                    <div className='home-sec'>
                        <img src={profilePic} alt="Profile Pic" width='200px' />
                        <h2 className='line1 text-secondary mt-3'>Hello</h2><h2 className='line2 text-secondary mt-3'>I'm Nipuni Fernando</h2>
                        <h1 className='text-secondary mt-4'></h1>
                        <div className='icon-frame mt-4'>
                            <a href="https://www.linkedin.com/in/nipunifernando99/" target="_blank" rel="noopener noreferrer">
                                <Icon icon="bi:linkedin" className='icon-style' />
                            </a>
                            <a href="https://www.behance.net/nipunifernando99" target="_blank" rel="noopener noreferrer">
                                <Icon icon="devicon-plain:behance" className='icon-style' />
                            </a>
                            <a href="https://dribbble.com/nipunif93" target="_blank" rel="noopener noreferrer">
                                <Icon icon="icon-park-solid:dribble" className='icon-style' />
                            </a>
                            <a href="https://github.com/nipunisf99" target="_blank" rel="noopener noreferrer">
                                <Icon icon="bi:github" className='icon-style' />
                            </a>
                        </div>
                        <a href={resume} download='FernandPNS-resume'>
                            <button class="btn mt-4">
                                <span className='btn-font'>Resume <Icon icon="material-symbols-light:download" className='btn-icon' /></span>
                            </button>
                        </a>
                    </div>
                </center>
            </div >
        </div >


    )
}

export default transition(Home);
