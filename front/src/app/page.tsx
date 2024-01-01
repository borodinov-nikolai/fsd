import Button from '@/shared/ui/button'
import Image from 'next/image'
import styles from './Home.module.scss'
import Home_presentation from '@/widgets/home_presentation'


export default function Home() {
  return (
    <main className={styles.root} >
     <Home_presentation/>
    </main>
  )
}
