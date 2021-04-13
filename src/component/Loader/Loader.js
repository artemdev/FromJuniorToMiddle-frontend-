import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './Loader.scss';

const onLoader = () => {
  // console.log('state', state.auth.user);
  return (
    <div className="loader-wrapper">
      <Loader
        className="loader"
        type="ThreeDots"
        color="#464646"
        height={40}
        width={40}
        timeout={30000} //3 secs
      />
    </div>
  );
};

export default onLoader;
