import SectionHeader from '../common/SectionHeader';

interface AboutProps {
    paragraphs: string[];
}

export default function About({ paragraphs }: AboutProps) {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
            <SectionHeader title="About" />
            <div>
                {paragraphs.map((p, i) => (
                    <p key={i} className={i === paragraphs.length - 1 ? "" : "mb-4"}>
                        {p}
                    </p>
                ))}
            </div>
        </section>
    );
}
