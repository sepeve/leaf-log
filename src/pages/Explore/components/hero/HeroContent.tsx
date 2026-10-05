import { Typography } from '@mui/material';

export const HeroContent = () => {
    return(
        <div className="flex flex-col gap-4 text-foreground">
            <Typography
                component="p"
                color="primary"
                className="text-xs font-semibold tracking-[0.25em] text-foreground uppercase"
            >
                Plant Library
            </Typography>
            <Typography
                component="h1"
                className="font-serif tracking-tight text-balance text-8xl/30"
            >
                Find your next green companion.
            </Typography>

            <Typography
                component="p"
                variant="body1"
                className="text-lg"
            >
                Discover plant species and grow your personal collection.
            </Typography>
        </div>
    );
}