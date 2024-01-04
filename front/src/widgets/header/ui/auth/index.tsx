'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './Auth.module.scss'
import { useGetUserQuery } from '@/entities/user'



const Auth = (props: any) => {

    const [isAuth, setIsAuth] = useState<boolean>()
    const is_auth = window && localStorage.getItem('is_auth')


    
    useEffect(()=> {
        if(is_auth && is_auth === 'true') {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    },[is_auth])

 


   
   if(window){

       return <Link className={styles.root} {...props} href={isAuth ? '/account':'/auth'}>{isAuth? 'Личный кабинет' : 'Авторизация'}</Link>
   }
  


    
    
  
}

export default Auth