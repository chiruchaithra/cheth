import React,{useState} from "react";
const useBasicInputHook = (validate) => {
    const [enterValue,setEnterValue] = useState('')
    const [isTouched,setIsTouched] = useState(false)

    const valueIsValid = validate(enterValue)
    const hasError = !valueIsValid && isTouched

    const onChangeNameHandler = (e) => {
        setEnterValue(e.target.value)
    }

    const NameBlurHandler = () => {
        setIsTouched(true)
    }

    const reset = () => {
        setEnterValue('')
        setIsTouched(false)
    }
return {
        enterValue,isTouched,onChangeNameHandler,NameBlurHandler,reset,valueIsValid,hasError
}
}
export default useBasicInputHook