import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";
import logo from "../img/mainLogo.png";

const Navbar = () => {
    const navRef = useRef(null);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <header>
            <a href="/#" className="mainLogo">
                <img src={String(logo)} alt="Logo: RRMS - przewodnik internetowy"/>
            </a>
            <nav ref={navRef}>

                <a href="/objawy">Objawy</a>
                <a href="/leczenie">Leczenie</a>
                <a href="/lifestyle">Styl życia</a>
                <a href="/mapa">Mapa specjalistów</a>

                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}
                    aria-label="przycisk nawigacyjny"
                >
                    <FaTimes/>
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}
                aria-label="przycisk nawigacyjny"
            >
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;