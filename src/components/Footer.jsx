import React from "react"
import { useTranslation } from 'react-i18next'

function Footer () {
    
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <section className="contact" id="contact">
                <h1 className="heading"><span>{t("Contact1")}</span> {t("About2")}</h1>
                <div className="row">
                    <div className="content">
                        <h3 className="title">{t("Contact2")}</h3>
                        <div className="info">
                            <h3> <i className="fas fa-envelope"></i> tannrbt@gmail.com</h3>
                            <h3> <i className="fas fa-phone"></i> +261 32 94 751 31</h3>
                            <h3> <i className="fas fa-map-marker-alt"></i> Antananarivo, Madagascar</h3>
                        </div>
                        <button type="submit" className="btn" onClick={() => changeLanguage('en')}>Anglais</button> &nbsp;
                        <button type="submit" className="btn" onClick={() => changeLanguage('fr')}>Français</button>
                    </div>
                    <form action="">
                        <input type="text" placeholder="nom" name="name" className="box" />
                        <input type="email" placeholder="email" name="email" className="box" />
                        <input type="text" placeholder="projet" name="project" className="box" />
                        <textarea name="" id="" cols="30" rows="10" className="box message" placeholder="message"></textarea>
                        <button type="submit" className="btn"> {t("Contact4")} <i className="fas fa-paper-plane"></i></button>
                    </form>
                </div>
            </section>

            <a href="#home" className="top">
                <img src="img/scroll-img.png" />
            </a>
        </>
    );
}

export default Footer