import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
        <div className="header-top">
            <h1 className="header-title">GERO<br />BARGAGNA</h1>
            <h2 className='sello'>ART<br />DIRECTOR/<br />AUDIOVISUAL<br />DESIGNER</h2>
        </div>
            <nav className="header-nav">
                <ul>
                    <li><Link to="/works">WORKS</Link></li>
                    <li><Link to="/contact">ABOUT</Link></li>
                    <li><Link to="/street">STREET</Link></li>

                </ul>
            </nav>
        </header>
    );
}

export default Header;