import { Profile } from '@/widgets/profile'
import React from 'react'
import styles from './Account.module.scss'

const Page = () => {
  return (
    <div className={styles.root} >
      <Profile/>
    </div>
  )
}



export default Page