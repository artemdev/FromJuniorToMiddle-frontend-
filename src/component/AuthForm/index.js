// import React from 'react';
// import { useFormik } from 'formik';
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  // Sign Up (Регистрация)
  const handleClickRegister = e => {
    e.preventDefault();
    dispatch(authOperations.register({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form className={styles.form} autoComplete="off">
      <h2 className={styles.text}>
        You can use your Google Account to authorize:
      </h2>
      <div className={styles.buttonGoogleWrapper}>
        <a
          href="https://fromjuniortomiddle.herokuapp.com/auth/google"
          className={styles.buttonGoogle}
        >
          Google
        </a>
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

// ___________________________Formik_______________________________

// const validate = values => {
//   const errors = {};
//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }

//   if (!values.password) {
//     errors.password = 'Required';
//   } else if (
//     values.password.length < 8 ||
//     !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
//   ) {
//     errors.password =
//       'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters';
//   }

//   return errors;
// };

// const AuthForm = () => {
//   const dispatch = useDispatch();
//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//     },
//     validate,
//     handleChange: ({ target: { name, value } }) => {
//       switch (name) {
//         case 'email':
//           return (formik.values.email = value);
//         case 'password':
//           return (formik.values.password = value);
//         default:
//           return;
//       }
//     },
//     // Sign In (Войти)
//     handleClickLogIn: event => {
//       event.preventDefault();
//       const { email, password } = event;
//       console.log(event);
//       console.log(email, password);
//       dispatch(authOperations.logIn(email, password));
//       formik.values.email = '';
//       formik.values.password = '';
//     },
//     // Sign Up (Регистрация)
//     handleClickRegister: event => {
//       event.preventDefault();
//       const { email, password } = event;
//       dispatch(authOperations.register(email, password));
//       formik.values.email = '';
//       formik.values.password = '';
//     },
//   });
//   return (
//     <form className={styles.form} autoComplete="off">
//       <h2 className={styles.text}>
//         You can use your Google Account to authorize:
//       </h2>
//       <div className={styles.buttonGoogleWrapper}>
//         <button className={styles.buttonGoogle}>Google</button>
//       </div>
//       <h2 className={styles.text}>
//         Or login to our app using e-mail and password
//       </h2>
//       <input
//         type="email"
//         name="email"
//         placeholder="E-mail"
//         value={formik.values.email}
//         className={styles.input}
//         onChange={formik.handleChange}
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         value={formik.values.password}
//         className={styles.input}
//         onChange={formik.handleChange}
//       />
//       <div className={styles.buttonWrapper}>
//         <button
//           className={styles.buttonSignIn}
//           onClick={formik.handleClickLogIn}
//         >
//           Sign in
//         </button>
//         <button
//           className={styles.buttonSignUp}
//           onClick={formik.handleClickRegister}
//         >
//           Sign up
//         </button>
//       </div>
//     </form>
//   );
// };

// export default AuthForm;
