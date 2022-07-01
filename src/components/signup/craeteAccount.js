import React, { useState } from 'react'
import classes from  './createAccount.module.css'

export default function CraeteAccount() {
    const [gender,setGender] = useState(null)
    const [eror,setEror] = useState(null)
    const changeHandler = (e) =>{
        const target = e.target
        if(target.value === 'Male') setGender('male')
        if(target.value ==='Female') setGender('female')
    }

    const submitHandler = (event) =>{
        event.preventDefault()
        if(gender === null){
            setEror('gender is not defined')
            return
        }
        setEror(null)
    }

    console.log(gender)
  return (
   <form onSubmit={submitHandler} className={classes['login-form']}>
    
    <div className={classes['input-field']}>
        <input placeholder='name' />
    </div>
    <div className={classes['input-field']}>
       
        <input placeholder='lastname' />
    </div>
    <div className={classes['input-field']}>
        <input placeholder='email' />
      
    </div>
    <div className={classes['input-field']}>
       
        <input placeholder='password'/>
    </div>
    <div>
        
        <input type="radio" value="Male" name="gender" onChange={changeHandler} /> Male
        <br/>
        <input type="radio" value="Female" name="gender" onChange={changeHandler} /> Female
      </div>
    <div className={classes.action}>
        <button >create my account</button>
    </div>
    {eror && <p>{eror}</p>}

   </form>
  )
}
