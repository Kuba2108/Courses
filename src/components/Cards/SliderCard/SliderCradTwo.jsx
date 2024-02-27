import React from 'react';
import { useTranslation } from 'react-i18next';
import AvatarFox from '../../../assets/img/Fox-avatar.png';

const SlidercardTwo = () => {
  const { t } = useTranslation();

  return (
    <div className='slider_card'>
      <div className="slider__card_img">
        <img src={AvatarFox} alt="" />
      </div>
      <div className="slider__card_text">
        <h2>{t('The mentor was friendly and taught me a lot, I recommended him to my friends and the lessons were not expensive and interesting')}</h2>
        <h4>Jacques Fresco</h4>
      </div>
    </div>
  );
};

export default SlidercardTwo;
