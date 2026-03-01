import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import { RecognitionItem } from '../../types/portfolio';

interface RecognitionProps {
    recognition: RecognitionItem[];
}

export default function Recognition({ recognition }: RecognitionProps) {
    return (
        <section id="recognition" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Recognition & Extras">
            <SectionHeader title="Recognition & Extras" />
            <div>
                <ul className="group/list">
                    {recognition.map(r => (
                        <li key={r.title} className="mb-8">
                            <Card className="grid-cols-8 gap-4">
                                <div className="z-10 col-span-2">
                                    <img
                                        alt={r.title}
                                        className="w-40 h-24 rounded transition group-hover:border-[var(--accent)] object-cover"
                                        loading="lazy"
                                        src={r.img}
                                        style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="z-10 col-span-6 flex flex-col justify-center">
                                    <p className="text-s font-semibold uppercase tracking-wide text-[var(--text-muted)]">{r.year}</p>
                                    <h3 className="font-medium leading-tight text-[var(--text-primary)]">
                                        <a className="inline-flex items-baseline font-medium leading-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] focus-visible:text-[var(--accent)] group/link text-base" href={r.link} rel="noreferrer" target="_blank">
                                            <span>{r.title}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                                        </a>
                                    </h3>
                                </div>
                            </Card>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
