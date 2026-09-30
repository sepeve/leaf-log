import { Box, Typography } from '@mui/material';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import { Link as RouterLink } from 'react-router-dom'

export const Logo = () => {
    return(
        <Box className="flex flex-1 items-center gap-2 cursor-pointer">
            <SpaOutlinedIcon
                aria-hidden="true"
                className="size-10"
            />
            <Typography
                component={RouterLink}
                to="/"
                variant="h5"
                className='text-primary text-3xl/1 font-medium -space-x-1'
            >
                LeafLog
            </Typography>
        </Box>
    )
}