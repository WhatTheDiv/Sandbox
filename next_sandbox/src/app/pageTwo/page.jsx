import PageTwo from '../Styles/pageTwo.module.css'
import Link from 'next/link'
import Image from "next/legacy/image"

export default function pageTwo() {
  return (
    <div className={ PageTwo.container }>
      <div className={PageTwo.mainHeader}>
        <span className={PageTwo.shooter1}></span>
        <h1>Buttons</h1>
        <span className={PageTwo.shooter2}></span>
        <Link href='/'>
          <Image
            src='/Assets/Icons/home.png'
            width={30}
            height={30}
            alt='home'
          />
        </Link>
      </div>
      <div className={PageTwo.table_container}>
        <table className={PageTwo.table}>
          <thead>
            <tr>
              <th>Primary</th>
              <th>Secondary</th>
              <th>Tertiary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>button</td>
              <td>button</td>
              <td>button</td>
            </tr>
            <tr>
              <td>button</td>
              <td>button</td>
              <td>button</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}