import styles from './Hero.module.css';
import { profile } from '../../data/profile';

import type { FC } from 'react';

export const Hero: FC = () => (
  <section className={styles.profile} aria-labelledby="profile-title">
    <h1 id="profile-title" className={styles.title}>
      {profile.brand}
    </h1>
    <p className={styles.role}>{profile.role}</p>
    <div className={styles.introduction}>
      {profile.introduction.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  </section>
);
