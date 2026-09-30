import Typography from '@mui/material/Typography';
import { HeroButtons } from './HeroButtons';

export function HeroContent() {
  return (
    <div className="flex max-w-xl flex-col gap-6">
        <Typography
            component="p"
            variant="overline"
            color="primary"
        >
            Botanical journal
        </Typography>

        <Typography
            id="hero-title"
            component="h1"
            variant="h1"
            className="text-primary tracking-tight text-balance text-8xl/30"
        >
            Your plants,
            <br />
            a little closer.
        </Typography>

        <Typography
            component="p"
            variant="body1"
            className="text-lg max-w-[38ch]"
            sx={{
                color: 'text.secondary',
            }}
        >
            Discover species, grow your collection, and track everyday care.
        </Typography>
        <HeroButtons />
    </div>
  )
}