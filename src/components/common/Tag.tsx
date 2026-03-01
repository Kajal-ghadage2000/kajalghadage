interface TagProps {
    text: string;
}

export default function Tag({ text }: TagProps) {
    return (
        <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-[var(--tag-bg)] px-3 py-1 text-xs font-medium leading-5 text-[var(--tag-text)]">
                {text}
            </div>
        </li>
    );
}
