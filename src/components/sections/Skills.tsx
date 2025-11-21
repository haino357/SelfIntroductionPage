import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import type { SkillCategory as SkillCategoryType } from '../../types';
import styles from './Skills.module.css';

const skillsData: SkillCategoryType[] = [
    {
        category: 'フロントエンド',
        icon: 'fas fa-code',
        skills: [
            'HTML5 / CSS3 / JavaScript (ES6+)',
            'React / Vue.js / Next.js',
            'TypeScript',
            'Responsive Design',
            'CSS Frameworks (Tailwind, Bootstrap)',
        ],
    },
    {
        category: 'バックエンド',
        icon: 'fas fa-server',
        skills: [
            'Node.js / Express',
            'Python / Django',
            'REST API / GraphQL',
            'Database (MongoDB, PostgreSQL)',
            'Authentication & Security',
        ],
    },
    {
        category: 'ツール & その他',
        icon: 'fas fa-tools',
        skills: [
            'Git / GitHub',
            'CI/CD (GitHub Actions)',
            'Docker',
            'Figma / Adobe XD',
            'Performance Optimization',
        ],
    },
];

export const Skills: React.FC = () => {
    return (
        <section className="section" id="skills">
            <div className="container">
                <h2 className="section-title">スキルセット</h2>
                <div className={styles.skillsGrid}>
                    {skillsData.map((category, index) => (
                        <SkillCategory key={index} {...category} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const SkillCategory: React.FC<SkillCategoryType> = ({ category, icon, skills }) => {
    const { elementRef, isVisible } = useIntersectionObserver();

    return (
        <div
            ref={elementRef}
            className={`${styles.skillCategory} ${isVisible ? 'fade-in' : ''}`}
        >
            <h3>
                <i className={icon}></i> {category}
            </h3>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};
