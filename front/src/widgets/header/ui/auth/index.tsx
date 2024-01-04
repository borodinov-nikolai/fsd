'use client'
import Link from 'next/link'
import React from 'react'

const Auth = (props: any) => {

    if(typeof window !== 'undefined') {
        
        const token =  localStorage.getItem('token')


  if(token) {
        return  <Link {...props} href={'/account'}> Личный кабинет</Link>
          
    } else if(!token ) {
       return <Link {...props} href={'/auth'}>Авторизация</Link>

    }
    }
    
  
}

export default Auth