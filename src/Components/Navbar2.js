import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { animateNavbar } from './gsapAnimation';

function Navbar2() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);  // Create a ref for the nav container

    const toggleMenu = () => {
        if (isOpen) {
            // When closing, animate and then close
            animateNavbar(isOpen, () => setIsOpen(false));  // Delay setting the state to false until animation completes
        } else {
            // When opening, directly open and animate
            setIsOpen(true);
            animateNavbar(isOpen);
        }
    };

    // Handle click outside to close menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                if (isOpen) {
                    animateNavbar(isOpen, () => setIsOpen(false));
                }
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [navRef, isOpen]);

    return (
        <header>
            <div className='main-grid nav-container' ref={navRef}>
                <nav>
                    <div >
                    <Link to="/"><span className='logo'>n<span className="logo text-secondary">.</span></span></Link>
                        
                    </div>
                    <ul className={isOpen ? 'nav-link active' : 'nav-link'}>
                        <Icon icon="material-symbols:close" className='close-icon' onClick={toggleMenu} />
                        <div className='two-links d-flex'>
                            <li>
                                <Link to="/About">About</Link>
                            </li>
                            <li>
                                <Link to="/Work">Work</Link>
                            </li>
                        </div>

                        <a
                            className='btn-secondary'
                            href="mailto:nipunif99@gmail.com?subject=Inquiry&body=Hello%20there!"
                        >
                            Contact
                        </a>


                    </ul>
                    <Icon icon="iconamoon:menu-burger-horizontal" className="menu-icon" onClick={toggleMenu} />
                </nav>
            </div>
        </header>
    )
}

export default Navbar2;
