import React from 'react';
import s from '../UsefulInfo.module.scss';
function UsefulInfoItem({ name, url, id }) {
  return (
    <span className={s.linkId}>
      {`${id}. `}
      <a className={s.itemLink} href={url} target="blank">
        {name}
      </a>
    </span>
  );
}
export default UsefulInfoItem;
