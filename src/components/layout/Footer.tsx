import styles from './Footer.module.css';
import { profile } from '../../data/profile';

import type { FC } from 'react';

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <p>
      © {new Date().getFullYear()} {profile.brand}
    </p>
  </footer>
);
