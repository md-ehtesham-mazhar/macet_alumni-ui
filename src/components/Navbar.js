import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import img1 from '../images/img1.jpg';

function Navbar({ isSignedIn, handleSignInClick }) {
    const location = useLocation();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);
    const closeMenu = () => setMenuOpen(false);

    const isSignInPage = location.pathname === '/signin';

    return (
        <nav className="navbar">
            <div className="nav-left">
                <div className="nav-logo">
                    <img src={img1} alt="logo" className="logo-img" />
                    <div className="logo">
                        <Link className="navbar-brand" to="https://macet.ac.in/">
                            <span>Maulana Azad College</span>
                            <span>of Engineering and Technology</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Hamburger button - toggles the menu */}
            <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation">
                &#9776;
            </button>

            {/* Navigation links */}
            <div className={`nav-elements ${isMenuOpen ? 'active' : ''}`}>
                <Link className="element" to="/home" onClick={closeMenu}>Home</Link>
                <Link className="element" to="/alumni" onClick={closeMenu}>Alumni</Link>
                <Link className="element" to="/event" onClick={closeMenu}>Event</Link>

                {isSignedIn ? (
                    <>
                        <Link className="element" to="/post" onClick={closeMenu}>Post</Link>
                        <Link className="nav-prof-img" to="/profile" onClick={closeMenu}>
                            <img src="https://via.placeholder.com/150" alt="Profile" />
                        </Link>
                    </>
                ) : (
                    !isSignInPage && (
                        <Link to="/signin">
                            <button className="btn" onClick={handleSignInClick} type="button">Sign In</button>
                        </Link>
                    )
                )}
            </div>
        </nav>
    );
}

export default Navbar;
