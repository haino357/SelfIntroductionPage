import React from 'react';
import { useScrollEffect } from '../../hooks/useScrollEffect';
import { useMobileMenu } from '../../hooks/useMobileMenu';
import styles from './Header.module.css';

export const Header: React.FC = () => {
    const scrolled = useScrollEffect();
    const { isOpen, toggle, close } = useMobileMenu();

    const handleLinkClick = () => {
        close();
    };

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} id="header">
            <nav className="container">
                <div className={styles.navContent}>
                    <div className={styles.logo}>YourName</div>
                    <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
                        <li><a href="#home" onClick={handleLinkClick}>ホーム</a></li>
                        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                        <li><a href="#skills" onClick={handleLinkClick}>スキル</a></li>
                        <li><a href="#portfolio" onClick={handleLinkClick}>実績</a></li>
                        <li><a href="#contact" onClick={handleLinkClick}>お問い合わせ</a></li>
                    </ul>
                    <div className={styles.mobileToggle} onClick={toggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </header>
    );
};
