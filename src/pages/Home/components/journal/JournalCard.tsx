import type { HomeStep } from '../../../../core/model/interfaces/home-strep.model';

interface JournalCardProps {
    step: HomeStep;
}

export const JournalCard = ({ step }: JournalCardProps) => {
    const { image, number, title, description } = step;
    return (
        <div className="relative isolate flex flex-col gap-8 bg-surface border border-surface-muted rounded-2xl p-4 cursor-pointer hover:shadow">
            <img
                src={image}
                alt={title}
                loading="lazy"
                className="absolute right-4 top-4 size-28 shrink-0 object-contain -z-10 pointer-events-none"
            />
            <div className="flex flex-col gap-1">
                <span className="font-serif text-xl font-semibold leading-snug text-secondary">
                    {number}
                </span>
                <span className="text-secondary-hover text-6xl font-serif">{title}</span>
            </div>
            <p className="w-1/2 wrap-break-word text-base font-normal leading-relaxed text-muted">
                {description}
            </p>
        </div>
    );
};
