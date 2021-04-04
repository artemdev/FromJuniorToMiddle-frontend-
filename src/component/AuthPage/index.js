// import AuthForm from '../AuthForm/index';
import { NavLink } from 'react-router-dom';
import styles from './AuthPage.module.css';

export default function AuthPage() {
  return (
    <div>
      <NavLink to="/auth" exact></NavLink>
    </div>
  );
}
