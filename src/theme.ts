import {
    createTheme,
    responsiveFontSizes,
} from '@mui/material/styles'

import type { } from '@mui/material/themeCssVarsAugmentation'

const theme = createTheme({
    shape: {
        borderRadius: 12,
    },

    typography: {
        fontFamily: '"Segoe UI", Arial, sans-serif',

        h1: {
            fontFamily: 'Georgia, "Times New Roman", serif',
        },

        h2: {
            fontFamily: 'Georgia, "Times New Roman", serif',
        },

        h3: {
            fontFamily: 'Georgia, "Times New Roman", serif',
        },
    },

    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },

            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none',
                    minHeight: 44,
                },
            },
        },

        MuiPaper: {
            defaultProps: {
                elevation: 0,
            },
        },
    },
})

export const botanicalJournalTheme = responsiveFontSizes(theme);