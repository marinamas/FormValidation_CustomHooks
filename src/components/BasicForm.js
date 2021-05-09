import useInput from "../Hooks/useInput"
import "../index.css"

const BasicForm = (props) => {
  const {value: nameInput , 
    valid: nameValid , 
    hasError : nameError ,
    handleBlur: nameBlur , 
    handleChange : nameChange,
    reset :nameReset
  }  = useInput(value => value.trim() !== '')

  const {value: lastNameInput , 
    valid: lastNameValid , 
    hasError : lastNameError ,
    handleBlur: lastNameBlur , 
    handleChange : lastNameChange,
    reset :lastNameReset
  }  = useInput(value => value.trim() !== '')

  const {value: emailInput , 
    valid: emailValid , 
    hasError : emailError ,
    handleBlur: emailBlur , 
    handleChange : emailChange,
    reset :emailReset} = useInput(value => {const reg =/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
   return reg.test(value)})

   let formvalidity = false
   if(nameValid && lastNameValid && emailValid  ){
    formvalidity = true
   }

  const fnameClass = nameError ?  "form-control invalid" : "form-control"
  const lnameClass = lastNameError ?  "form-control invalid" : "form-control"
  const emailClass = emailError ? "form-control invalid" : "form-control"
    
  const handleSubmit =(event) => {
    event.preventDefault()
    if(!formvalidity) {
      return;
    } 
    nameReset()
    lastNameReset()
    emailReset()
  }

  return (
    <form onSubmit ={handleSubmit}>
      <div className='control-group'>
        <div className={fnameClass}>
          <label htmlFor='fname'>First Name</label>
          <input type='text' 
          id='fname'
          onChange={nameChange} 
          onBlur={nameBlur}
          value={nameInput}/>
          {nameError && <p className= "error-text"> FirstName cannot be Empty ! </p>}
        </div>
        
        <div className={lnameClass}>
          <label htmlFor='lname'>Last Name</label>
          <input type='text'
           id='lname'
          onBlur={lastNameBlur} 
          onChange={lastNameChange}
          value={lastNameInput}/>
          {lastNameError && <p className= "error-text"> LastName cannot be Empty ! </p>}
        </div>
        
      <div className={emailClass}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text' 
        id='email'
        onChange={emailChange} 
        onBlur={emailBlur}
        value={emailInput}/>
        {emailError && <p className= "error-text"> Email is not valid ! </p>}
      </div>
     </div>
      <div className='form-actions'>
        <button disabled={!formvalidity}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
