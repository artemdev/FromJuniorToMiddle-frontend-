import React from 'react';

function UsefulInfoItem({ name, url }) {
  return (
    <>
      <a href={url} target="blank">
        {name}
      </a>
    </>
  );
}
export default UsefulInfoItem;
