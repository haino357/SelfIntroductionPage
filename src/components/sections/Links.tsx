import styles from './Links.module.css';
import blogIcon from '../../assets/icons/blog.svg';
import githubIcon from '../../assets/icons/github.svg';
import noteIcon from '../../assets/icons/note.svg';
import qiitaIcon from '../../assets/icons/qiita.svg';
import zennIcon from '../../assets/icons/zenn.svg';
import { profile } from '../../data/profile';

import type { FC } from 'react';

const icons = {
  github: githubIcon,
  blog: blogIcon,
  zenn: zennIcon,
  qiita: qiitaIcon,
  note: noteIcon,
};

export const Links: FC = () => (
  <section className={styles.links} aria-labelledby="links-title">
    <h2 id="links-title" className={styles.heading}>
      {profile.linksHeading}
    </h2>
    <ul className={styles.list}>
      {profile.links.map((link) => (
        <li key={link.id}>
          <a className={styles.link} href={link.url}>
            <img className={styles.icon} src={icons[link.id]} width="36" height="36" alt="" />
            <span className={styles.content}>
              <span className={styles.name}>{link.name}</span>
              <span className={styles.description}>{link.description}</span>
            </span>
            <svg
              className={styles.arrow}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 19 19 5M5 5h14v14"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  </section>
);
