import React from 'react'
import { Icon } from '@iconify/react';

function Footer() {
    return (
        <div className='footer-sec mt-5'>
            <div className='footer-flex'>
                <p className='footer-topic'>
                    Get in touch
                </p>
                <p className='mb-2 text-center'>Feel free to reach out for collaborations or just a friendly hello</p>
                <a className="nav-link" href="mailto:someone@example.com?subject=Inquiry&body=Hello%20there!">nipunif93@gmail.com</a>

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
            </div>
        </div>
    )
}

export default Footer
