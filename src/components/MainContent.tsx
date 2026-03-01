import { SiFigma, SiReact, SiVercel, SiTailwindcss } from 'react-icons/si';
import { FaSmile } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';

// Section Components
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Recognition from './sections/Recognition';

export default function MainContent() {
    const { about, experience, projects, skills, recognition, footer } = portfolioData;

    return (
        <main className="pt-24 lg:w-3/5 lg:py-20" id="content">
            <About paragraphs={about.paragraphs} />
            <Experience experience={experience} />
            <Projects projects={projects} />
            <Skills skills={skills} />
            <Recognition recognition={recognition} />

            <footer className="max-w-md pb-12 text-sm text-[var(--text-muted)] sm:pb-0 relative z-20">
                <div className="flex flex-col gap-4">
                    <p className="flex items-center gap-2 group/footer select-none transition-transform duration-300 hover:-translate-y-1 origin-left">
                        <span>© {footer.year} · {footer.tagline}</span>
                        <FaSmile className="inline text-[var(--tag-text)] h-4 w-4 transition-transform duration-300 group-hover/footer:scale-125 group-hover/footer:rotate-12 cursor-pointer" />
                    </p>
                    <div className="flex items-center gap-4 text-[var(--text-muted)]">
                        <SiFigma className="h-5 w-5 hover:text-[var(--accent)] transition-colors" title="Figma" />
                        <SiReact className="h-5 w-5 hover:text-[var(--accent)] transition-colors" title="React" />
                        <SiTailwindcss className="h-5 w-5 hover:text-[var(--accent)] transition-colors" title="Tailwind CSS" />
                        <SiVercel className="h-5 w-5 hover:text-[var(--accent)] transition-colors" title="Vercel" />
                    </div>
                </div>
            </footer>
        </main>
    );
}
