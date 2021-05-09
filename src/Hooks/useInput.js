import {useState} from "react"

const useInput = (validateValue) =>{

    const [enteredValue ,setValue ]  = useState("")
    const [touched , setTouched]  = useState(false)

    const isInputValid = validateValue(enteredValue)
    const hasError = touched && !isInputValid 
    
    const handleChange = (event) =>{
        setValue(event.target.value)
     }
     const handleBlur = () =>{
       setTouched(true)
     }
     const reset = () => {
        setValue("")
        setTouched(false)
     }
    return {
        value :enteredValue ,
        valid : isInputValid,
        hasError,
        handleChange,
        handleBlur,
        reset
    }

}

export default useInput