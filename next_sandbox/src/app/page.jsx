import { Inter } from 'next/font/google'
import Link from 'next/link'
import home from './Styles/home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <main className={home.container}>
    <div className={home.container_buttonMainPage}>
      {/* <Link href='/pageOne'>Forms</Link> */}
    </div>
    <div className={home.container_buttonMainPage}>
    <Link href='/pageTwo'>Buttons</Link>
    </div>
    <div className={home.container_title}>
      <div className={home.title_section}>
        <h1 className={home.title}>Sandbox</h1>
        <p className={home.sub_title}>By Pat Cannon</p>
      </div>
    </div>
    <div className={home.container_buttonMainPage}>
    <Link href='/pageThree'>Animations</Link>
    </div>
    <div className={home.container_buttonMainPage}>
    <Link href='/pageFour'>Product Listings</Link>
    </div>
   </main>
  )
}
