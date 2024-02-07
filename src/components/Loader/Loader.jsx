import React from 'react';
import { ColorRing } from 'react-loader-spinner';

import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <ColorRing
        visible={true}
        height="100"
        width="100"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#3153ed', '#1f60e2', '#2263ee', '#3064e7', '#3379f2']}
      />
    </div>
  );
};
