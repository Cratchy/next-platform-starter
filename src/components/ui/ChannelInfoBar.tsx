'use client';

import { motion } from 'framer-motion';

interface ChannelInfoBarProps {
    name: string;
    url: string;
    profilePicture?: string;
    subscriberCount: string;
}

export default function ChannelInfoBar({ name, url, profilePicture, subscriberCount }: ChannelInfoBarProps) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-fit mb-8 sm:mb-12"
        >
            <motion.div
                className="flex items-center gap-2 rounded-full cursor-pointer"
                whileHover={{
                    scale: 1.02,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 17
                }}
            >
                <div
                    className="rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-800 shrink-0 relative"
                    style={{ width: '48px', height: '48px', minWidth: '48px' }}
                >
                    {profilePicture && (
                        <img
                            src={profilePicture}
                            alt={name}
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-bold leading-none">{name}</h3>
                    </div>
                    <p className="text-sm text-zinc-500">{subscriberCount}</p>
                </div>
            </motion.div>
        </a>
    );
}
