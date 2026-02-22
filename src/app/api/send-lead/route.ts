import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { name, phone, niche } = data;

        if (!name || !phone || !niche) {
            return NextResponse.json(
                { message: 'Все поля обязательны для заполнения' },
                { status: 400 }
            );
        }

        const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
        const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

        if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
            console.error('Telegram токен или ID чата не настроены');
            return NextResponse.json(
                { message: 'Внутренняя ошибка сервера' },
                { status: 500 }
            );
        }

        const message = `
🔥 Новая заявка с сайта!
=====================
👤 Имя: ${name}
📞 Телефон: ${phone}
💼 Ниша: ${niche}
=====================
`;

        const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

        const response = await fetch(telegramApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'HTML',
            }),
        });

        if (!response.ok) {
            const errortext = await response.text();
            console.error('Ошибка отправки в Telegram:', errortext);
            throw new Error('Telegram API error');
        }

        return NextResponse.json({ message: 'Заявка успешно отправлена!' }, { status: 200 });
    } catch (error) {
        console.error('Ошибка в API send-lead:', error);
        return NextResponse.json(
            { message: 'Ошибка при отправке заявки' },
            { status: 500 }
        );
    }
}
