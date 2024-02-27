import React from 'react'
import UxDesign from '../../assets/img/UxDesign.png'
import WebDeveloper from '../../assets/img/web-developer.png'
import PhoneUx from '../../assets/img/phone-ux.png'
import DesignImg from '../../assets/img/3d-design.png'
import Star from '../../assets/svg/Star.svg'
import { useTranslation } from 'react-i18next'

const ArifKecek = () => {
  const { t } = useTranslation()
    const cardsData = [
        {
          imgSrc: UxDesign,
          buttonText: t("UX Design"),
          title: t("Interpersonal skills - work better with others!"),
          author: t("Tanah Air Team"),
          price: '$384',
        },
        {
          imgSrc: WebDeveloper,
          buttonText: t("Web Developer"),
          title: t("How to become an Expert Web Developer"),
          author: t("Tanah Air Team"),
          price: '$735',
        },
        {
          imgSrc: PhoneUx,
          buttonText: t("UX Research"),
          title: t("User Experience Design Essentials"),
          author: t("Tanah Air Team"),
          price: '$826',
        },
        {
          imgSrc: DesignImg,
          buttonText: t("3D Design"),
          title: t("Creating 3D Modelling in Blender"),
          author: t("Tanah Air Team"),
          price: '$710',
        },
    ]
  return (
    <div>
        <h1 className='arif_kecek_title'>{t("More Courses from Arif Kecek")}</h1>
        <div className='trending_cards_a'>
      {cardsData.map((card, index) => (
        <div className="card_trending_a" key={index}>
          <img style={{ height: '180px' }} src={card.imgSrc} alt="" />
          <button className='card_text'>
            {card.buttonText}
          </button>
          <h5>{card.title}</h5>
          <p>{card.author}</p>
          <div className="trending__stars">
            {Array.from({ length: 5 }, (_, i) => (
              <img key={i} src={Star} alt="" />
            ))}
            <p>(2078)</p>
          </div>
          <div className="price_trending_card">
            <del className='del_text'>$640</del>
            <h4 className='price_trending'>{card.price}</h4>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default ArifKecek