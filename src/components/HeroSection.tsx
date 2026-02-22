'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styles from './HeroSection.module.css';

const Hero3DElement = dynamic(() => import('./Hero3DElement'), {
    ssr: false,
    loading: () => <div className={styles.loader}></div>
});

export default function HeroSection() {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const loadGSAP = async () => {
            const gsap = (await import('gsap')).default;
            const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
            gsap.registerPlugin(ScrollTrigger);

            gsap.from(".hero-badge", { opacity: 0, y: 30, duration: 1, delay: 0.2 });
            gsap.from(".hero-title", { opacity: 0, y: 50, duration: 1, delay: 0.4 });
            gsap.from(".hero-subtitle", { opacity: 0, y: 30, duration: 1, delay: 0.6 });
            gsap.from(".hero-stats", { opacity: 0, y: 30, duration: 1, delay: 0.8 });
            gsap.from(".hero-cta", { opacity: 0, y: 30, duration: 1, delay: 1 });
            gsap.from(".hero-visual", { opacity: 0, x: 50, duration: 1.2, delay: 0.6 });
            // gsap.from(".hero-3d", { opacity: 0, scale: 0.8, duration: 1.5, delay: 0.2 });
        };
        loadGSAP();
    }, []);

    return (
        <section className={styles.hero} ref={heroRef}>
            <div className={styles.heroBg}></div>

            {/* 3D Geometric Decorations */}
            <div className={`${styles.geoDecorations} hero-3d`}>
                <Hero3DElement />
            </div>


            <div className={styles.heroContent}>
                <div className={styles.heroText}>
                    <div className={`${styles.heroBadge} hero-badge`}>
                        <span className={styles.badgeDot}></span>
                        Доступен для новых проектов
                    </div>

                    <h1 className={`${styles.heroTitle} hero-title`}>
                        Таргетолог с <span className={styles.gradientText}>результатом</span>, а не обещаниями
                    </h1>

                    <p className={`${styles.heroSubtitle} hero-subtitle`}>
                        3 года на рынке Казахстана. 30+ ниш. ROAS до 1336%. <span className={styles.noWrap}>Запускаю рекламу, которая приносит деньги, а не просто клики.</span>
                    </p>

                    <div className={`${styles.heroStats} hero-stats`}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>30+</span>
                            <span className={styles.statLabel}>проектов</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>$100K+</span>
                            <span className={styles.statLabel}>бюджетов</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>1336%</span>
                            <span className={styles.statLabel}>макс. ROAS</span>
                        </div>
                    </div>

                    <div className={`${styles.heroCtaGroup} hero-cta`}>
                        <a href="#contact" className="btn-primary">
                            Обсудить ваш проект
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="#cases" className="btn-secondary">Смотреть кейсы</a>
                    </div>

                    <div className={styles.leadMagnet}>
                        <div className={styles.leadMagnetIcon}>🎁</div>
                        <div className={styles.leadMagnetContent}>
                            <div className={styles.leadMagnetTitle}>Бесплатный аудит вашего рекламного кабинета</div>
                            <div className={styles.leadMagnetText}>Получите разбор текущих кампаний и рекомендации по оптимизации</div>
                        </div>
                        <a href="#contact" className={styles.leadMagnetBtn}>Получить</a>
                    </div>
                </div>

                <div className={`${styles.heroVisual} hero-visual`}>

                    <div className={styles.heroImageContainer}>
                        <Image
                            src="/hero-dashboard.jpg"
                            alt="Панель управления рекламой"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className={`${styles.floatingCard} ${styles.card1}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.cardIcon}>🎯</div>
                            <div className={styles.cardTitle}>Последний кейс</div>
                        </div>
                        <div className={styles.cardValue}>1336%</div>
                        <div className={styles.cardSubtext}>ROAS за 3 мес.</div>
                    </div>

                    <div className={`${styles.floatingCard} ${styles.card2}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.cardIcon}>💬</div>
                            <div className={styles.cardTitle}>Лидов привёл</div>
                        </div>
                        <div className={styles.cardValue}>8617</div>
                        <div className={styles.cardSubtext}>по $1.11 CPL</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

