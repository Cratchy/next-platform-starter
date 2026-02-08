export async function getChannelStats(handle: string) {

    try {
        // First resolve handle to channel ID if needed, or search
        // The simpler way for handles is using 'forHandle' parameter in channels list, 
        // but that might not be supported in all client libs.
        // Let's rely on the search or channels list with forHandle if available.
        // Actually, v3/channels supports 'forHandle'

        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=statistics&forHandle=${handle.replace('@', '')}&key=${"AIzaSyCnjFz4k3r8Ou5OtJbavc2Jv2dQT70Jleg"}`,
            { next: { revalidate: 3600 } } // Cache for 1 hour
        );

        if (!response.ok) {
            console.error('YouTube API error:', await response.text());
            return null;
        }

        const data = await response.json();

        if (!data.items?.[0]?.statistics) {
            return null;
        }

        return data.items[0].statistics;
    } catch (error) {
        console.error('Failed to fetch YouTube stats:', error);
        return null;
    }
}

export function formatSubscriberCount(count: string, locale: 'en' | 'ru'): string {
    const num = parseInt(count, 10);
    if (isNaN(num)) return count;

    if (locale === 'ru') {
        if (num >= 1000000) {
            return `${(num / 1000000).toFixed(2).replace('.', ',')} млн подписчиков`;
        }
        if (num >= 1000) {
            return `${(num / 1000).toFixed(1).replace('.', ',')} тыс. подписчиков`;
        }
        return `${num} подписчиков`;
    } else {
        if (num >= 1000000) {
            return `${(num / 1000000).toFixed(2)}M subscribers`;
        }
        if (num >= 1000) {
            return `${(num / 1000).toFixed(1)}K subscribers`;
        }
        return `${num} subscribers`;
    }
}
