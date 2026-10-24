import { QRCodeSVG } from 'qrcode.react';

import styles from './Socials.module.css';
import instagramIcon from '../../assets/icons/instagram.svg';
import xIcon from '../../assets/icons/x.svg';
import { profile } from '../../data/profile';

import type { FC } from 'react';

const icons = {
  x: xIcon,
  instagram: instagramIcon,
};

export const Socials: FC = () => (
  <section className={styles.socials} aria-labelledby="socials-title">
    <h2 id="socials-title" className={styles.heading}>
      SNS
    </h2>
    <p className={styles.introduction}>リンクを開くか、QRコードを読み取ってご覧ください。</p>
    <ul className={styles.list}>
      {profile.socials.map((social) => (
        <li key={social.id}>
          <a className={styles.card} href={social.url}>
            <span className={styles.identity}>
              <img className={styles.icon} src={icons[social.id]} width="28" height="28" alt="" />
              <span className={styles.name}>{social.name}</span>
              <svg
                className={styles.arrow}
                width="20"
                height="20"
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
            </span>
            <span className={styles.handle}>{social.handle}</span>
            <QRCodeSVG
              className={styles.qrCode}
              value={social.url}
              size={180}
              level="M"
              marginSize={4}
              bgColor="#ffffff"
              fgColor="#000000"
              aria-hidden="true"
            />
            <span className={styles.action}>{social.name}でプロフィールを見る</span>
          </a>
        </li>
      ))}
    </ul>
  </section>
);
