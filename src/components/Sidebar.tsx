import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';

interface SidebarProps {
    activeSection: string;
}

export default function Sidebar({ activeSection }: SidebarProps) {
    const { profile, navigation } = portfolioData;

    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/3 lg:flex-col lg:justify-between lg:py-24 lg:h-screen">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
                    <a href="/">{profile.name}</a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-[var(--text-primary)] sm:text-xl">
                    {profile.role}
                </h2>
                <p className="mt-4 max-w-xs leading-normal text-[var(--text-secondary)]">
                    {profile.tagline}
                </p>
                <ul aria-label="Social media" className="ml-1 flex items-center gap-5 mt-8">
                    <li className="text-xs">
                        <a className="block text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors shake-on-hover" href={profile.socials.mail} target="_blank" rel="noreferrer" title="Mail">
                            <span className="sr-only">Mail</span>
                            <FaEnvelope className="h-6 w-6" />
                        </a>
                    </li>
                    <li className="text-xs">
                        <a className="block text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors shake-on-hover" href={profile.socials.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
                            <span className="sr-only">LinkedIn</span>
                            <FaLinkedin className="h-6 w-6" />
                        </a>
                    </li>
                    <li className="text-xs">
                        <a className="block text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors shake-on-hover" href={profile.socials.github} target="_blank" rel="noreferrer" title="GitHub">
                            <span className="sr-only">GitHub</span>
                            <FaGithub className="h-6 w-6" />
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <nav aria-label="In-page jump links" className="nav hidden lg:block lg:mt-16">
                    <ul className="w-max">
                        {navigation.map((item) => (
                            <li key={item.id}>
                                <a
                                    className={`nav-link group flex items-center py-3 ${activeSection === item.id ? 'active' : ''
                                        }`}
                                    href={`#${item.id}`}
                                >
                                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-focus-visible:text-[var(--text-primary)]">
                                        {item.label}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
