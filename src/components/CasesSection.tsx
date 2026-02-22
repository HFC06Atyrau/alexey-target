'use client';

import { useEffect } from 'react';
import { ShieldCheck, Sparkles, Plane, Globe, Lock } from 'lucide-react';
import styles from './CasesSection.module.css';

const cases = [
    {
        icon: <ShieldCheck size={32} color="#d4af37" />,
        category: 'Детейлинг',
        title: 'Оклейка бронеплёнкой (PPF)',
        location: 'Алматы',
        metrics: [
            { value: '1336%', label: 'ROAS' },
            { value: '$3.26', label: 'Цена лида' },
            { value: '701', label: 'Переписок' },
            { value: '15.3M ₸', label: 'Выручка' }
        ],
        description: 'Запуск с нуля под одну маржинальную услугу. Воронка: WhatsApp → консультация → запись. Не распылялись на полировку/химию - фокус на PPF.',
        tags: ['Запуск с нуля', 'WhatsApp', '3 месяца']
    },
    {
        icon: <Sparkles size={32} color="#d4af37" />,
        category: 'Детейлинг',
        title: 'Полный комплекс услуг',
        location: 'Атырау',
        metrics: [
            { value: '2950', label: 'Заявок за 2 года' },
            { value: '$2.79', label: 'Цена заявки' },
            { value: '120', label: 'В месяц' },
            { value: '2.5×', label: 'Снижение CPL' }
        ],
        description: 'Снизил стоимость заявки с $7.07 до $2.79. Перевёл с "кликов" на "переписки". Стабильный поток без "качелей" 24 месяца подряд.',
        tags: ['Долгосрочка', 'Оптимизация', 'Видео-креативы']
    },
    {
        icon: <Plane size={32} color="#d4af37" />,
        category: 'Туризм',
        title: 'Турагентство',
        location: 'Караганда',
        metrics: [
            { value: '3482', label: 'Переписок' },
            { value: '$1.31', label: 'Цена лида' },
            { value: '3', label: 'Канала' },
            { value: '20 мес.', label: 'Работаем' }
        ],
        description: 'Воронка в 3 канала: Лид-формы + WhatsApp + Direct. Разделение по странам (Египет, Таиланд, ОАЭ). Адаптация под сезонность.',
        tags: ['Мультиканал', 'Сезонность', 'Лид-формы']
    },
    {
        icon: <Globe size={32} color="#d4af37" />,
        category: 'Туризм',
        title: 'Турагентство',
        location: 'Астана',
        metrics: [
            { value: '8617', label: 'Переписок' },
            { value: '$1.11', label: 'Цена лида' },
            { value: '$9557', label: 'Бюджет' },
            { value: '1:15', label: 'Конверсия' }
        ],
        description: 'Запуск с нуля. Direct + WhatsApp. Средняя конверсия 1 продажа на 15 переписок. Система работает стабильно.',
        tags: ['С нуля', 'Direct', 'Масштаб']
    },
    {
        icon: <Lock size={32} color="#d4af37" />,
        category: 'Авто',
        title: 'Pandora - сигнализации',
        location: 'Караганда',
        metrics: [
            { value: '911', label: 'Переписок' },
            { value: '$1.72', label: 'Цена лида' },
            { value: '$1568', label: 'Бюджет' },
            { value: '4 мес.', label: 'Период' }
        ],
        description: 'Запуск с нуля без Instagram-страницы. Создание профиля + таргет одновременно. Локальный гео-таргетинг на Караганду.',
        tags: ['С нуля', 'Локальный бизнес', 'WhatsApp']
    }
];

export default function CasesSection() {
    useEffect(() => {
        const loadGSAP = async () => {
            const gsap = (await import('gsap')).default;
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');
            gsap.registerPlugin(ScrollTrigger);

            gsap.utils.toArray('.case-card').forEach((card: unknown, i: number) => {
                gsap.fromTo(card as Element,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: i * 0.1,
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
        <section className={styles.cases} id="cases">
            <div className="section-header">
                <div className="section-label">Кейсы</div>
                <h2 className="section-title">Кейсы, которые говорят громче обещаний.</h2>
                <p className="section-subtitle">
                    Товары, услуги, разные ниши - каждый результат построен на системной работе, а не на удаче
                </p>
            </div>

            <div className={styles.casesGrid}>
                {cases.map((caseItem, index) => (
                    <div key={index} className={`${styles.caseCard} case-card`}>
                        <div className={styles.caseIcon}>{caseItem.icon}</div>
                        <div className={styles.caseHeader}>
                            <div className={styles.caseCategory}>{caseItem.category}</div>
                            <h3 className={styles.caseTitle}>{caseItem.title}</h3>
                            <div className={styles.caseLocation}>📍 {caseItem.location}</div>
                        </div>

                        <div className={styles.caseMetrics}>
                            {caseItem.metrics.map((metric, mIndex) => (
                                <div key={mIndex} className={styles.metric}>
                                    <span className={styles.metricValue}>{metric.value}</span>
                                    <span className={styles.metricLabel}>{metric.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className={styles.caseFooter}>
                            <p className={styles.caseDescription}>{caseItem.description}</p>
                            <div className={styles.caseTags}>
                                {caseItem.tags.map((tag, tIndex) => (
                                    <span key={tIndex} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
