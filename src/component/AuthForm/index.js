import styles from './AuthForm.module.css';

export default function AuthForm() {
  return (
    <form className={styles.form}>
      <h2 className={styles.text}>
        You can use your Google Account to authorize:
      </h2>
      <button className={styles.buttonGoogle}>Google</button>
      <h2 className={styles.text}>
        Or login to our app using e-mail and password
      </h2>
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        className={styles.input}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className={styles.input}
      />
      <div>
        <button className={styles.buttonSignIn}>Sign in</button>
        <button className={styles.buttonSignUp}>Sign up</button>
      </div>
    </form>
  );
}
