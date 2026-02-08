'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useTransition } from 'react';
import { clsx } from 'clsx';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const switchLocale = (nextLocale: string) => {
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <div className="flex items-center gap-2 text-sm font-medium">
            <button
                onClick={() => switchLocale('ru')}
                disabled={isPending}
                className={clsx(
                    'transition-colors hover:text-zinc-900 dark:hover:text-white',
                    locale === 'ru'
                        ? 'text-zinc-900 dark:text-white'
                        : 'text-zinc-400 dark:text-zinc-600'
                )}
            >
                RU
            </button>
            <span className="text-zinc-300 dark:text-zinc-700">/</span>
            <button
                onClick={() => switchLocale('en')}
                disabled={isPending}
                className={clsx(
                    'transition-colors hover:text-zinc-900 dark:hover:text-white',
                    locale === 'en'
                        ? 'text-zinc-900 dark:text-white'
                        : 'text-zinc-400 dark:text-zinc-600'
                )}
            >
                EN
            </button>
        </div>
    );
}
