import { NavLink } from 'react-router-dom';
import './PublicNavItem.scss';

const PublicNavItem = ({ onModalClose }) => {
  return (
    <ul className="list public-nav-list">
      <li className="nav-list__item" onClick={onModalClose}>
        <NavLink
          to="contacts"
          className="nav-list__item-link"
          activeClassName="active-nav-list__item-link"
        >
          Contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default PublicNavItem;
