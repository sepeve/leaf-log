import type { HomeStep } from '@/core/model';
import { JournalCard } from './JournalCard';

const steps: HomeStep[] = [
    {
        number: '01',
        title: 'Discover',
        description: 'Explore plant species and learn their care basics.',
        image: '/images/discover.png',
    },
    {
        number: '02',
        title: 'Collect',
        description: 'Build your personal plant collection, one leaf at a time.',
        image: '/images/collect.png',
    },
    {
        number: '03',
        title: 'Care',
        description: 'Track watering and keep notes to help your plants thrive.',
        image: '/images/care.png',
    },
];

export const Journal = () => {
    return (
        <div className="flex justify-center mt-4 gap-2 w-3/4 mx-auto">
            {steps.map((step, index) => (
                <JournalCard step={step} key={index} />
            ))}
        </div>
    );
};
