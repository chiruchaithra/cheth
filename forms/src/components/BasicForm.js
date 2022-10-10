import React,{useState} from "react";
import useBasicInputHook from "../customHook/useBasicInputHook";
const BasicForm = (props) => {

    const nameFieldIsEmpty = (value) => {
         return value.trim()!==''

    }
    const EmailHaveAtTheRate = (value) => {
        return value.includes('@')
    }


    const {enterValue:enterFirstName,
        onChangeNameHandler:onChangeFirstNameHandler,
        NameBlurHandler:FirstNameBlurHandler,reset,hasError:FirstNameInputHasError,
        valueIsValid:firstNameIsValid

    }=useBasicInputHook(nameFieldIsEmpty)

    const {enterValue:enterLastName,
        onChangeNameHandler:onChangeLastNameHandler,
        NameBlurHandler:LastNameBlurHandler,reset : resetLastName, hasError:LastNameInputHasError,
        valueIsValid:lastNameIsValid
    }=useBasicInputHook(nameFieldIsEmpty)


    const {enterValue:enterEmail,
        onChangeNameHandler:onChangeEmailHandler,
        NameBlurHandler:EmailNameBlurHandler,reset : resetEmailName, hasError:EmailNameInputHasError,
        valueIsValid:emailNameIsValid
    }=useBasicInputHook(EmailHaveAtTheRate)





    let formIsValid = false
    if(firstNameIsValid && lastNameIsValid && emailNameIsValid) {
        formIsValid=true
    }



    const submitHandler = (e) => {
        e.preventDefault()

        reset()
        resetLastName()
        resetEmailName()


    }
    const FirstInputValue = FirstNameInputHasError ? 'form-control invalid' : 'form-control'
    const LastInputValue = LastNameInputHasError ? 'form-control invalid' : 'form-control'
    const EmailInputValue = EmailNameInputHasError ? 'form-control invalid' : 'form-control'


    return (
    <form onSubmit={submitHandler}>
      <div>
        <div className={FirstInputValue}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={onChangeFirstNameHandler}
                 onBlur={FirstNameBlurHandler}
          value={enterFirstName}
          />
            {FirstNameInputHasError  && <p className="error-text">First name should not be empty</p>}
        </div>
        <div className={LastInputValue}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='LastName' onChange={onChangeLastNameHandler}
                 onBlur={LastNameBlurHandler}
          value={enterLastName}
          />
            {LastNameInputHasError  && <p className="error-text">Last name should not be empty</p>}

        </div>
      </div>
      <div className={EmailInputValue}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='email' id='name'  onChange={onChangeEmailHandler}
               onBlur={EmailNameBlurHandler}
        value={enterEmail}
        />
          {EmailNameInputHasError  && <p className="error-text">Email should not be empty</p>}

      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
