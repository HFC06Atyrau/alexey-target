import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerLogo}></div>
                <div className={styles.footerText}>© 2025 Все права защищены. Таргетолог Казахстан.</div>
                <div className={styles.footerLinks}>
                    <a href="#cases">Кейсы</a>
                    <a href="#services">Тарифы</a>
                    <a href="#contact">Контакты</a>
                </div>
            </div>
        </footer>
    );
}
