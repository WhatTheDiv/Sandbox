'use client'

import { useState } from 'react'
import PageThree from '../Styles/pageThree.module.css'
import '../Styles/animations.css'

export default function transition(){
  function onChange_select(e){
    setTransition(e.target.value)
  }
  
  const [ transition, setTransition ] = useState('')
  return(
    <div className={`${PageThree.container_transition} animationVariables`}>

        <form className={PageThree.select} onSubmit={ submit_transition }>
          <label htmlFor="selectAnimation"></label>
          <select 
            onChange={ onChange_select } 
            name="animation" 
            id="selectAnimation"
            // value={transition}
            value='rotate'
          >
            <option value="">Select a Transition</option>
            <option value="flip">Flip</option>
            <option value="slide">Slide</option>
            <option value="fade">Fade</option>
            <option value="rotate">Rotate</option>
          </select>
          <input type="submit" id='animation-form-submit' value='Go!'/>
        </form>

        <div className={PageThree.transition}>
          <div className={`${PageThree.movingElement_container}`}>
            <div className={PageThree.movingElement_child}>

            </div>
          </div>
        </div>

      </div>
  )
}
function submit_transition(e){
  e.preventDefault()
  const submitButtonToDisable = document.querySelector('#animation-form-submit')
  submitButtonToDisable.disabled = true
  submitButtonToDisable.style.opacity = .7;
  const animation = {}

  animation.name = e.target.querySelector('select').value
  animation.time_number = 1.5
  animation.iteration = 1
  animation.time_string = animation.time_number+'s'
  animation.time = animation.time_number * animation.iteration * 1000
  // console.log(animation)

  const elementToAnimate = document.querySelector(`.${PageThree.movingElement_container}`)

  const className = animation.name === '' ? 'flip' : animation.name

  if(elementToAnimate.classList.length > 1) 
    elementToAnimate.classList.remove(elementToAnimate.classList[1])

  elementToAnimate.classList.add(className)
  elementToAnimate.style.animationDuration = animation.time_string
  elementToAnimate.style.animationIterationCount = animation.iteration

  setTimeout( ()=>{ 
    const parent = getComputedStyle(document.querySelector('.animationVariables'))
    const original = parent.getPropertyValue('--originalColor')
    const animationColor = parent.getPropertyValue(`--${animation.name}Color`)
    
    document.querySelector('.animationVariables').style.setProperty('--originalColor',animationColor)
    document.querySelector('.animationVariables').style.setProperty(`--${animation.name}Color`,original)
    
    elementToAnimate.classList.remove(elementToAnimate.classList[1])
    submitButtonToDisable.disabled = false
    submitButtonToDisable.style.opacity = 1;

  },animation.time)
}
