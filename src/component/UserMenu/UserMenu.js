import { NavLink } from 'react-router-dom';
import './UserMenu.scss';

const UserMenu = ({ onModalClose }) => {
  return (
    <ul className="list nav-list">
      <li className="nav-list__item" onClick={onModalClose}>
        <NavLink
          exact
          to="/"
          className="nav-list__item-link"
          activeClassName="active-nav-list__item-link"
        >
          Home
        </NavLink>
      </li>
      <li className="nav-list__item" onClick={onModalClose}>
        <NavLink
          to="/useful-info"
          className="nav-list__item-link"
          activeClassName="active-nav-list__item-link"
        >
          Materials
        </NavLink>
      </li>
      <li className="nav-list__item" onClick={onModalClose}>
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
