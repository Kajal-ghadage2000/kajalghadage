import SectionHeader from '../common/SectionHeader';
import { SkillItem } from '../../types/portfolio';

interface SkillsProps {
    skills: SkillItem[];
}

export default function Skills({ skills }: SkillsProps) {
    return (
        <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Skills">
            <SectionHeader title="Skills" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {skills.map(s => (
                    <div key={s.title} className="group rounded-xl border border-[var(--border-muted)] bg-[var(--card-bg)] p-6 transition-all hover:border-[var(--accent)] hover:bg-[var(--card-hover-bg)]">
                        <div className="text-2xl mb-4 transition-transform duration-300 group-hover:scale-110 origin-left">
                            {s.icon}
                        </div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--text-primary)] mb-3 transition group-hover:text-[var(--accent)]">
                            {s.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                            {s.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
