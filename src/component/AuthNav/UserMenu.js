import icon from '../../icon/sign-out.svg';
import styles from './styles.module.scss';
import React, { useEffect, useState } from 'react';

export default function AuthHav() {
  const [name, setName] = useState();
  const [avatarUrl, setAvatarUrl] = useState();

  useEffect(() => {
    setName('Artem');
    setAvatarUrl(
      'https://s.gravatar.com/avatar/960f3e39e8c8835d3a9d5a37eafb8819?s=250',
    );
  }, []);

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

      <a href="/#">
        <img
          className={styles.signOutIcon}
          src={icon}
          alt="sign-out"
          width="16"
          height="16"
        />
      </a>
    </div>
  );
}
