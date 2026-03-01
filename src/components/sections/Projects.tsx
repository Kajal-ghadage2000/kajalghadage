import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import Tag from '../common/Tag';
import { ProjectItem } from '../../types/portfolio';

interface ProjectsProps {
    projects: ProjectItem[];
}

export default function Projects({ projects }: ProjectsProps) {
    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
            <SectionHeader title="Projects" />
            <ul className="group/list">
                {projects.map((project, index) => (
                    <li key={index} className="mb-12">
                        <Card className="gap-4">
                            <div className="z-10 sm:order-2 sm:col-span-6">
                                <h3>
                                    <a className="inline-flex items-baseline font-medium leading-tight text-[var(--text-primary)] hover:text-[var(--accent)] focus-visible:text-[var(--accent)] group/link text-base" href={project.link} target="_blank" rel="noreferrer">
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span>{project.title}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span>
                                    </a>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">
                                    {project.description}
                                </p>
                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                                    {project.tech.map(t => (
                                        <Tag key={t} text={t} />
                                    ))}
                                </ul>
                            </div>
                            <img alt={project.title} loading="lazy" width="128" height="192" decoding="async" data-nimg="1" className="rounded transition group-hover:border-[var(--accent)] sm:order-1 sm:col-span-2 w-42 h-24 object-cover sm:translate-y-1 bg-[var(--card-hover-bg)]" src={project.image} />
                        </Card>
                    </li>
                ))}
            </ul>
        </section>
    );
}
