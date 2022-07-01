import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/exports";
import { PersonActions } from "../../store/userSlice";
import React from "react";

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLogined = useSelector(state=>state.PersonSlice.isLogined)
  console.log(`daregistrirebuli ${isLogined}`)
  const submitHandler =(event) =>{
    event.preventDefault()
    dispatch(PersonActions.changeLoginStatus())
    navigate('/profile',{replace:false})

  }
  const btnHandler = ()=>{
    navigate('/signup',{replace:true})
  }
  return (
    <form onSubmit={submitHandler} className={classes["login-form"]}>
      <div className={classes["input-field"]}>
        <input placeholder="email" type="email" />
      </div>
      <div className={classes["input-field"]}>
        <input placeholder="password" type="password" />
      </div>
      <div className={classes.action}>
      <button >sigin</button>
      </div>

      <div className={classes.action}>
      <button type="button" onClick={btnHandler} >not account yet? create account</button>
      </div>
    
    </form>
  );
}
