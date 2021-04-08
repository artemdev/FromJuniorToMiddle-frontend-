import { getLoggedIn } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import UserMenu from './UserMenu';
import AuthMenu from './AuthMenu';

export default function AuthHav() {
  const isLoggedIn = useSelector(getLoggedIn);
  return <>{isLoggedIn ? <UserMenu /> : <AuthMenu />}</>;
}
