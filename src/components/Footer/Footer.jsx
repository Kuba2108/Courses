import React from 'react'
import LogoWhite from "../../assets/svg/LogoWhite.svg"
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className='background__card'>
      <div className='container'>
        <div className="footer">
        <div className="logo__text">
          <div className="logo__white">
        <img src={LogoWhite} alt="" />
          </div>
          <div className="footer__small__text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tristique placerat eleifend aliquam pellentesque facilisis  <br /> ultrices. Imperdiet mus urna egestas at tellus. </p>
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__about">
            <h2 className='r_f_text'>{t("About")}</h2>
            <div className="footer__small__text footer__paragraph">
              <p>{t("About Us")}</p>
              <p>{t("Courses")}</p>
              <p>{t("Mentor")}</p>
              <p>{t("Contact Us")}</p>

            </div>
          </div>
          <div className="footer__support">
            <h2 className='r_f_text'>{t("Support")}</h2>
            <div className="footer__small__text footer__paragraph">
              <p>{t("Careers")}</p>
              <p>{t("Help & Support")}</p>
              <p>{t("Blog")}</p>
            </div>
          </div>
          <div className="footer__company">
            <h2  className=' r_f_text'>{t("Company")}</h2>
            <div className="footer__small__text footer__paragraph">
              <p>{t("Privacy Policy")}</p>
              <p>{t("Terms of Service")}</p>
              <p>{t("Code of Conduct")}</p>
            </div>
          </div>
        </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__two__small__text">
            <p>{t("Privacy Policy")}</p>
            <p>{t("Terms and Condition")}</p>
          </div>
          <div className="footer__one__small__text">
            <p>{t("@2020 TanahAir Studio. All rights reserved.")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer