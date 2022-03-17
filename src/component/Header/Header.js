import { useSelector, useDispatch } from 'react-redux';
import Button from '../Button';
import Modal from '../Modal';
import Navlinks from '../NavLinks';
import Loader from '../Loader';
import { toggleModalAction } from '../../redux/modal/action';
import { getModalStatus } from '../../redux/modal/selectors';
import { authSelectors } from '../../redux/auth';
import { ReactComponent as MobileMenuBtn } from '../../icon/open-mobile-menu-btn.svg';
import { ReactComponent as CloseMenuBtn } from '../../icon/close-moile-menu.svg';
import { ReactComponent as SignOutIcon } from '../../icon/sign-out.svg';
import './Header.scss';
import { authOperations } from 'redux/auth';

const Header = ({ children }) => {
  const value = useSelector(getModalStatus);
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);
  const token = useSelector(authSelectors.getToken);
  const isRefreshingCurrentUser = useSelector(
    authSelectors.isRefreshingCurrentUser,
  );
  const dispatch = useDispatch();

  function onToggleModal() {
    dispatch(toggleModalAction(value));
  }

  function handleLogout() {
    dispatch(authOperations.logOut(token));
    onToggleModal();
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
            children={<CloseMenuBtn />}
            onClick={onToggleModal}
          />
        )}
        {value && (
          <Modal>
            <Navlinks />
            {isLoggedIn && (
              <div className="sign-out-btn-wrapper">
                <Button
                  className="modal-sign-out-btn"
                  children={<SignOutIcon />}
                  onClick={handleLogout}
                ></Button>
                {isRefreshingCurrentUser && <Loader />}
              </div>
            )}
          </Modal>
        )}
      </header>
    </>
  );
};

export default Header;
