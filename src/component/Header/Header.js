import { useState } from 'react';
import Button from '../Button';
import Modal from '../Modal';
// import PublicNavItem from '../PublicNavItem';
import UserMenu from '../UserMenu';
import { ReactComponent as MobileMenuBtn } from './mobile-menu-btn.svg';
import { ReactComponent as CloseModalBtn } from './close-modal-btn.svg';
import './Header.scss';

const Header = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const onToggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <header className="site-header">
        {children}
        {!isOpenModal ? (
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
        {isOpenModal && (
          <Modal>
            {/* <PublicNavItem
              modalStatus={isOpenModal}
              onModalClose={onToggleModal}
            /> */}
            <UserMenu modalStatus={isOpenModal} onModalClose={onToggleModal} />
          </Modal>
        )}
      </header>
    </>
  );
};

export default Header;
