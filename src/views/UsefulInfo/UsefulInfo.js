import React from 'react';
import UsefulInfoItem from './UsefulInfoItem/UsefulInfoItem';

function UsefulInfo({ literature, resources }) {
  return (
    <>
      <h2>Usefull literature</h2>
      <ol>
        {literature.map(({ id, name, url }) => (
          <li key={id}>
            <UsefulInfoItem id={id} name={name} url={url} />
          </li>
        ))}
      </ol>
      <h2>Usefull resources</h2>
      <ol>
        {resources.map(({ id, name, url }) => (
          <li key={id}>
            <UsefulInfoItem id={id} name={name} url={url} />
          </li>
        ))}
      </ol>
    </>
  );
}
export default UsefulInfo;
