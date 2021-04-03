import styles from './AuthForm.module.css';

export default function AuthForm() {
  return (
    <form>
      <h2>You can use your Google Account to authorize:</h2>
      <button>Google</button>
      <h2>Or login to our app using e-mail and password</h2>
      <input type="email" name="email" placeholder="E-mail" />
      <input type="password" name="password" placeholder="Password" />
    </form>
  );
}
