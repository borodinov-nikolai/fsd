import React from 'react';
import styles from './Header.module.scss'
import Image from 'next/image';
import logo_white from '@/shared/assets/icons/logo_white.png'

const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.grid} >
        <div className={styles.logo} >
          <Image className={styles.logo_image} src={logo_white} width={334} height={68} alt='header logo'/>
        </div>
        <div className={styles.city} >Москва</div>
        <div className={styles.search} >Поиск</div>
        <div className={styles.call} >+1 (234) 567-89-01</div>
        <div className={styles.user_bar} ></div>
        <div className={styles.home}>Главная</div>
        <div className={styles.catalog} >Каталог</div>
        <div className={styles.services} >Услуги</div>
        <div className={styles.maintenance} >Сервисы</div>
        <div className={styles.company} >Компания</div>
        <div className={styles.contacts} >Контакты</div>

      </div>
    </div>
  )
}

export default Header