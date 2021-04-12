import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toggleModalAction } from '../../redux/modal/action';
import { getModalStatus } from '../../redux/modal/selectors';
import './NavLinks.scss';
import routes from 'routes';
import { authSelectors } from 'redux/auth';

const NavLinks = () => {
  const value = useSelector(getModalStatus);
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);
  const dispatch = useDispatch();

  function onToggleModal() {
    if (value) {
      dispatch(toggleModalAction(value));
    }
  }

  return (
    <ul className="list nav-list">
      <li className="nav-list__item" onClick={onToggleModal}>
        {isLoggedIn && (
          <NavLink
            exact
            to={routes.MAIN_VIEW}
            className="nav-list__item-link"
            activeClassName="active-nav-list__item-link"
          >
            Home
          </NavLink>
        )}
      </li>
      <li className="nav-list__item" onClick={onToggleModal}>
        {isLoggedIn && (
          <NavLink
            to={routes.USEFUL_INFO_VIEW}
            className="nav-list__item-link"
            activeClassName="active-nav-list__item-link"
          >
            Materials
          </NavLink>
        )}
      </li>
      <li className="nav-list__item" onClick={onToggleModal}>
        <NavLink
          to={routes.CONTACTS_VIEW}
          className="nav-list__item-link"
          activeClassName="active-nav-list__item-link"
        >
          Contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
