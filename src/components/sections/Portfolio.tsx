import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import type { Project } from '../../types';
import styles from './Portfolio.module.css';

const portfolioData: Project[] = [
    {
        id: 1,
        title: 'コーポレートサイト',
        description: '最新のWebデザインとSEO対策を施した企業サイトの制作',
        tags: ['HTML/CSS', 'JavaScript', 'Responsive'],
        icon: 'fas fa-globe',
    },
    {
        id: 2,
        title: 'ECサイト',
        description: '使いやすいUIと高速なパフォーマンスを実現したオンラインストア',
        tags: ['React', 'Node.js', 'MongoDB'],
        icon: 'fas fa-shopping-cart',
    },
    {
        id: 3,
        title: 'Webアプリケーション',
        description: '直感的なインターフェースを持つモダンなWebアプリの開発',
        tags: ['Vue.js', 'TypeScript', 'API'],
        icon: 'fas fa-mobile-alt',
    },
    {
        id: 4,
        title: 'ランディングページ',
        description: 'コンバージョン最適化されたインパクトのあるLPデザイン',
        tags: ['HTML/CSS', 'Animation', 'SEO'],
        icon: 'fas fa-paint-brush',
    },
    {
        id: 5,
        title: 'ダッシュボード',
        description: 'データ可視化とリアルタイム更新を備えた管理画面',
        tags: ['React', 'Chart.js', 'WebSocket'],
        icon: 'fas fa-chart-line',
    },
    {
        id: 6,
        title: 'ブログプラットフォーム',
        description: 'CMSとSEO対策を統合したブログシステムの構築',
        tags: ['Next.js', 'Markdown', 'CMS'],
        icon: 'fas fa-blog',
    },
];

export const Portfolio: React.FC = () => {
    return (
        <section className={`${styles.portfolio} section`} id="portfolio">
            <div className="container">
                <h2 className="section-title">実績紹介</h2>
                <div className={styles.portfolioGrid}>
                    {portfolioData.map((project) => (
                        <PortfolioItem key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const PortfolioItem: React.FC<Project> = ({ title, description, tags, icon }) => {
    const { elementRef, isVisible } = useIntersectionObserver();

    return (
        <div
            ref={elementRef}
            className={`${styles.portfolioItem} ${isVisible ? 'fade-in' : ''}`}
        >
            <div className={styles.portfolioImage}>
                <i className={icon}></i>
            </div>
            <div className={styles.portfolioContent}>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className={styles.portfolioTags}>
                    {tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
