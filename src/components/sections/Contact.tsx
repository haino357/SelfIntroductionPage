import React, { useState } from 'react';
import type { ContactFormData, SocialLink } from '../../types';
import styles from './Contact.module.css';

const socialLinks: SocialLink[] = [
    { name: 'GitHub', url: '#', icon: 'fab fa-github', ariaLabel: 'GitHub' },
    { name: 'Twitter', url: '#', icon: 'fab fa-twitter', ariaLabel: 'Twitter' },
    { name: 'LinkedIn', url: '#', icon: 'fab fa-linkedin', ariaLabel: 'LinkedIn' },
    { name: 'CodePen', url: '#', icon: 'fab fa-codepen', ariaLabel: 'CodePen' },
];

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('すべてのフィールドを入力してください。');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('有効なメールアドレスを入力してください。');
            return;
        }

        alert(
            `お問い合わせありがとうございます、${formData.name}様！\n\n※ このフォームはデモンストレーション用です。実際の送信には、バックエンドサービスやメールAPIの統合が必要です。`
        );

        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="section" id="contact">
            <div className="container">
                <h2 className="section-title">お問い合わせ</h2>
                <div className={styles.contactContent}>
                    <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                        プロジェクトのご相談やお見積もりなど、お気軽にお問い合わせください
                    </p>
                    <div className={styles.contactGrid}>
                        <form className={styles.contactForm} onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">お名前</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">メールアドレス</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message">メッセージ</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className={styles.submitBtn}>
                                <i className="fas fa-paper-plane"></i> 送信する
                            </button>
                        </form>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <i className="fas fa-envelope"></i>
                                <div>
                                    <h4>Email</h4>
                                    <p>your.email@example.com</p>
                                </div>
                            </div>
                            <div className={styles.contactItem}>
                                <i className="fas fa-map-marker-alt"></i>
                                <div>
                                    <h4>Location</h4>
                                    <p>Tokyo, Japan</p>
                                </div>
                            </div>
                            <div className={styles.contactItem}>
                                <i className="fas fa-clock"></i>
                                <div>
                                    <h4>対応時間</h4>
                                    <p>平日 9:00 - 18:00</p>
                                </div>
                            </div>
                            <div className={styles.socialLinks}>
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        className={styles.socialLink}
                                        aria-label={link.ariaLabel}
                                    >
                                        <i className={link.icon}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
