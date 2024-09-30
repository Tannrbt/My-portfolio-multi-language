import React from "react";
import { useTranslation } from 'react-i18next'

function About () {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return(
        <>
            <section className="about" id="about">
                <h1 className="heading"><span>{t("About1")}</span> {t("About2")}</h1>
                <div className="row">
                    <div className="info">
                        <h3><span> {t("About3")} </span>Tanjona Razanamahery</h3>
                        <h3><span> age : </span>22</h3>
                        <h3><span> post : </span>{t("Navbar1")}</h3>
                        <h3><span> {t("About4")} </span>{t("About5")}</h3>
                        <a href="#"><button className="btn"> {t("About6")} CV <i className="fas fa-download"></i></button></a>
                    </div>
                    <div className="counter">
                        <div className="box">
                            <span>2+</span>
                            <h3>{t("About7")}</h3>
                        </div>
                        <div className="box">
                            <span>25+</span>
                            <h3>{t("About8")}</h3>
                        </div>
                        <div className="box">
                            <span>5+</span>
                            <h3>{t("About9")}</h3>
                        </div>
                        <div className="box">
                            <span>3+</span>
                            <h3>{t("About10")}</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About