import { useTranslations } from 'next-intl';
import { siInstagram, siBehance, siVimeo } from 'simple-icons/icons';

export default function ContactPage() {
    const t = useTranslations('ContactPage');

    return (
        <main className="min-h-screen p-24 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>
            <p className="text-xl mb-12 text-zinc-600 dark:text-zinc-400">{t('getInTouch')}</p>

            <div className="space-y-6">
                <a href="mailto:zaetsuu@gmail.com" className="block p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                    <div className="text-sm text-zinc-500 mb-1">{t('email')}</div>
                    <div className="text-lg font-bold">zaetsuu@gmail.com</div>
                </a>

                <a href="https://t.me/zaetsu" target="_blank" rel="noopener noreferrer" className="block p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                    <div className="text-sm text-zinc-500 mb-1">{t('telegram')}</div>
                    <div className="text-lg font-bold">@zaetsu</div>
                </a>

                <div className="flex justify-center items-center gap-6 pt-8">
                    <a
                        href="https://instagram.com/zaetsuu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-[#E4405F] transition-colors"
                        aria-label="Instagram"
                    >
                        <svg role="img" viewBox="0 0 24 24" className="w-8 h-8 fill-current" style={{ width: '30px', height: '30px' }} xmlns="http://www.w3.org/2000/svg">
                            <path d={siInstagram.path} />
                        </svg>
                    </a>
                    <a
                        href="https://behance.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-[#1769FF] transition-colors"
                        aria-label="Behance"
                    >
                        <svg role="img" viewBox="0 0 24 24" className="fill-current" style={{ width: '42px', height: '42px' }} xmlns="http://www.w3.org/2000/svg">
                            <path d={siBehance.path} />
                        </svg>
                    </a>
                    <a
                        href="https://vimeo.com/zaetsu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-[#1AB7EA] transition-colors"
                        aria-label="Vimeo"
                    >
                        <svg role="img" viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
                            <path d={siVimeo.path} />
                        </svg>
                    </a>
                </div>
            </div>
        </main>
    );
}
