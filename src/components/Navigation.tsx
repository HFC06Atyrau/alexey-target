'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.logo}></div>

            <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.open : ''}`}>
                <li><a href="#cases" onClick={(e) => scrollToSection(e, 'cases')}>Кейсы</a></li>
                <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Тарифы</a></li>
                <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>Обо мне</a></li>
                <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Контакты</a></li>
            </ul>

            <a href="#contact" className={styles.navCta} onClick={(e) => scrollToSection(e, 'contact')}>
                Обсудить проект
            </a>

            <button
                className={styles.mobileMenuBtn}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    );
}
