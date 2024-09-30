import React from "react";
import { useTranslation } from 'react-i18next'

function Education () {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <section id="education" className="education">
                <h1 className="heading"> {t("Education1")}<span> & </span>{t("Education2")}</h1>
                <div className="box-container">
                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <span>2020</span>
                        <h3>BACCALAUREAT</h3>
                        <p>{t("Education4")}</p>			
                    </div>
                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <span>2020</span>
                        <h3>{t("Education5")}</h3>
                        <p>I.N.G, Madagascar</p>			
                    </div>
                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <span>2021 - 2022</span>
                        <h3>{t("Education6")} </h3>
                        <p>E-MEDIA, Madagascar <br/> {t("Education7")}</p>			
                    </div>
                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <span>2023</span>
                        <h3>{t("Education8")}</h3>
                        <p>Help Education</p>			
                    </div>
                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <span>2024</span>
                        <h3>{t("Education9")}</h3>
                        <p>ARTECPROD, Madagascar</p>
                    </div>
                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <span>2023 - 2024</span>
                        <h3>{t("Education10")}</h3>
                        <p>E-MEDIA, Madagascar <br/> {t("Education11")}</p>			
                    </div>
                </div>
            </section>
        </>
    );
}

export default Education