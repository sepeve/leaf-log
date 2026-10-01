// src/components/hero/HeroSection.tsx
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import { HeroContent } from './HeroContent';

export function HeroSection() {
    return (
        <Box
            component="section"
            aria-labelledby="hero-title"
            className="flex items-center h-[50dvh] bg-cover bg-center bg-no-repeat"
            sx={(theme) => ({
                backgroundImage: `
                linear-gradient(
                    90deg,
                    ${alpha(theme.palette.background.default, 0.98)} 0%,
                    ${alpha(theme.palette.background.default, 0.9)} 35%,
                    ${alpha(theme.palette.background.default, 0.25)} 70%,
                    ${alpha(theme.palette.background.default, 0.05)} 100%
                ),
                url("/images/leaflog-hero.png")
            `,
            })}
        >
            <div className="mx-auto w-full max-w-6xl py-16 px-8">
                <HeroContent />
            </div>
        </Box>
    );
}
