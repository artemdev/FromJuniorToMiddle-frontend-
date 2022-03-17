import SignIn from '../../component/AuthForm/SingIn';
import SignUp from '../../component/AuthForm/SignUp';
import styles from './AuthPageView.module.scss';

const AuthPageView = ({ action = 'signup' }) => {
  const signIn = action === 'signin';
  const signUp = action === 'signup';
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Pro Test</h2>
        <p className={styles.text}>
          <span className={styles.textBold}>[</span> We will help you find weak
          points
          <br /> in knowledge so that you can strengthen it. We will show you
          what is relevant to know for a{' '}
          <span className={styles.textBold}>QA Engineer</span> and will try to
          make the learning process more diverse_{' '}
          <span className={styles.textBold}>]</span>
        </p>
      </div>
      <div className={styles.wrapper}>
        {signIn && <SignIn />}
        {signUp && <SignUp />}
      </div>
    </section>
  );
};

export default AuthPageView;
