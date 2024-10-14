import React from 'react'
import { Icon } from '@iconify/react';

function Footer() {
    return (

        <div className='footer margin-top'>

            <div className='footer-flex'>
                <div className='d-flex flex-column'>
                    <h3 className='mb-3 text-secondary'> Let's Talk </h3>
                    <p> If you have a project in mind or are simply interested in finding out more, get in touch and let’s get things moving.</p>
                </div>
                <div className='btn-sec d-flex flex-column'>
                    <a className="mt-4 mail-style"  href="mailto:nipunif99@gmail.com?subject=Inquiry&body=Hello%20there!">
                        <span className=""><Icon icon="mdi:email" className='me-3 icon-style-default  ' />nipunif99@gmail.com </span>
                    </a>


                    <div className='icon-frame mt-4'>
                        <a href="https://www.linkedin.com/in/nipunifernando99/" target="_blank" rel="noopener noreferrer">
                            <Icon icon="entypo-social:linkedin-with-circle" className='icon-style-default link-style icons-link' />
                        </a>
                        <a href="https://www.behance.net/nipunifernando99" target="_blank" rel="noopener noreferrer">
                            <Icon icon="ion:logo-behance" className='icon-style-default link-style icons-link' />
                        </a>
                        <a href="https://dribbble.com/nipunif93" target="_blank" rel="noopener noreferrer">
                            <Icon icon="icon-park-solid:dribble" className='icon-style-default link-style icons-link' />
                        </a>
                        <a href="https://github.com/nipunisf99" target="_blank" rel="noopener noreferrer">
                            <Icon icon="bi:github" className='icon-style-default link-style icons-link' />
                        </a>
                    </div>
                </div>
                
            </div>
            <div className='copyright d-flex justify-content-center mt-5'>
                <p>© 2024. All Rights Reserved to Nipuni Fernando.</p>
            </div>
            

        </div >

    )
}

{/* 
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

    */}



export default Footer
