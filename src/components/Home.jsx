import React from "react"
import { useTranslation } from 'react-i18next'

function Home () {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <>
            <section className="home" id="home">
                <h3>Hello!</h3>
                <h1>{t("home1")} <span>Tanjona</span></h1>
                <p>{t("home2")}</p>
                <a href="#about"><button className="btn">{t("home3")} <i className="fas fa-user"></i></button></a>
            </section>
        </>
    );
}

export default Home