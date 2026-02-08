import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from '@/components/features/LanguageSwitcher';

export default function Header() {
    const t = useTranslations('Navigation');

    return (
        <header className="w-full py-4 sm:py-6 px-4 sm:px-6 md:px-8 flex justify-between items-center fixed top-0 left-0 z-[100] backdrop-blur-sm bg-white/30 dark:bg-black/30">
            <div className="font-bold text-lg sm:text-xl tracking-tighter">
                <Link href="/">Daniel Zaetsu</Link>
            </div>
            <nav className="flex gap-4 sm:gap-6 md:gap-8 items-center text-sm sm:text-base">
                <Link href="/" className="hidden md:inline hover:opacity-70 transition-opacity">{t('home')}</Link>
                <Link href="/projects" className="hover:opacity-70 transition-opacity">{t('projects')}</Link>
                <Link href="/contact" className="hover:opacity-70 transition-opacity">{t('contact')}</Link>
            </nav>
            <div className="flex items-center gap-4">
                <LanguageSwitcher />
            </div>
        </header>
    );
}
