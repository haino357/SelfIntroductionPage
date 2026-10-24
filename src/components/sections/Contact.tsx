import styles from './Contact.module.css';
import { profile } from '../../data/profile';

import type { FC } from 'react';

export const Contact: FC = () => (
  <div className={styles.contact}>
    <a className={styles.emailButton} href={`mailto:${profile.email}`}>
      {profile.contactLabel}
    </a>
    <p className={styles.emailAddress}>{profile.email}</p>
  </div>
);
