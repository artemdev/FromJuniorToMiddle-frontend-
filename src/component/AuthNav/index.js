// import { getLoggedIn } from '../../redux/user/user-selectors';
// import { useSelector } from 'react-redux';
import UserMenu from './UserMenu';
import AuthMenu from './AuthMenu';

export default function AuthHav() {
  // const isLoggedIn = useSelector(getLoggedIn);
  const isLoggedIn = true;
  return <>{isLoggedIn ? <UserMenu /> : <AuthMenu />}</>;
}
