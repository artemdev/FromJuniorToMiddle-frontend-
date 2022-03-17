import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import UserMenu from './UserMenu';
import AuthMenu from './AuthMenu';

export default function AuthHav() {
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);
  return <>{isLoggedIn ? <UserMenu /> : <AuthMenu />}</>;
}
