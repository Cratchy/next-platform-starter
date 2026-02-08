import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { projects } from '@/data/projects';
import { getLocale } from 'next-intl/server';
import Image from 'next/image';

export default async function ProjectsPage() {
    const t = await getTranslations('Navigation');
    const locale = await getLocale();

    return (
        <main className="min-h-screen p-4 sm:p-6 md:p-12 lg:p-24 pt-20 sm:pt-24 md:pt-32">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12">{t('projects')}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {projects.map((project) => (
                    <Link href={`/projects/${project.id}`} key={project.id} className="group block">
                        <div className="aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-lg overflow-hidden mb-3 sm:mb-4 relative">
                            <Image
                                src={project.thumbnail}
                                alt={project.title[locale as 'ru' | 'en']}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div >
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold group-hover:text-blue-500 transition-colors mb-1 sm:mb-2">
                            {project.title[locale as 'ru' | 'en']}
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                            {project.tags.join(', ')}
                        </p>
                    </Link >
                ))}
            </div >
        </main >
    );
}
