import { useState, useEffect } from 'react';

export const useActiveSection = (defaultSection: string = 'about') => {
    const [activeSection, setActiveSection] = useState<string>(defaultSection);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const options: IntersectionObserverInit = {
            root: null,
            threshold: 0.6,
            rootMargin: "0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    if (id) setActiveSection(id);
                }
            });
        }, options);

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return activeSection;
};
