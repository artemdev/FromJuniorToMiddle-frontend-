import { Redirect } from 'react-router-dom';
import MainPage from 'component/MainPage';

const MainPageView = ({ authorized }) => {
  if (authorized) {
    return <Redirect to="/" />;
  }
  return <MainPage />;
};

export default MainPageView;
