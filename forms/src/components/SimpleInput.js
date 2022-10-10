import React,{useState,useRef} from "react";
import  useInputCustomHook from '../customHook/useInputHook'
const SimpleInput = (props) => {
   const { value: enteredName, hasError: nameInputHasError, valueChangeHandler:nameChaneHandler,
       inputBlurHandler:nameBlurHandler,isValid:enteredNameIsValid,reset:resetNameInput
   } = useInputCustomHook( value => value.trim()!== '')

    const{
        value: enteredEmail, hasError: nameEmailInputHasError, valueChangeHandler:emailNameChaneHandler,
        inputBlurHandler:emailNameBlurHandler,isValid:enteredEmailNameIsValid,reset:resetEmailNameInput
    }=useInputCustomHook(value => value.includes('@'))

    let formDisabled = false
    if(enteredNameIsValid && enteredEmailNameIsValid) {
        formDisabled=true
    }

    const onSubmitHAndler = (e) => {
        e.preventDefault()
        if(!enteredNameIsValid && !enteredEmailNameIsValid) {
            return
        }
        resetNameInput()
        resetEmailNameInput()

    }

const inputValue = nameInputHasError ? 'form-control invalid' : 'form-control'
const emailValue = nameEmailInputHasError ? 'form-control invalid' : 'form-control'
  return (
    <form onSubmit={onSubmitHAndler}>
      <div className={inputValue}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name'
               value={enteredName}
               onBlur={nameBlurHandler}
               onChange={nameChaneHandler}/>
          {nameInputHasError  && <p className="error-text">Name should not be empty</p>}
      </div>

        <div className={emailValue}>
            <label htmlFor='name'>Your Email</label>
            <input type='email'
                   id='email'
                   onChange={emailNameChaneHandler}
                   value={enteredEmail}
                   onBlur={emailNameBlurHandler}
            />
            {nameEmailInputHasError  && <p className="error-text">Email should not be empty</p>}

        </div>

      <div className="form-actions">
        <button disabled={!formDisabled} >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
