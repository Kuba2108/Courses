import React from 'react';
import { useTranslation } from 'react-i18next';
import Courses from '../../assets/svg/Courses.svg';
import Students from '../../assets/svg/Students.svg';
import ProfileCounter from '../../assets/svg/ProfileCounter.svg';
import Flag from '../../assets/svg/Flag.svg';

const Counter = () => {
  const { t } = useTranslation();

  return (
    <div className='container counter'>
      <div className='counter_cards'>
        <div className='counter_card'>
          <img className='counter_img' src={Courses} alt='' />
          <h2 className='counter_quantity'>10.000+</h2>
          <h3 className='counter_name'>{t('Courses')}</h3>
        </div>
        <div className='counter_card'>
          <img className='counter_img_students' src={Students} alt='' />
          <h2 className='counter_quantity'>50.000+</h2>
          <h3 className='counter_name'>{t('Active Students')}</h3>
        </div>
        <div className='counter_card'>
          <img className='counter_img_profile_counter' src={ProfileCounter} alt='' />
          <h2 className='counter_quantity_oneK'>1000+</h2>
          <h3 className='counter_name'>{t('Active Mentor')}</h3>
        </div>
        <div className='counter_card'>
          <img className='counter_img flag' src={Flag} alt='' />
          <h2 className='counter_quantity'>180</h2>
          <h3 className='counter_name'>{t('Countries')}</h3>
        </div>
      </div>
      <div className='piramida'></div>
    </div>
  );
};

export default Counter;
