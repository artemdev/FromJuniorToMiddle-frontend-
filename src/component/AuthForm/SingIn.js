// import React from 'react';
import { Formik, Form, Field } from 'formik';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import routes from '../../routes';
import authOperations from '../../redux/auth/auth-operations';
import styles from './AuthForm.module.scss';
import SignupSchema from '../../helpers/formSchema';

export default function AuthForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        password: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        const email = values.email;
        const password = values.password;
        dispatch(authOperations.logIn({ email, password }));
      }}
    >
      {({ errors, touched }) => (
        <Form className={styles.form} autoComplete="off">
          <h2 className={styles.text}>
            You can use your Google Account to authorize:
          </h2>
          <div className={styles.buttonGoogleWrapper}>
            <a href={routes.GOOGLE_AUTH_URL} className={styles.buttonGoogle}>
              Google
            </a>
          </div>
          <h2 className={styles.text}>
            Or login to our app using e-mail and password
          </h2>
          <Field
            type="email"
            name="email"
            placeholder="E-mail"
            className={styles.input}
          />
          {errors.email && touched.email ? <div className={styles.errors}>{errors.email}</div> : null}
          <Field
            type="password"
            name="password"
            placeholder="Password"
            className={styles.input}
          />
          {errors.password && touched.password ? (
            <div className={styles.errors}>{errors.password}</div>
          ) : null}

          <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.buttonSignIn}>
              Sign in
            </button>
            <NavLink
              exact
              to={routes.AUTH_SIGNUP}
              className={styles.buttonSignUp}
            >
              Sign up
            </NavLink>
          </div>
        </Form>
      )}
    </Formik>
  );
}
