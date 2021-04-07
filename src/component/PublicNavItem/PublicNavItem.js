import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toggleModalAction } from '../../redux/modal/action';
import { getModalStatus } from '../../redux/modal/selectors';
import './PublicNavItem.scss';

const PublicNavItem = () => {
  const value = useSelector(getModalStatus);
  const dispatch = useDispatch();

  function onToggleModal() {
    if (value) {
      dispatch(toggleModalAction(value));
    }
  }

  return (
    <ul className="list public-nav-list">
      <li className="nav-list__item" onClick={onToggleModal}>
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
