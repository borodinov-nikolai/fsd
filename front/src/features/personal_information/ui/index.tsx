'use client'
import React, { useState } from 'react'
import styles from './PersonalInformation.module.scss'
import Button from '@/shared/ui/button'
import Input from '@/shared/ui/input'
import { useRouter } from 'next/navigation'
import { useGetUserQuery } from '@/entities/user'
import { usePutUserInfoMutation } from '../api/putUserInfo'

const Personal_information = () => {
const router = useRouter()
const [number, setNumber] = useState<string>('')
const {data:user, isLoading} = useGetUserQuery('')
const username : string = user?.username[0].toUpperCase() + user?.username.slice(1)
const id: number = user?.id
const phone_number = user?.phone_number
console.log(phone_number)
const [putUserInfo, info] = usePutUserInfoMutation()

const putInfo = async (id : number, phone_number: string)=> {
    const res = await putUserInfo({id, body: {phone_number} })
    router.refresh()
    console.log(res)
}

  const leave = ()=> {
    localStorage.removeItem('is_auth')
    localStorage.removeItem('token')
    router.push('/')

  }
// console.log(username)

  return (
    <div className={styles.root} >

      <div className={styles.head} >
        <div className={styles.head_greeting} >
          <h1 className={styles.head_name} >Привет, <span>{!isLoading && username}</span></h1>
          <p className={styles.head_phoneNumber}>{!isLoading && phone_number}</p>
        </div>
        <div onClick={leave} className={styles.head_leaveBtn}>Выйти из аккаунта</div>
      </div>

      <div className={styles.userInfo} >
        <h2 className={styles.userInfo_title} >Личные данные:</h2>
        <div className={styles.userInfo_personChange} >
          <div className={styles.userInfo_person} ><Button width={'full'} type={'primary'} >Физическое лицо</Button></div>
          <div className={styles.userInfo_person}><Button width={'full'} type={'default'} >Юридическое лицо</Button></div>
        </div>
        <div className={styles.userInfo_personalaData}>
          <div className={styles.userInfo_itemsHolder} >
            <div className={styles.userInfo_name} >
              <p>Имя</p>
              <Input placeholder='Имя' />
            </div>
            <div className={styles.userInfo_birthday} >
              <p>Дата рождения</p>
              <Input placeholder='Дата' />
            </div>
            <div className={styles.userInfo_text} >
              <p>Добавьте дату рождения и получите скидку в праздник.</p>
            </div>
          </div>
          <div className={styles.userInfo_itemsHolder} >
            <div className={styles.userInfo_number} >
              <p>Телефон</p>
              <Input defaultValue={phone_number} onChange={(e)=> setNumber(e.target.value)} placeholder='Телефон' />
            </div>
            <div className={styles.userInfo_email} >
              <p>Эл. Почта</p>
              <Input placeholder='Эл. Почта' />
            </div>
            <div className={styles.userInfo_saveBtn} >
              <Button onClick={()=> putInfo(id, number) } width={388} height={60} type={'primary'} >Сохранить</Button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Personal_information