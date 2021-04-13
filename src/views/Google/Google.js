// import { Route } from 'react-router';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import MainPageView from '../MainPageView';
// import { authSelectors } from '../../redux/auth';
import { authOperations } from '../../redux/auth';
import './Google.scss';

const Google = () => {
  const history = useHistory();
  const location = useLocation();
  // const isLoggedIn = useSelector(authSelectors.getLoggedIn);
  const dispatch = useDispatch();
  const accessToken = new URLSearchParams(location.search).get('accessToken');

  function requestToMongo() {
    dispatch(authOperations.requestToMongo(accessToken));
  }

  requestToMongo();

  if (accessToken) {
    history.push('/');
  }

  return (
    // <Route to="/" component={() => <MainPageView authorized={isLoggedIn} />} />
    <div></div>
  );
};

export default Google;
