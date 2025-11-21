import React from 'react';
import { Button } from '../common/Button';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
    return (
        <section className={`${styles.hero} section`} id="home">
            <div className="container">
                <div className={styles.heroContent}>
                    <p className={styles.heroSubtitle}>Freelance Web Developer</p>
                    <h1 className={styles.heroTitle}>
                        あなたのアイデアを<br />デジタル体験に
                    </h1>
                    <p className={styles.heroDescription}>
                        最新のWeb技術を駆使して、ユーザーを魅了する<br />
                        美しく機能的なWebサイトを創造します
                    </p>
                    <div className={styles.ctaButtons}>
                        <Button href="#portfolio" icon="fas fa-briefcase">
                            実績を見る
                        </Button>
                        <Button href="#contact" variant="outline" icon="fas fa-envelope">
                            お問い合わせ
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
