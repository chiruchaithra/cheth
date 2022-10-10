import classes from './Auth.module.css';
import {authActions} from '../store/AuthReducer'
import {useRef} from 'react'
import {useSelector,useDispatch} from 'react-redux'
const Auth = () => {
  const emailRef = useRef()
  const pwdRef = useRef()
  const dispatch = useDispatch()
  const onFormSubmit = (e) => {
    e.preventDefault()
    if(emailRef.current.value.length > 0 && pwdRef.current.value.length >0) {
      dispatch(authActions.login())
    }
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onFormSubmit}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email'  ref={emailRef}/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password'  ref={pwdRef}/>
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
