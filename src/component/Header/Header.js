import { useSelector, useDispatch } from 'react-redux';
import Button from '../Button';
import Modal from '../Modal';
// import PublicNavItem from '../PublicNavItem';
import UserMenu from '../UserMenu';
import { toggleModalAction } from '../../redux/modal/action';
import { getModalStatus } from '../../redux/modal/selectors';
import { ReactComponent as MobileMenuBtn } from './mobile-menu-btn.svg';
import { ReactComponent as CloseModalBtn } from './close-modal-btn.svg';
import './Header.scss';

const Header = ({ children }) => {
  const value = useSelector(getModalStatus);
  const dispatch = useDispatch();

  function onToggleModal() {
    dispatch(toggleModalAction(value));
  }

  return (
    <>
      <header className="site-header">
        {children}
        {!value ? (
          <Button
            className="site-header__button"
            children={<MobileMenuBtn />}
            onClick={onToggleModal}
          />
        ) : (
          <Button
            className="site-header__button"
            children={<CloseModalBtn />}
            onClick={onToggleModal}
          />
        )}
        {value && (
          <Modal>
            {/* <PublicNavItem/> */}
            <UserMenu />
          </Modal>
        )}
      </header>
    </>
  );
};

export default Header;
