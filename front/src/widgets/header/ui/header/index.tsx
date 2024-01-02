'use client'
import React from 'react';
import styles from './Header.module.scss'
import Image from 'next/image';
import logo_white from '@/shared/assets/icons/logo_white.png'
import logo_black from '@/shared/assets/icons/logo_black.png'
import icon_cart_white from '../../assets/icons/cart_white.png'
import icon_cart_black from '../../assets/icons/cart_black.png'
import icon_star_white from '@/shared/assets/icons/star_white.png'
import icon_star_black from '@/shared/assets/icons/star_black.png'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Header = () => {
  const pathname = usePathname()
  console.log(pathname)

  const color = pathname === '/' ? {color: 'white'}: {color: 'black'}
  const icon_logo = pathname === '/' ? logo_white : logo_black
  const icon_cart = pathname === '/' ? icon_cart_white : icon_cart_black
  const icon_star = pathname === '/' ? icon_star_white : icon_star_black
  return (
    <div style={color} className={styles.root}>
      <div className={styles.grid} >
        <div className={styles.logo} >
          <Image className={styles.logo_image} src={icon_logo} width={334} height={68} alt='header logo'/>
        </div>
        <div className={styles.city} >Москва</div>
        <div className={styles.search} >Поиск</div>
        <div className={styles.call} >+1 (234) 567-89-01</div>
        <div className={styles.userBar} >
          <div className={styles.userBar_flex}>
          <div className={styles.userBar_favorites} >
          <Image src={icon_star} width={15} height={15} alt='cart icon'/>
          </div>
          <div className={styles.userBar_cart} >
          <Image src={icon_cart} width={15} height={15} alt='cart icon'/>
          </div>
          </div>
          <Link className={styles.userBar_account}href={'/auth'} >
           Личный кабинет
          </Link>
        </div>
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