import React,{useState} from "react";
const useInputHook = (validateValue) => {
    const [enteredValue,setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const valueIsValid = validateValue(enteredValue)
    const hasError = !valueIsValid && isTouched;
    const valueChangeHandler = (e) => {
            setEnteredValue(e.target.value)
            setIsTouched(true)
    }

    const inputBlurHandler = () => {
            setIsTouched(true)
        }

        const reset = () => {
            setEnteredValue('')
            setIsTouched(false)
        }
        return {
        value: enteredValue, hasError, valueChangeHandler,inputBlurHandler,isValid:valueIsValid,reset
        }
}
export default useInputHook