import Header from '../Header';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import './AppBar.scss';

const AppBar = () => {
  return (
    <Header>
      <Navigation />
      <AuthNav />
    </Header>
  );
};

export default AppBar;
