import Typography from '@mui/material/Typography';
import { HeroButtons } from './HeroButtons';

export function HeroContent() {
  return (
    <div className="flex flex-col gap-6 max-w-xl text-foreground">
        <Typography
            component="p"
            variant="overline"
            color="primary"
            className="text-xs font-semibold tracking-[0.25em] text-forest-500"
        >
            Botanical journal
        </Typography>

        <Typography
            id="hero-title"
            component="h1"
            variant="h1"
            className="flex flex-col gap-2 text-forest-900 font-serif tracking-tight text-balance text-8xl/30"
        >
            <span>Your plants,</span>
            <span>a little closer.</span>
        </Typography>

        <Typography
            component="p"
            variant="body1"
            className="text-lg max-w-[38ch] text-forest-700"
        >
            Discover species, grow your collection, and track everyday care.
        </Typography>
        <HeroButtons />
    </div>
  )
}