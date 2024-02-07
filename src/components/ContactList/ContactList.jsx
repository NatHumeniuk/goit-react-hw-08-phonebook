import React from 'react';

import css from './ContactList.module.css';

import { ContactItem } from 'components';

export const ContactList = () => {
  return (
    <div className={css.wrapperContacts}>
      <ul className={css.contactList}>
        <ContactItem />
      </ul>
    </div>
  );
};
