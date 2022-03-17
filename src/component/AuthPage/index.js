// import AuthForm from '../AuthForm/index';
import { NavLink } from 'react-router-dom';
import styles from './AuthPage.module.scss';

export default function AuthPage() {
  return (
    <div>
      <NavLink to="/auth" exact></NavLink>
    </div>
  );
}
