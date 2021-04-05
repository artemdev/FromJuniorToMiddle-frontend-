import { NavLink } from 'react-router-dom';
import { ReactComponent as Logotype } from './logotype.svg';
import './Logo.scss';

const Logo = () => {
  return (
    <div className="logo-wrapper">
      <NavLink exact to="/auth">
        <Logotype />
      </NavLink>
    </div>
  );
};

export default Logo;
