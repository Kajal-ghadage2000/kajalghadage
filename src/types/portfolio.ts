export interface Profile {
    name: string;
    role: string;
    tagline: string;
    email: string;
    socials: {
        github: string;
        linkedin: string;
        mail: string;
    };
}

export interface NavigationItem {
    id: string;
    label: string;
}

export interface AboutData {
    paragraphs: string[];
}

export interface ExperienceItem {
    company: string;
    role: string;
    link: string;
    linkText: string;
    duration: string;
    description: string;
    tech: string[];
}

export interface ProjectItem {
    title: string;
    link: string;
    description: string;
    tech: string[];
    image: string;
}

export interface SkillItem {
    icon: string;
    title: string;
    desc: string;
}

export interface RecognitionItem {
    year: string;
    title: string;
    img: string;
    link: string;
}

export interface FooterData {
    tagline: string;
    year: string;
}

export interface PortfolioData {
    profile: Profile;
    navigation: NavigationItem[];
    about: AboutData;
    experience: ExperienceItem[];
    projects: ProjectItem[];
    skills: SkillItem[];
    recognition: RecognitionItem[];
    footer: FooterData;
}
