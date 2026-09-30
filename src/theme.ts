import {
    createTheme,
    responsiveFontSizes,
    type PaletteMode,
    type ThemeOptions,
} from '@mui/material/styles'

const colors = {
    cream: '#F7F4EC',
    paper: '#FFFCF5',
    forest: '#285443',
    forestDark: '#183D30',
    sage: '#DCE7DC',
    terracotta: '#994B35',
    ink: '#25382D',
    muted: '#59665B',
    border: '#D8DDD0',
}

const headingFont = 'Georgia, "Times New Roman", serif'

export const botanicalJournalOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: colors.forest,
            light: '#547D65',
            dark: colors.forestDark,
            contrastText: colors.paper,
        },
        secondary: {
            main: colors.terracotta,
            light: '#B96950',
            dark: '#763722',
            contrastText: '#FFFFFF',
        },
        background: {
            default: colors.cream,
            paper: colors.paper,
        },
        text: {
            primary: colors.ink,
            secondary: colors.muted,
        },
        divider: colors.border,
        success: {
            main: '#357044',
        },
        error: {
            main: '#B23832',
        },
        warning: {
            main: '#835C18',
        },
        info: {
            main: '#356477',
        },
    },

    shape: {
        borderRadius: 12,
    },

    typography: {
        fontFamily: '"Segoe UI", Arial, sans-serif',
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,

        h1: {
            fontFamily: headingFont,
            fontSize: '3.5rem',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.035em',
        },
        h2: {
            fontFamily: headingFont,
            fontSize: '2.5rem',
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: '-0.025em',
        },
        h3: {
            fontFamily: headingFont,
            fontSize: '2rem',
            fontWeight: 400,
            lineHeight: 1.25,
        },
        h4: {
            fontFamily: headingFont,
            fontSize: '1.5rem',
            lineHeight: 1.3,
        },
        h5: {
            fontFamily: headingFont,
            fontSize: '1.25rem',
            lineHeight: 1.4,
        },
        h6: {
            fontFamily: headingFont,
            fontSize: '1.125rem',
            lineHeight: 1.4,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.75,
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.65,
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
            letterSpacing: '0.01em',
        },
        overline: {
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            lineHeight: 1.8,
        },
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: colors.cream,
                },
                '::selection': {
                    backgroundColor: colors.sage,
                    color: colors.forestDark,
                },
                ':focus-visible': {
                    outline: `3px solid ${colors.forest}`,
                    outlineOffset: '3px',
                },
            },
        },

        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    borderRadius: 999,
                    minHeight: 44,
                    padding: '10px 24px',
                },
                outlined: {
                    borderWidth: 1.5,
                    '&:hover': {
                        borderWidth: 1.5,
                    },
                },
            },
        },

        MuiPaper: {
            defaultProps: {
                elevation: 0,
            },
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                },
            },
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    border: `1px solid ${colors.border}`,
                    borderRadius: 20,
                    boxShadow: '0 6px 24px rgba(37, 56, 45, 0.05)',
                },
            },
        },

        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: 24,
                    '&:last-child': {
                        paddingBottom: 24,
                    },
                },
            },
        },

        MuiTextField: {
            defaultProps: {
                variant: 'outlined',
                fullWidth: true,
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    backgroundColor: colors.paper,
                    borderRadius: 12,
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#828E7D',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: colors.forest,
                    },
                },
            },
        },

        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    fontWeight: 500,
                },
                // Los chips con color explícito conservan su paleta.
                colorDefault: {
                    backgroundColor: colors.sage,
                    color: colors.forestDark,
                },
            },
        },

        MuiAppBar: {
            defaultProps: {
                color: 'transparent',
                elevation: 0,
            },
            styleOverrides: {
                root: {
                    backgroundColor: colors.cream,
                    color: colors.ink,
                    borderBottom: `1px solid ${colors.border}`,
                },
            },
        },

        MuiLink: {
            defaultProps: {
                underline: 'hover',
            },
            styleOverrides: {
                root: {
                    textUnderlineOffset: '4px',
                },
            },
        },
    },
}

const darkColors = {
    background: '#151D18',
    paper: '#1E2A22',
    primary: '#A9CEAE',
    primaryDark: '#7EAE87',
    secondary: '#E3A58F',
    text: '#F0F1E8',
    muted: '#B9C5B8',
    border: '#425348',
    inputBorder: '#7B8F7F',
    sage: '#304C39',
}

const darkOptions: ThemeOptions = {
    ...botanicalJournalOptions,

    palette: {
        mode: 'dark',
        primary: {
            main: darkColors.primary,
            light: '#C8E3CB',
            dark: darkColors.primaryDark,
            contrastText: '#17291C',
        },
        secondary: {
            main: darkColors.secondary,
            light: '#F1C3B2',
            dark: '#C68067',
            contrastText: '#301A12',
        },
        background: {
            default: darkColors.background,
            paper: darkColors.paper,
        },
        text: {
            primary: darkColors.text,
            secondary: darkColors.muted,
        },
        divider: darkColors.border,
        success: {
            main: '#9CCC9F',
        },
        error: {
            main: '#FFB4AB',
        },
        warning: {
            main: '#E6C483',
        },
        info: {
            main: '#A3CDD9',
        },
    },

    components: {
        ...botanicalJournalOptions.components,

        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: darkColors.background,
                },
                '::selection': {
                    backgroundColor: darkColors.sage,
                    color: darkColors.text,
                },
                ':focus-visible': {
                    outline: `3px solid ${darkColors.primary}`,
                    outlineOffset: '3px',
                },
            },
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    border: `1px solid ${darkColors.border}`,
                    borderRadius: 20,
                    boxShadow: '0 6px 24px rgba(0, 0, 0, 0.15)',
                },
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    backgroundColor: darkColors.paper,
                    borderRadius: 12,
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: darkColors.inputBorder,
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: darkColors.primary,
                    },
                },
            },
        },

        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    fontWeight: 500,
                },
                colorDefault: {
                    backgroundColor: darkColors.sage,
                    color: '#D4E8D6',
                },
            },
        },

        MuiAppBar: {
            defaultProps: {
                color: 'transparent',
                elevation: 0,
            },
            styleOverrides: {
                root: {
                    backgroundColor: darkColors.background,
                    color: darkColors.text,
                    borderBottom: `1px solid ${darkColors.border}`,
                },
            },
        },
    },
}

export const botanicalJournalThemes = {
    light: responsiveFontSizes(createTheme(botanicalJournalOptions)),
    dark: responsiveFontSizes(createTheme(darkOptions)),
} satisfies Record<PaletteMode, ReturnType<typeof createTheme>>