import PageOne from '../Styles/pageOne.module.css'
import FormOne from './Forms/formOne.jsx'
import FormTwo from './Forms/formTwo.jsx'
import Link from 'next/link'
import Image from 'next/image'

export default function pageOne() {
  return (
    <div className={PageOne.container}>
      <div className={PageOne.mainHeader}>
        <span className={PageOne.shooter1}></span>
        <h1>Forms</h1>
        <span className={PageOne.shooter2}></span>
        <Link href='/'>
          <Image
            src='/Assets/Icons/home.png'
            width={30}
            height={30}
            alt='home'
          />
        </Link>
        
      </div>
      <div className={PageOne.container_body}>

        <div className={`${PageOne.body_container}`}>
          {/* <FormOne/> */}
          
        </div>
        <div className={`${PageOne.body_container}`}>
          <FormTwo/>
        </div>
      </div>
    </div>
  );
}