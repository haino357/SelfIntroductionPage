import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import type { LinkItem } from '../../types';
import styles from './Links.module.css';

const linksData: LinkItem[] = [
    {
        id: 1,
        title: 'GitHub',
        description: '開発したプロジェクトやオープンソースへの貢献',
        url: 'https://github.com/haino357',
        icon: 'fab fa-github',
        category: 'Development',
    },
    {
        id: 2,
        title: 'X',
        description: '技術情報や日々の活動を発信',
        url: 'https://x.com/hai_haino',
        icon: 'fab fa-x',
        category: 'Social',
    },
    {
        id: 3,
        title: 'はてなブログ',
        description: '読書記録などを記録',
        url: 'https://hai-haino.hatenablog.com/',
        icon: 'fas fa-edit',
        category: 'Blog',
    },
    {
        id: 4,
        title: 'Qiita',
        description: '技術記事の投稿・共有',
        url: 'https://qiita.com/hai_haino',
        icon: 'fas fa-book',
        category: 'Tech Blog',
    },
    {
        id: 5,
        title: 'Zenn',
        description: 'エンジニアのための情報発信',
        url: 'https://zenn.dev/haitak',
        icon: 'fas fa-feather-alt',
        category: 'Tech Blog',
    },
    {
        id: 6,
        title: 'Note',
        description: '個人的な思考や学びの記録',
        url: 'https://note.com/hainote',
        icon: 'fas fa-pencil-alt',
        category: 'Blog',
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
