'use client'

import FormTwo from '../../Styles/formTwo.module.css'

export default function formTwo(){

  return(
    <form className={ FormTwo.form } onSubmit={ submitForm }>
      <h1>Card Details</h1>
        <fieldset className={ FormTwo.form_section}>
          <legend htmlFor='name'>Name on Card</legend>
          <input 
            type="text" 
            autofill='cc-name' 
            placeholder='Full Name' 
            name="name" 
            id="nameOnCard"
          />

        </fieldset>
        <fieldset className={ FormTwo.form_section}>
          <legend htmlFor='card'>Card Number</legend>
          <input 
            type="text" 
            autofill='cc-number' 
            placeholder='1234-5678-9101-1121' 
            name="cardNumber" 
            id="cardNumber"
            onChange={ onChange_cardNum }
          />
        </fieldset>
        <span className={FormTwo.form_section}>
          <fieldset className={ FormTwo.form_section_multi}>
            <legend htmlFor='exp'>Expiration Date </legend>
            <input 
              type="text" 
              autofill='cc-exp' 
              placeholder='( mm/yyyy )' 
              name="exp" 
              id="expirationDate" 
              onChange={ onChange_expDate }
            />
          </fieldset>
          <fieldset className={ FormTwo.form_section_multi}>
            <legend htmlFor='cvv'>CVV</legend>
            <input 
              type="number" 
              autofill='cc-csc' 
              placeholder='999' 
              name="cvv" 
              id="cvvNumber" 
            />
          </fieldset>
        </span>
        <span className={ FormTwo.form_submit}>
          <input type="submit" value="Complete Order" />
        </span>
    </form>
  )
}

function submitForm(e){
  e.preventDefault()
  console.log('submitted')
}
function onChange_cardNum(e){
  function badCharInStringReturnsTrue(arr, bad_i){
    return arr.some((char, i) => {
      if(char !== '-' && isNaN(char)){
        bad_i = i
        console.warn('Invalid Character (',char,') @ index '+bad_i)
        return true
      }
    })
  }

  const valueArr = e.target.value.split('') 
  const newValueArr = []
  let badValueIndex = -1

  if( badCharInStringReturnsTrue(valueArr, badValueIndex) ){
    valueArr.pop(badValueIndex)
    e.target.value = valueArr.join('') 
    return;
  }


  valueArr.forEach( char => {
    switch(newValueArr.length){
      case 0:
      case 1:
      case 2:
      case 3:
      case 5:
      case 6:
      case 7:
      case 8:
      case 10:
      case 11:
      case 12:
      case 13:
      case 15:
      case 16:
      case 17:
      case 18:
        if(char !== '-') newValueArr.push(char) 
        break;
      case 4:
      case 9:
      case 14:
        if(char !== '-') newValueArr.push('-', char);
        else newValueArr.push('-')
        break;
    }
  })
  const len = newValueArr.length
  if( newValueArr[len-1] === '-' ) 
    newValueArr.pop( len-1 )

  e.target.value = newValueArr.join('')
    
}
function onChange_expDate(e){
  function badCharInStringReturnsTrue(arr, bad_i){
    return arr.some((char, i) => {
      if(char !== '-' && isNaN(char)){
        bad_i = i
        console.warn('Invalid Character (',char,') @ index '+bad_i)
        return true
      }
    })
  }
  const valueArr = e.target.value.split('')
  const newValueArr = []
  let badValueIndex = -1

  valueArr.forEach( (char,index) => {
    switch( newValueArr.length ){
      case 0: 
        console.log(' character at index ',index,': ',char,' --- (')
        if(char === '(') newValueArr.push(char)
        else newValueArr.push('(',char)
        break;
      case 1:
      case 2: 
      case 4:
      case 5:
      case 6:
      case 7:
        console.log(' character at index ',index,': ',char,' --- number')
        if( !isNaN(char) ) newValueArr.push(char) 
        break;
      case 3:
        console.log(' character at index ',index,': ',char,' --- /')
        if( char === '/' ) newValueArr.push(char)
        else newValueArr.push('/',char)
      case 8:
        console.log(' character at index ',index,': ',char,' --- )')
        if( char === ')' ) newValueArr.push(char)
        else newValueArr.push(')')
    }
  })

  
  e.target.value = newValueArr.join('')

}