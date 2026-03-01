import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import Tag from '../common/Tag';
import { ExperienceItem } from '../../types/portfolio';

interface ExperienceProps {
    experience: ExperienceItem[];
}

export default function Experience({ experience }: ExperienceProps) {
    return (
        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
            <SectionHeader title="Experience" />
            <ul className="group/list">
                {experience.map((item, index) => (
                    <li key={index} className="mb-12">
                        <Card>
                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)] sm:col-span-2" aria-label={item.duration}>
                                {item.duration}
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-[var(--text-primary)]">
                                    <div>
                                        <a className="inline-flex items-baseline font-medium leading-tight text-[var(--text-primary)] hover:text-[var(--accent)] focus-visible:text-[var(--accent)] group/link text-base" href={item.link} target="_blank" rel="noreferrer" aria-label={`${item.role} at ${item.company}`}>
                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                            <span>{item.role} · <span className="inline-block">{item.linkText}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span>
                                        </a>
                                    </div>
                                    <div className="text-[var(--text-muted)]" aria-hidden="true">{item.company}</div>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">
                                    {item.description}
                                </p>
                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                    {item.tech.map(t => (
                                        <Tag key={t} text={t} />
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    </li>
                ))}
            </ul>
            <div className="mt-12">
                <a className="inline-flex items-baseline font-medium leading-tight text-[var(--text-primary)] hover:text-[var(--accent)] focus-visible:text-[var(--accent)] group/link text-base" href="/resume.html" target="_blank" rel="noreferrer" aria-label="View Full Resume">
                    <span>View Full Resume<span className="inline-block transition-transform group-hover/link:translate-x-1 motion-reduce:transition-none ml-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span>
                </a>
            </div>
        </section>
    );
}
