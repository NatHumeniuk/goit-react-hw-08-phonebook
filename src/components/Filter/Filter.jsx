import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from 'store/contacts/filtersSlice';

import css from '../Filter/Filter.module.css';
import { selectFilter } from 'store/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <>
      <p className={css.filterTitle}>Find contacts by name:</p>
      <label className={css.label}>
        <input
          className={css.filterInput}
          value={filter}
          onChange={handleChangeFilter}
          type="text"
          name="keyword"
          placeholder="John..."
        />
      </label>
    </>
  );
};
