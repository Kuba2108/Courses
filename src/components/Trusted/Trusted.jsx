import React from 'react';
import { useTranslation } from 'react-i18next';
import Studio from '../../assets/svg/Studio.svg';
import LogoIpsum from '../../assets/svg/LogoIpsum.svg';
import Logo from '../../assets/svg/Logo.svg';

const Trusted = () => {
  const { t } = useTranslation();

  return (
    <div className='container trusted_by'>
      <h1 className='trusted'>{t('Trusted by Company')}</h1>
      <div className="companies">
        <img src={Studio} alt="" />
        <img src={LogoIpsum} alt="" />
        <img src={Logo} alt="" />
        <img src={Studio} alt="" />
      </div>
      <div className="bottom_companies">
        <img className='logo' src={Logo} alt="" />
        <img className='logo_ipsum' src={LogoIpsum} alt="" />
      </div>
    </div>
  );
}

export default Trusted;
