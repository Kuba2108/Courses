import React from 'react';
import { useTranslation } from 'react-i18next';
import Avatar from '../../../assets/img/avatar.png';

const Slidercard = () => {
  const { t } = useTranslation();

  return (
    <div className='slider_card'>
      <div className="slider__card_img">
        <img src={Avatar} alt="" />
      </div>
      <div className="slider__card_text">
        <h2>{t('After studying here I gained new knowledge and insights. The mentor was very friendly and guided me to get the knowledge I wanted. Thank you!')}</h2>
        <h4>Kecek Arif</h4>
      </div>
    </div>
  );
};

export default Slidercard;
