'use client';

import { useState } from 'react';
import styles from './LeadForm.module.css';

export default function LeadForm() {
    const [status, setStatus] = useState<{
        type: 'idle' | 'loading' | 'success' | 'error';
        message: string;
    }>({ type: 'idle', message: '' });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: '' });

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            niche: formData.get('niche'),
        };

        try {
            const response = await fetch('/api/send-lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus({
                    type: 'success',
                    message: 'Заявка успешно отправлена! Я свяжусь с вами в ближайшее время.',
                });
                (e.target as HTMLFormElement).reset();
            } else {
                const result = await response.json();
                setStatus({
                    type: 'error',
                    message: result.message || 'Произошла ошибка при отправке.',
                });
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Ошибка сети. Попробуйте еще раз позже.',
            });
        }
    };

    return (
        <div className={styles.formWrapper}>
            <h3 className={styles.formTitle}>Обсудить проект</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Ваше имя *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className={styles.input}
                        placeholder="Алексей"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.label}>Номер телефона (или Telegram) *</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        required
                        className={styles.input}
                        placeholder="+7 (999) 000-00-00"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="niche" className={styles.label}>Ниша вашего бизнеса *</label>
                    <input
                        type="text"
                        id="niche"
                        name="niche"
                        required
                        className={styles.input}
                        placeholder="Например: Недвижимость"
                    />
                </div>

                <button
                    type="submit"
                    disabled={status.type === 'loading'}
                    className={styles.submitBtn}
                >
                    {status.type === 'loading' ? 'Отправка...' : 'Оставить заявку'}
                </button>

                {status.message && (
                    <div className={`${styles.message} ${styles[status.type]}`}>
                        {status.message}
                    </div>
                )}
            </form>
        </div>
    );
}
