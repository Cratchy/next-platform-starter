'use client';

import { useEffect, useState } from 'react';

export default function BackgroundAnimation() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-zinc-50 dark:bg-black transition-colors duration-500" />

            {/* Gradient Orbs - Using CSS animations for better Safari performance */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[80px] animate-float1" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[80px] animate-float2" />
            <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-pink-500/5 blur-[60px] animate-float3" />
        </div>
    );
}
