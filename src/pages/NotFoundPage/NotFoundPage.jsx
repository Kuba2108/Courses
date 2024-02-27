import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';


const NotFoundPage = () => {
  const { t } = useTranslation()
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='container'>
      <h1 className='error'>404</h1>
      <h1 className='notFound'>{t("NOT FOUND PAGE")}</h1>
    </div>
  )
}

export default NotFoundPage