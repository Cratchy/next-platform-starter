'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface SoftwareBadgeProps {
    name: string;
}

// Map software names to icon filenames
const iconMapping: Record<string, string> = {
    'Cinema 4D': 'cinema4d',
    'Blender': 'blender',
    'Liquigen': 'liquigen',
    'Redshift': 'redshift',
    'After Effects': 'aftereffects',
    'Illustrator': 'illustrator',
    'Photoshop': 'photoshop',
    'Premiere Pro': 'premierepro',
    'DaVinci Resolve': 'davinciresolve',
    'Houdini': 'houdini',
    'Substance Painter': 'substancepainter'
};

export default function SoftwareBadge({ name }: SoftwareBadgeProps) {
    const iconSlug = iconMapping[name] || 'default';

    return (
        <motion.div
            className="flex items-center gap-3 px-4 py-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg cursor-default"
            whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(161, 161, 170, 0.1)',
            }}
            transition={{
                type: 'spring',
                stiffness: 200,
                damping: 17
            }}
        >
            <div className="w-6 h-6 flex-shrink-0 relative">
                <Image
                    src={`/icons/${iconSlug}.svg`}
                    alt={name}
                    width={24}
                    height={24}
                    className="w-full h-full"
                />
            </div>
            <span className="font-medium text-sm">{name}</span>
        </motion.div>
    );
}
