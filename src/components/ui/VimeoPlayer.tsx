'use client';

import { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';

interface VimeoPlayerProps {
    videoUrl: string;
    className?: string;
}

export default function VimeoPlayer({ videoUrl, className = '' }: VimeoPlayerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<Player | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!containerRef.current) return;

        setIsLoading(true);

        // Extract video ID from Vimeo URL
        const videoId = videoUrl.split('/').pop() || '';

        // Initialize Vimeo player with responsive mode
        // When responsive is true, width is automatically calculated
        playerRef.current = new Player(containerRef.current, {
            id: parseInt(videoId),
            responsive: true,
            dnt: true, // Do not track
            controls: true,
            title: true,
            byline: true,
            portrait: true,
        });

        playerRef.current.ready().then(() => {
            setIsLoading(false);
        }).catch(() => {
            setIsLoading(false);
        });

        // Cleanup on unmount
        return () => {
            if (playerRef.current) {
                playerRef.current.destroy();
            }
        };
    }, [videoUrl]);

    return (
        <div className={`relative w-full h-full ${className}`}>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/20 backdrop-blur-sm z-10">
                    <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                </div>
            )}
            <div
                ref={containerRef}
                className="w-full h-full"
            />
        </div>
    );
}
