import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toggleModalAction } from '../../redux/modal/action';
import { getModalStatus } from '../../redux/modal/selectors';
import './UserMenu.scss';

const UserMenu = () => {
  const value = useSelector(getModalStatus);
  const dispatch = useDispatch();

  function onToggleModal() {
    if (value) {
      dispatch(toggleModalAction(value));
    }
  }

  return (
    <ul className="list nav-list">
      <li className="nav-list__item" onClick={onToggleModal}>
        <NavLink
          exact
          to="/"
          className="nav-list__item-link"
          activeClassName="active-nav-list__item-link"
        >
          Home
        </NavLink>
      </li>
      <li className="nav-list__item" onClick={onToggleModal}>
        <NavLink
          to="/useful-info"
          className="nav-list__item-link"
          activeClassName="active-nav-list__item-link"
        >
          Materials
        </NavLink>
      </li>
      <li className="nav-list__item" onClick={onToggleModal}>
        <NavLink
          to="/contacts"
          className="nav-list__item-link"
          activeClassName="active-nav-list__item-link"
        >
          Contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default UserMenu;
