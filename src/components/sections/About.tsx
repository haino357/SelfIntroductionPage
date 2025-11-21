import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './About.module.css';

export const About: React.FC = () => {
    const { elementRef, isVisible } = useIntersectionObserver();

    return (
        <section className={`${styles.about} section`} id="about" ref={elementRef}>
            <div className="container">
                <div className={`${styles.aboutContent} ${isVisible ? 'fade-in' : ''}`}>
                    <div className={styles.aboutImage}>
                        <img src="/images/profile.png" alt="プロフィール画像" />
                    </div>
                    <div className={styles.aboutText}>
                        <h2>About Me</h2>
                        <p>
                            こんにちは!フリーランスのWeb開発者として、クライアントのビジネスを成功に導くデジタルソリューションを提供しています。
                        </p>
                        <p>
                            5年以上の経験を持ち、HTML、CSS、JavaScriptをはじめとする最新のWeb技術に精通しています。ユーザーエクスペリエンスを第一に考え、パフォーマンスとデザインの両立を追求しています。
                        </p>
                        <p>
                            レスポンシブデザイン、アクセシビリティ、SEO最適化を重視し、すべてのプロジェクトで高品質な成果物をお届けします。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
