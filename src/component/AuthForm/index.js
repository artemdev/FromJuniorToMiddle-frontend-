import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import styles from './AuthForm.module.scss';

export default function AuthForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  // Sign In (Войти)
  const handleClickLogIn = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({email, password}));
    setEmail('');
    setPassword('');
  };

  // Sign Up (Регистрация)
  const handleClickRegister = e => {
    e.preventDefault();
    dispatch(authOperations.register({email, password}));
    setEmail('');
    setPassword('');
  };

  return (
    <form className={styles.form} autoComplete="off">
      <h2 className={styles.text}>
        You can use your Google Account to authorize:
      </h2>
      <div className={styles.buttonGoogleWrapper}>
        <button className={styles.buttonGoogle}>Google</button>
      </div>
      <h2 className={styles.text}>
        Or login to our app using e-mail and password
      </h2>
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={email}
        className={styles.input}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        className={styles.input}
        onChange={handleChange}
      />
      <div className={styles.buttonWrapper}>
        <button className={styles.buttonSignIn} onClick={handleClickLogIn}>
          Sign in
        </button>
        <button className={styles.buttonSignUp} onClick={handleClickRegister}>
          Sign up
        </button>
      </div>
    </form>
  );
}
