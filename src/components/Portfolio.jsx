import React from "react";
import { useTranslation } from 'react-i18next'

function Portfolio () {

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <>
            <section className="portfolio" id="portfolio">
                <h1 className="heading"> {t("Cv")} <span>portfolio</span></h1>
                <div className="box-container">
                    <div className="box">
                        <a href="#"><img src="img/img1.jpg" alt="img1" /></a> 
                    </div>
                    <div className="box">
                        <a href="#"><img src="img/img5.jpg" alt="img1" /></a>
                    </div>
                    <div className="box">
                        <a href="#"><img src="img/img6.jpg" alt="img1" /></a>
                    </div>
                    <div className="box">
                        <a href="#"><img src="img/img7.jpg" alt="img1" /></a>
                    </div>
                    <div className="box">
                        <a href="#"><img src="img/img8.jpg" alt="img1" /></a>
                    </div>
                    <div className="box">
                        <a href="#"><img src="img/img9.jpg" alt="img1" /></a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Portfolio