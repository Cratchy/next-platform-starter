import VimeoPlayer from '@/components/ui/VimeoPlayer';
import SoftwareBadge from '@/components/ui/SoftwareBadge';
import ContributionBadge from '@/components/ui/ContributionBadge';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import { getLocale, getTranslations } from 'next-intl/server';
import { getChannelStats, formatSubscriberCount } from '@/lib/youtube';
import { Project } from '@/data/projects';
import ChannelInfoBar from '@/components/ui/ChannelInfoBar';

async function ChannelInfoBarWrapper({ project, locale }: { project: Project, locale: 'ru' | 'en' }) {
    let subscriberCount = project.channelInfo?.subscribers[locale] || '';

    if (project.channelInfo?.youtubeHandle) {
        const stats = await getChannelStats(project.channelInfo.youtubeHandle);
        if (stats?.subscriberCount) {
            subscriberCount = formatSubscriberCount(stats.subscriberCount, locale);
        }
    }

    if (!project.channelInfo) return null;

    return (
        <ChannelInfoBar
            name={project.channelInfo.name}
            url={project.channelInfo.url}
            profilePicture={project.channelInfo.profilePicture}
            subscriberCount={subscriberCount}
        />
    );
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const locale = await getLocale() as 'ru' | 'en';
    const t = await getTranslations('Project');

    const project = projects.find(p => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen p-4 sm:p-6 md:p-12 lg:p-24 max-w-4xl mx-auto pt-20 sm:pt-24 md:pt-32">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">{project.title[locale]}</h1>
            <div className="flex flex-wrap gap-2 sm:gap-4 text-sm sm:text-base text-zinc-500 mb-6 sm:mb-8">
                <span>{project.client[locale]}</span>
                <span>•</span>
                <span>{project.year}</span>
                <span>•</span>
                <span className="wrap-break-word">{project.tags.join(', ')}</span>
            </div>

            <div className="aspect-video bg-black w-full mb-6 sm:mb-8 md:mb-12 rounded-xl overflow-hidden">
                <VimeoPlayer videoUrl={project.videoUrl} />
            </div>

            {project.channelInfo && (
                <ChannelInfoBarWrapper project={project} locale={locale} />
            )}

            <div className="grid max-md:grid-cols-1 grid-cols-[minmax(0,3fr)_minmax(0,1fr)] gap-6 sm:gap-8 md:gap-12">
                <div className="md:col-span-2 space-y-6 sm:space-y-8">
                    <section>
                        <h3 className="text-lg sm:text-xl font-bold mb-2">{t('Task')}</h3>
                        <p className="text-base sm:text-lg leading-relaxed">{project.task[locale]}</p>
                    </section>
                    <section>
                        <h3 className="text-lg sm:text-xl font-bold mb-2">{t('Description')}</h3>
                        <div className="text-base sm:text-lg leading-relaxed space-y-3">
                            {project.description[locale].split('\n').map((line, index) => {
                                const trimmedLine = line.trim();
                                // Check if line starts with bullet point
                                if (trimmedLine.startsWith('•') || trimmedLine.startsWith('-')) {
                                    return (
                                        <div key={index} className="flex gap-3 items-start">
                                            <span className="text-blue-500 font-bold shrink-0">•</span>
                                            <span className="flex-1">{trimmedLine.substring(1).trim()}</span>
                                        </div>
                                    );
                                }
                                // Regular paragraph
                                return trimmedLine ? (
                                    <p key={index}>{trimmedLine}</p>
                                ) : null;
                            })}
                        </div>
                    </section>
                    {project.contribution && (
                        <section>
                            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{t('Contribution')}</h3>
                            <div className="space-y-2 sm:space-y-3">
                                {project.contribution[locale].map((item, index) => (
                                    <ContributionBadge key={index} text={item} />
                                ))}
                            </div>
                        </section>
                    )}
                    <section>
                        <h3 className="text-lg sm:text-xl font-bold mb-2">{t('Software')}</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {project.software[locale].map(s => (
                                <SoftwareBadge key={s} name={s} />
                            ))}
                        </div>
                    </section>
                </div>
                <div className="space-y-4 sm:space-y-6">
                    <div>
                        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-500 mb-2">{t('Role')}</h3>
                        <ul className="space-y-1 text-sm sm:text-base">
                            {project.role[locale].map(r => (
                                <li key={r}>{r}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
