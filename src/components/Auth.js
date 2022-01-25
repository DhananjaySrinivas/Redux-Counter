import { useDispatch } from 'react-redux';
import { useRef, useState } from 'react';

import classes from './Auth.module.css';
import { authActions } from '../store/auth';

const Auth = () => {
  const [login, setLogin] = useState(true)
  const emailInputRef=useRef();
  const passwordInputRef=useRef();
  let email = 'user@gmail.com'
  let password = 'user@123'
  


   
  const dispatch = useDispatch();
 
  const loginHandler = (event) => {
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    event.preventDefault();
if(enteredEmail === email && enteredPassword === password){
  setLogin(true)
    dispatch(authActions.login());
    
}else{
 
  setLogin(false)
  
}
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' ref={emailInputRef} required id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' ref={passwordInputRef} required  id='password' />
          </div>
          {!login &&<p>Please check mail Id and Password</p>}
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;