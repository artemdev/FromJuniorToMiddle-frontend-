import { useLocation, useHistory, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MainPageView from '../MainPageView';
import { authSelectors } from '../../redux/auth';
import { authOperations } from '../../redux/auth';
import Loader from '../../component/Loader';
import './Google.scss';

const Google = () => {
  const location = useLocation();
  const history = useHistory();
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);
  const dispatch = useDispatch();
  const accessToken = new URLSearchParams(location.search).get('accessToken');

  function requestToMongo() {
    dispatch(authOperations.requestToMongo(accessToken));
  }

  requestToMongo();

  if (!accessToken) {
    history.push('/wrong');
  }

  return !isLoggedIn ? (
    <Loader />
  ) : (
    <Route to="/" component={() => <MainPageView authorized={isLoggedIn} />} />
  );
};

export default Google;
