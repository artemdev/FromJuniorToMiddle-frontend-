import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toggleModalAction } from '../../redux/modal/action';
import { getModalStatus } from '../../redux/modal/selectors';
import { ReactComponent as Logotype } from './logotype.svg';
import './Logo.scss';

const Logo = () => {
  const value = useSelector(getModalStatus);
  const dispatch = useDispatch();

  function onToggleModal() {
    if (value) {
      dispatch(toggleModalAction(value));
    }
  }

  return (
    <div className="logo-wrapper" onClick={onToggleModal}>
      <NavLink exact to="/auth">
        <Logotype />
      </NavLink>
    </div>
  );
};

export default Logo;
