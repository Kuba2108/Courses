import React from 'react';
import { useTranslation } from 'react-i18next';
import CuteCat from '../../../assets/img/Cute-cat.png';

const SlidercardThree = () => {
  const { t } = useTranslation();
  return (
    <div className='slider_card'>
      <div className="slider__card_img">
        <img src={CuteCat} alt="" />
      </div>
      <div className="slider__card_text">
        <h2>{t('Meow')}</h2> 
        <h4>Cute Cat</h4> 
      </div>
    </div>
  );
};

export default SlidercardThree;
