import useInput from  "../Hooks/useInput"

const SimpleInput = (props) => {
  const {value: nameInput , 
    valid: nameValid , 
    hasError : nameError ,
    handleBlur: nameBlur , 
    handleChange : nameChange,
    reset :nameReset} = useInput(value => value.trim() !== '')

    const {value: emailInput , 
      valid: emailValid , 
      hasError : emailError ,
      handleBlur: emailBlur , 
      handleChange : emailChange,
      reset :emailReset} = useInput(value => {const reg =/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
     return reg.test(value)})

  const nameClass = nameError ?  "form-control invalid" : "form-control"
  const emailClass = emailError ? "form-control invalid" : "form-control"
    
  let formvalidity = false
  if( nameValid && emailValid)
  {
    formvalidity = true
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    if (!nameValid){
      return
    }
    nameReset()
    emailReset()
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className={nameClass}>
        <label htmlFor='name'>Your Name</label>
        <input 
        type='text' 
        id='name' 
        onChange= {nameChange}
        onBlur={nameBlur} 
        value={nameInput}/>
      </div>
      {nameError && <p className= "error-text"> Name cannot be Empty ! </p>}
      <div className={emailClass}>
        <label htmlFor='email'>Your Email</label>
        <input 
        type='email' 
        id='email' 
        onChange= {emailChange}
        onBlur={emailBlur} 
        value={emailInput}/>
      </div>
      { emailError && <p className= "error-text"> Email cannot be Empty ! </p>}
      
      <div className="form-actions">
        <button disabled={!formvalidity}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
