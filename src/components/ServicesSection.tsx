'use client';

import { useEffect } from 'react';
import styles from './ServicesSection.module.css';

const services = [
    {
        icon: '📱',
        title: 'Instagram',
        description: 'Полное ведение рекламы в Instagram. Подходит для большинства ниш в Казахстане.',
        price: '200 000 ₸',
        period: 'в месяц',
        features: [
            'Создание креативов',
            'Настройка и оптимизация',
            'WhatsApp/Direct/Лид-формы',
            'Еженедельная отчётность'
        ],
        popular: false
    },
    {
        icon: '🚀',
        title: 'Instagram + TikTok',
        description: 'Максимальный охват через два основных канала. Рекомендую для масштабирования.',
        price: '270 000 ₸',
        period: 'в месяц',
        features: [
            'Всё из пакета Instagram',
            'Адаптация под TikTok',
            'Видео-креативы (Reels/Shorts)',
            'Cross-постинг'
        ],
        popular: true
    },
    {
        icon: '🎬',
        title: 'Полный охват',
        description: 'Все три платформы для максимального присутствия. Для серьёзного масштаба.',
        price: '350 000 ₸',
        period: 'в месяц',
        features: [
            'Instagram + TikTok + YouTube',
            'Видео под каждую платформу',
            'Комплексная стратегия',
            'Приоритетная поддержка'
        ],
        popular: false
    }
];

export default function ServicesSection() {
    useEffect(() => {
        const loadGSAP = async () => {
            const gsap = (await import('gsap')).default;
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');
            gsap.registerPlugin(ScrollTrigger);

            gsap.utils.toArray('.service-card').forEach((card: unknown, i: number) => {
                gsap.fromTo(card as Element,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: i * 0.15,
                        scrollTrigger: {
                            trigger: card as Element,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
        };
        loadGSAP();
    }, []);

    return (
        <section className={styles.services} id="services">
            <div className="section-header">
                <div className="section-label">Тарифы</div>
                <h2 className="section-title">Выберите подходящий формат генерации лидов</h2>
                <div className="section-subtitle">
                    <div>Все тарифы включают полное ведение рекламы, креативы и еженедельную отчётность.</div>
                </div>
            </div>

            <div className={styles.servicesGrid}>
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`${styles.serviceCard} ${service.popular ? styles.popular : ''} service-card`}
                    >
                        {service.popular && (
                            <div className={styles.popularBadge}>Популярный</div>
                        )}
                        <div className={styles.serviceIcon}>{service.icon}</div>
                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                        <p className={styles.serviceDescription}>{service.description}</p>
                        <div className={styles.servicePrice}>{service.price}</div>
                        <div className={styles.servicePeriod}>{service.period}</div>
                        <ul className={styles.serviceFeatures}>
                            {service.features.map((feature, fIndex) => (
                                <li key={fIndex}>{feature}</li>
                            ))}
                        </ul>
                        <a href="#contact" className={styles.selectButton}>Выбрать тариф</a>
                    </div>
                ))}
            </div>

            <div className={styles.testBanner}>
                <div className={styles.testContent}>
                    <div className="section-label">Тестовый период</div>
                    <h3 className={styles.testTitle}>
                        Проверим связки и получим первые заявки<br />всего за 2 недели
                    </h3>
                    <div className={styles.testPrice}>100 000 ₸</div>
                    <p className={styles.testDescription}>
                        Начните с теста - получите реальных клиентов.<br />
                        Всё устроит - продолжим
                    </p>
                    <a href="#contact" className="btn-primary">Начать тест</a>
                </div>
            </div>
        </section>
    );
}
