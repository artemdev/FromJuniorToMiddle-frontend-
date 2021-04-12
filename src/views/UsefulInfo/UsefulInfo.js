import React from 'react';
import UsefulInfoItem from './UsefulInfoItem/UsefulInfoItem';
import s from './UsefulInfo.module.scss';

function UsefulInfo({ literature, resources }) {
  return (
    <section className={s.materialsSection}>
      <div className={s.usefullContainer}>
        <h2 className={s.title}>Usefull literature</h2>
        <ol className={s.list}>
          {literature.map(({ id, name, url }) => (
            <li className={s.item} key={id}>
              <UsefulInfoItem id={id} name={name} url={url} />
            </li>
          ))}
        </ol>
        <h2 className={s.title}>Usefull resources</h2>
        <ol className={s.list}>
          {resources.map(({ id, name, url }) => (
            <li className={s.item} key={id}>
              <UsefulInfoItem id={id} name={name} url={url} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
export default UsefulInfo;
