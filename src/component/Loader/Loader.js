import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './Loader.scss';

const onLoader = () => {
  return (
    <div className="loader-wrapper">
      <Loader
        className="loader"
        type="ThreeDots"
        color="#ff6b01"
        height={80}
        width={80}
        timeout={3000} //3 secs
      />
    </div>
  );
};

export default onLoader;
