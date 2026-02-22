'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

import styles from './AboutSection.module.css';

const skills = [
    { name: 'Написание офферов', progress: 95 },
    { name: 'Сценарии для креативов', progress: 90 },
    { name: 'Рекламные тексты', progress: 95 },
    { name: 'Аналитика и оптимизация', progress: 85 }
];

export default function AboutSection() {
    const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const loadGSAP = async () => {
            const gsap = (await import('gsap')).default;
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');
            gsap.registerPlugin(ScrollTrigger);

            skillRefs.current.forEach((bar, i) => {
                if (bar) {
                    gsap.to(bar, {
                        width: `${skills[i].progress}%`,
                        duration: 1.5,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: bar,
                            start: "top 90%"
                        }
                    });
                }
            });

            gsap.fromTo('.about-content',
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: '.about-content',
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        };
        loadGSAP();
    }, []);

    return (
        <section className={styles.about} id="about">
            <div className={`${styles.aboutContent} about-content`}>
                <div className={styles.aboutText}>
                    <div className="section-label">Обо мне</div>
                    <h2 className={styles.aboutTitle}>
                        Алексей<br />Таргетолог с фокусом на результат
                    </h2>
                    <p className={styles.aboutDescription}>
                        3 года на рынке Казахстана. Начинал с простых запусков - сейчас строю воронки, которые помогают привлекать платежеспособную аудиторию.
                    </p>
                    <p className={styles.aboutDescription}>
                        Главное оружие - офферы, сценарии и рекламные тексты, которые не просто цепляют внимание, а заставляют людей оставлять заявки. Красивые метрики - это хорошо. Но ваша выручка  важнее. На неё и ориентируюсь.
                    </p>

                    <div className={styles.skillsGrid}>
                        {skills.map((skill, index) => (
                            <div key={index} className={styles.skillItem}>
                                <div className={styles.skillName}>{skill.name}</div>
                                <div className={styles.skillBar}>
                                    <div
                                        ref={el => { skillRefs.current[index] = el; }}
                                        className={styles.skillProgress}
                                        style={{ width: '0%' }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.aboutImage}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/about-photo.jpg"
                            alt="Алексей - Таргетолог"
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className={styles.experienceBadge}>
                        <div className={styles.experienceNumber}>3+</div>
                        <div className={styles.experienceText}>года опыта</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
