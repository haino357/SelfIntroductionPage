import styles from './Header.module.css';
import { profile } from '../../data/profile';

import type { FC } from 'react';

export const Header: FC = () => (
  <header className={styles.header}>
    <p className={styles.brand}>{profile.brand}</p>
  </header>
);
