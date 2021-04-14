import Logo from '../Logo';
import NavLinks from '../NavLinks';
import AuthNav from '../AuthNav';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="site-navigation">
      <Logo />
      <div className="is-visible">
        <NavLinks />
      </div>
      <AuthNav />
    </nav>
  );
};

export default Navigation;
