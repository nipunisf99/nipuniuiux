import React from 'react'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <Icon icon="healthicons:ui-menu-outline" class="navbar-toggler-icon" style={{ color: "#fff" }} />
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/Work">Work</Link>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link" href="mailto:someone@example.com?subject=Inquiry&body=Hello%20there!">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
