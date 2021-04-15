import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { ReactComponent as SignOutIcon } from '../../icon/sign-out.svg';
import styles from './styles.module.scss';
import { authSelectors } from '../../redux/auth';
import { authOperations } from '../../redux/auth';
import Button from '../Button';

function AuthHav() {
  const [name, setName] = useState();
  const [avatarUrl, setAvatarUrl] = useState();
  const dispatch = useDispatch();
  const userAvatar = useSelector(authSelectors.getUserAvatar);
  const userName = useSelector(authSelectors.getUsername);
  const token = useSelector(authSelectors.getToken);

  useEffect(() => {
    try {
      setName(userName);
      setAvatarUrl(userAvatar);
    } catch (error) {
      console.log(error);
    }
  }, [userName, userAvatar]);

  const handleLogOut = () => {
    dispatch(authOperations.logOut(token));
  };

  return (
    <div className={styles.authNav}>
      <div className={styles.authAvatarNameContainer}>
        <div className={styles.avatarWarapper}>
          <img
            className={styles.avatar}
            src={avatarUrl}
            alt="avatar"
            width="30"
            height="30"
          />
        </div>
        <span className={styles.name}>{name}</span>
      </div>

      <Button
        children={<SignOutIcon />}
        className={styles.signOutButton}
        onClick={handleLogOut}
      />
    </div>
  );
}

export default AuthHav;
