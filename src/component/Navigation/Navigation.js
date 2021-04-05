import Logo from '../Logo';
// import PublicNavItem from '../PublicNavItem';
import UserMenu from '../UserMenu';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="site-navigation">
      <Logo />
      <div className="is-visible">
        <UserMenu />
        {/* <PublicNavItem /> */}
      </div>
    </nav>
  );
};

export default Navigation;
