'use client'
import { useState } from 'react'
import FormOneCss from '../../Styles/formOne.module.css'
import Image from 'next/image'

export default function FormOne(){
  const [ show, setShow ] = useState(false)
  return(
    <form className={`${FormOneCss.form}`} onSubmit={ e => submitForm(e) }>
      {/* <h1>Login</h1> */}
      <span className={FormOneCss.form_section}>
        <label htmlFor="username">Username</label>
        <input name='username' autoComplete='username' type="text" onChange={ checkInput }/>
      </span>
      <span className={FormOneCss.form_section}>
        <label htmlFor="password">Password</label>
        <input name='password' autoComplete='current-password' type={show ? 'text' : 'password'} onChange={ checkInput }/>
        {
          <Image 
            src={ !show ? '/Assets/Icons/eye_closed.png' : '/Assets/Icons/eye_open.png'} 
            alt={ show ? "hide" : "show"} 
            height={20} 
            width={20}
            onClick={ () => setShow(!show) }
          /> 
        }
      </span>
      <span className={FormOneCss.form_submit}>
        <input type="submit" value='Login'/>
        <input type="button" value="Clear" onClick={ clearForm }/>
      </span>
    </form>
  )
}

function submitForm(event){
  event.preventDefault()
  const form = document.querySelector(`.${FormOneCss.form}`)
  const items = form.querySelectorAll(`.${FormOneCss.form_section} input`)
  const inputs = {
    username:items[0].value,
    password:items[1].value
  }
  console.log(inputs)
}
function clearForm(){
  const form = document.querySelector(`.${FormOneCss.form}`)
  form.querySelectorAll('label').forEach( item => item.style.color = 'var(--mediumBlue)')
  form.reset()
}
function checkInput(i){
  if (i.target.value.length >= 1)
    i.target.previousSibling.style.color = 'var(--popGreen)'
  else i.target.previousSibling.style.color = 'var(--darkRed)'
}