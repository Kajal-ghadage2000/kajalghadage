import { useState, useEffect } from 'react';

declare global {
    interface Window {
        webkitAudioContext: typeof AudioContext;
    }
}

export const useTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            if (saved) return saved === 'dark';
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return true;
    });

    const playThemeSound = (toDark: boolean) => {
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const now = audioCtx.currentTime;
            const gainNode = audioCtx.createGain();
            gainNode.connect(audioCtx.destination);

            const osc = audioCtx.createOscillator();
            osc.type = 'square';
            osc.frequency.setValueAtTime(toDark ? 150 : 300, now);

            osc.connect(gainNode);
            gainNode.gain.setValueAtTime(0.02, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
            osc.start(now);
            osc.stop(now + 0.05);

            setTimeout(() => audioCtx.close(), 200);
        } catch (e) {
            console.error("Audio failed", e);
        }
    };

    useEffect(() => {
        if (!isDarkMode) {
            document.documentElement.classList.add('light');
        } else {
            document.documentElement.classList.remove('light');
        }
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const toggleTheme = () => {
        const nextMode = !isDarkMode;
        setIsDarkMode(nextMode);
        playThemeSound(nextMode);
    };

    return { isDarkMode, toggleTheme };
};
