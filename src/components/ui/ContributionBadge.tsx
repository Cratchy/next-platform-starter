'use client';

import { motion } from 'framer-motion';

interface ContributionBadgeProps {
    text: string;
}

export default function ContributionBadge({ text }: ContributionBadgeProps) {
    return (
        <motion.div
            className="px-4 py-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg cursor-default"
            whileHover={{
                scale: 1.02,
                backgroundColor: 'rgba(161, 161, 170, 0.1)',
            }}
            transition={{
                type: 'spring',
                stiffness: 200,
                damping: 17
            }}
        >
            <div className="flex gap-3 items-start">
                <span className="text-blue-500 font-bold flex-shrink-0 text-xl">•</span>
                <span className="text-base">{text}</span>
            </div>
        </motion.div>
    );
}
