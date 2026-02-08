import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import VimeoPlayer from '@/components/ui/VimeoPlayer';

export default function HomePage() {
    const t = useTranslations('HomePage');

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24">
            <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
            <div className="text-center w-full max-w-6xl">
                <p className="text-2xl font-bold mb-4">{t('hero.name')}</p>
                <p className="text-lg text-gray-500">{t('hero.role')}</p>
                <div className="mt-8 mb-8 w-full mx-auto">
                    <div className="aspect-video w-full rounded-lg overflow-hidden">
                        <VimeoPlayer videoUrl="https://vimeo.com/1138602695" className="w-full h-full" />
                    </div>
                </div>
                <div className="mt-8 flex gap-4 justify-center">
                    <Link
                        href="/projects"
                        className="px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black rounded-full font-medium hover:opacity-90 transition-opacity"
                    >
                        {t('buttons.projects')}
                    </Link>
                    <Link
                        href="/contact"
                        className="px-6 py-3 border border-zinc-200 dark:border-zinc-800 rounded-full font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                    >
                        {t('buttons.contact')}
                    </Link>
                </div>
            </div>
        </main>
    );
}
