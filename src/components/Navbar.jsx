import React from "react";
import { useTranslation } from 'react-i18next'

function Navbar() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <header>
                <div className="user">
                    <img src="img/img10.jpg" alt="My_photo" />
                    <h3 className="name">Tanjona <span>Razanamahery</span></h3>
                    <p className="post">{t("Navbar1")}</p>
                </div>
                <nav className="navbar">
                    <ul>
                        <li><a href="#home">{t("Navbar2")}</a></li>
                        <li><a href="#about">{t("Navbar3")}</a></li>
                        <li><a href="#education">{t("Navbar4")}</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <div id="menu" className="fas fa-bars"></div>
        </>
    );
}

export default Navbar