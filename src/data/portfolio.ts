import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
    profile: {
        name: "Kajal Ghadage",
        role: "Frontend Engineer",
        tagline: "I build digital experiences for the web.",
        email: "kajalsghadage@gmail.com",
        socials: {
            github: "https://github.com/Kajal-ghadage2000",
            linkedin: "https://www.linkedin.com/in/kajal-ghadage/",
            mail: "mailto:kajalsghadage@gmail.com"
        }
    },
    navigation: [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'recognition', label: 'Recognition' },
    ],
    about: {
        paragraphs: [
            "I'm a frontend engineer with a passion for building scalable, high-performance web applications that work seamlessly across platforms. I love the intersection of clean code architecture and thoughtful user experience, where performance optimization, accessibility, and elegant design come together to create products people actually enjoy using.",
            "Currently, I'm a senior frontend developer at Testlify, where I work on a React and TypeScript-based talent assessment platform used by teams globally. In this role, I've focused on improving performance by cutting page load time with 33%, strengthening security by reducing vulnerabilities from 160 to 10, and improving accessibility for WCAG standards so that assessments are accessible for all. I collaborate closely with product and design teams to ensure that the features we build don't just work—they scale and enhance the experience for thousands of users.",
            "Previously, I have worked in various environments as a full-stack developer and ETL specialist, creating everything from Jira plugins to healthcare AI applications and fintech solutions. This diverse experience has taught me to adapt, solve complex problems, and deliver high-quality solutions within different constraints.",
            "Outside of work, I enjoy climbing, making different types of art, and painting on canvas."
        ]
    },
    experience: [
        {
            company: "HNR Tech",
            role: "Senior Frontend Engineer",
            link: "https://testlify.com/",
            linkText: "testlify.com",
            duration: "2022 — Present",
            description: "Contributed across 4+ repositories on a web-based multilingual SaaS talent assessment platform. Achieved 33% improvement in page load time through API optimization and led NPM package upgrades that decreased security vulnerabilities by 94%. Engineered user-centric features including cross-platform redirection flows, infinite scrolling pagination, and advanced question customization with image, audio, and video uploads, driving 30% increase in client plan upgrades with 75% platform coverage. Maintained stability by fixing 100+ production defects and 30+ critical issues while ensuring WCAG accessibility compliance.",
            tech: ["React.js", "TypeScript", "Redux", "Tailwind CSS", "Vue.js", "Material UI", "WCAG"]
        },
        {
            company: "HNR Tech",
            role: "Full stack Engineer",
            link: "https://sports.phloxphoto.com/",
            linkText: "phloxphoto.com",
            duration: "",
            description: "Led full-stack development of admin and user dashboards for phlox photography bussiness. Designed dynamic email and SMS communication templates with preference management, optimized background schedulers, and managed complex API integrations. Maintained code quality through rigorous testing, code reviews, and best deployment practices on Netlify.",
            tech: ["Next.js", "Node.js", "BootStrap", "Sendgrid", "Twilio", "PostgreSQL", "Stripe"]
        },
        {
            company: "HNR Tech",
            role: "Frontend Engineer",
            link: "https://appforest.io/",
            linkText: "appforest.io",
            duration: "",
            description: "Created an enterprise Jira time-tracking plugin for the Atlassian Marketplace using Vue.js and TypeScript. Integrated Google Calendar API to suggest relevant tickets during meetings, automating workflow processes. Prioritized user experience through performance optimization techniques and designed a comprehensive system of reusable UI components—including a dynamic worklog table, advanced filtering engine, and configurable date-picker—that improved development speed by 40%.",
            tech: ["Nuxt.js", "Vue.js", "Prisma", "Pinia", "Atlassian JWT", "Google API's", "Figma"]
        },
        {
            company: "Bitwise solutions",
            role: "Programmer",
            link: "https://www.discover.com/",
            linkText: "Discover",
            duration: "2021 — 2022",
            description: "Engineered ETL solutions and automation scripts for Discover Financial Services campaign management, supported 20M+ customers and earned client recognition.",
            tech: ["SQL", "HTML5", "CSS3", "Postman", "Python", "Linux", "Shell Scripting"]
        }
    ],
    projects: [
        {
            title: "Voice Prescription Generation using AI",
            link: "https://github.com/disha2000/AI-Based-Voice-Prescription-",
            description: "A healthcare web application that writes prescriptions based on dictation from doctors. A Natural Language Processing model is trained on the Harvard Medical School EHR dataset to generate structured digital prescriptions from raw transcripts.",
            tech: ['React', 'Node', 'Express', 'MongoDB', 'NLP', 'Python', 'JWT'],
            image: "src/assets/voice-prescription.png"
        }
    ],
    skills: [
        { icon: '⚛️', title: 'Frontend Development', desc: 'React.js, Next.js, Vue.js, TypeScript, JavaScript (ES6+)' },
        { icon: '🧠', title: 'Architecture, State & APIs', desc: 'Redux Toolkit, Vux, Context API, Scalable Component Architecture, RESTful APIs' },
        { icon: '🎨', title: 'UI Engineering', desc: 'Tailwind CSS, Material UI, Ant Design, BootStrap, Styled Components, Framer Motion' },
        { icon: '⚡', title: 'Performance, Testing & Tools', desc: 'Code Splitting, Lazy Loading, Memoization, WCAG Standards, Jest, Git, GitHub, Vercel, Netlify, Webpack, Figma' }
    ],
    recognition: [
        { year: '2025', title: 'React Frontend Developer Certificate', img: 'src/assets/React.png', link: 'https://www.hackerrank.com/certificates/iframe/b9781c8d7e08' },
        { year: '2022', title: 'Excellence award for passion & customer service - Bitwise', img: 'src/assets/bitwise.jpg', link: 'https://drive.google.com/file/d/1BBf8z1wXNI7RDSkzxGOXrqKpCuV5rakD/view' },
        { year: '2021', title: 'Research Publication: Voice Based Prescription Generation using AI', img: 'src/assets/Publication.png', link: 'https://www.irjet.net/archives/V8/i6/IRJET-V8I6217.pdf' }
    ],
    footer: {
        tagline: "Built with obsession for detail",
        year: "2025"
    }
};
