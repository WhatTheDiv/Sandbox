import PageThree from '../Styles/pageThree.module.css'
import Transition from './transition.jsx'

export default function pageThree() {
  return (
    <div className={PageThree.container} >
      <h1>Animation & Transition</h1>
      <h3>Animation</h3>
      <div className={PageThree.container_animation}>
      </div>
      <h3>Transition</h3>
      <Transition/>
    </div>
  );
}