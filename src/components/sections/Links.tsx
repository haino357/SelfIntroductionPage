import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import type { LinkItem } from '../../types';
import styles from './Links.module.css';

const linksData: LinkItem[] = [
    {
        id: 1,
        title: 'GitHub',
        description: '開発したプロジェクトやオープンソースへの貢献',
        url: 'https://github.com/',
        icon: 'fab fa-github',
        category: 'Development',
    },
    {
        id: 2,
        title: 'Twitter',
        description: '技術情報や日々の活動を発信',
        url: 'https://twitter.com/',
        icon: 'fab fa-twitter',
        category: 'Social',
    },
    {
        id: 3,
        title: 'LinkedIn',
        description: 'プロフェッショナルなネットワーク',
        url: 'https://linkedin.com/',
        icon: 'fab fa-linkedin',
        category: 'Professional',
    },
    {
        id: 4,
        title: 'Qiita',
        description: '技術記事の投稿・共有',
        url: 'https://qiita.com/',
        icon: 'fas fa-book',
        category: 'Tech Blog',
    },
    {
        id: 5,
        title: 'Zenn',
        description: 'エンジニアのための情報発信',
        url: 'https://zenn.dev/',
        icon: 'fas fa-feather-alt',
        category: 'Tech Blog',
    },
    {
        id: 6,
        title: 'Note',
        description: '個人的な思考や学びの記録',
        url: 'https://note.com/',
        icon: 'fas fa-pencil-alt',
        category: 'Blog',
    },
    {
        id: 7,
        title: 'CodePen',
        description: 'フロントエンド実験の場',
        url: 'https://codepen.io/',
        icon: 'fab fa-codepen',
        category: 'Development',
    },
    {
        id: 8,
        title: 'Dribbble',
        description: 'デザイン作品の公開',
        url: 'https://dribbble.com/',
        icon: 'fab fa-dribbble',
        category: 'Design',
    },
];

export const Links: React.FC = () => {
    return (
        <section className="section" id="links">
            <div className="container">
                <h2 className="section-title">リンク集</h2>
                <p className={styles.sectionDescription}>
                    日々の活動や情報発信をしているプラットフォームです
                </p>
                <div className={styles.linksGrid}>
                    {linksData.map((link) => (
                        <LinkCard key={link.id} {...link} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const LinkCard: React.FC<LinkItem> = ({ title, description, url, icon, category }) => {
    const { elementRef, isVisible } = useIntersectionObserver();

    return (
        <a
            ref={elementRef as unknown as React.RefObject<HTMLAnchorElement>}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.linkCard} ${isVisible ? 'fade-in' : ''}`}
        >
            <div className={styles.linkIcon}>
                <i className={icon}></i>
            </div>
            <div className={styles.linkContent}>
                <div className={styles.linkHeader}>
                    <h3>{title}</h3>
                    <span className={styles.category}>{category}</span>
                </div>
                <p>{description}</p>
                <div className={styles.linkArrow}>
                    <i className="fas fa-arrow-right"></i>
                </div>
            </div>
        </a>
    );
};
