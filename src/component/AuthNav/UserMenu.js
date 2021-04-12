import icon from '../../icon/sign-out.svg';
import styles from './styles.module.scss';
import React, { useEffect, useState } from 'react';
import operations from '../../redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

function AuthHav() {
  const [name, setName] = useState();
  const [avatarUrl, setAvatarUrl] = useState();
  const dispatch = useDispatch();
  const userAvatar = useSelector(authSelectors.getUserAvatar);
  const userName = useSelector(authSelectors.getUsername);

  useEffect(() => {
    try {
      setName(userName);
      setAvatarUrl(userAvatar);
    } catch (error) {
      console.log(error);
    }
  }, [userName, userAvatar]);

  const handleLogOut = () => {
    dispatch(operations.logout());
  };

  return (
    <div className={styles.authNav}>
      <img
        className={styles.avatar}
        src={avatarUrl}
        alt="User Avatar"
        width="30"
        height="30"
      />
      <span className={styles.name}>{name}</span>

      <div onClick={handleLogOut}>
        <img
          className={styles.signOutIcon}
          src={icon}
          alt="sign-out"
          width="16"
          height="16"
        />
      </div>
    </div>
  );
}

export default AuthHav;
