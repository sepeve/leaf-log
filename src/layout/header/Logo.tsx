import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { LeafLogLogo } from '@/assets/icons';

export const Logo = () => {
    return (
        <Box className="flex flex-1 items-center gap-2 cursor-pointer">
            <LeafLogLogo />
            <Typography
                component={RouterLink}
                to="/"
                variant="h5"
                className="text-primary text-3xl/1 font-medium -space-x-1"
            >
                LeafLog
            </Typography>
        </Box>
    );
};
