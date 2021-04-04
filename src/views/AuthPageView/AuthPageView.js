import AuthForm from '../../component/AuthForm/index';
import styles from './AuthPageView.module.css';

const AuthPageView = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Pro Test</h2>
        <p className={styles.text}>
          [ We will help you find weak points in knowledge so that you can
          strengthen it. We will show you what is relevant to know for a QA
          Engineer and will try to make the learning process more diverse_ ]
        </p>
      </div>
      <div className={styles.wrapper}>
        <AuthForm />
      </div>
    </section>
  );
};

export default AuthPageView;
