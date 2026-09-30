import { Button } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { Link as RouterLink } from 'react-router-dom'

export const HeroButtons = () => {
    return (
        <div className="flex flex-wrap items-center gap-8 pt-2">
            <Button
                component={RouterLink}
                to="/explore"
                variant="contained"
                color="primary"
                endIcon={<ArrowForwardRoundedIcon />}
                className="rounded-xl text-lg px-8 py-4"
            >
                Explore plants
            </Button>

            <Button
                component={RouterLink}
                to="/my-plants"
                variant="outlined"
                color="primary"
                className="rounded-xl text-lg px-8 py-4"
            >
                My collection
            </Button>
        </div>
    )
}