import Logo from '../Logo';
// import PublicNavItem from '../PublicNavItem';
import NavLinks from '../NavLinks';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="site-navigation">
      <Logo />
      <div className="is-visible">
        <NavLinks />
        {/* <PublicNavItem /> */}
      </div>
    </nav>
  );
};

export default Navigation;
