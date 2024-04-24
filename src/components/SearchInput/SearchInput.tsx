import * as React from 'react';
import TextField from '@mui/material/TextField';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';

const customTheme = (outerTheme: Theme) =>
    createTheme({
        palette: {
            mode: outerTheme.palette.mode,
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#343847',
                        borderRadius: '20px',
                        color: 'white',
                        width: '576px',
                        '--TextField-brandBorderColor': '#E0E3E7',
                        '--TextField-brandBorderHoverColor': '#B2BAC2',
                        '--TextField-brandBorderFocusedColor': '#6F7E8C',
                        '& label.Mui-focused': {
                            color: '#E0E3E7'
                        },
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    notchedOutline: {
                        borderColor: 'var(--TextField-brandBorderColor)',
                        borderRadius: '20px',
                        color: 'white',


                    },
                    root: {
                        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: 'var(--TextField-brandBorderHoverColor)',
                            borderRadius: '20px',
                            color: 'white',


                        },
                        [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: 'var(--TextField-brandBorderFocusedColor)',
                            borderRadius: '20px',
                            color: 'white',


                        },
                    },
                },
            },
            MuiFilledInput: {
                styleOverrides: {
                    root: {
                        '&::before, &::after': {
                            borderBottom: '2px solid var(--TextField-brandBorderColor)',
                            borderRadius: '20px',
                            color: 'white',

                        },
                        '&:hover:not(.Mui-disabled, .Mui-error):before': {
                            borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
                            borderRadius: '20px',
                            color: 'white',


                        },
                        '&.Mui-focused:after': {
                            borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
                            borderRadius: '20px',
                            color: 'white',


                        },
                    },
                },
            },
            MuiInput: {
                styleOverrides: {
                    
                    root: {
                        '&::before': {
                            borderBottom: '2px solid var(--TextField-brandBorderColor)',
                            color: 'white',

                        },
                        '&:hover:not(.Mui-disabled, .Mui-error):before': {
                            borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
                            color: 'white',

                        },
                        '&.Mui-focused:after': {
                            borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
                            color: 'white',

                        },
                    },
                },
            },
        },
    });

export const SearchInput = ({ value, onChange}: any) => {
    const outerTheme = useTheme();

    return (
            <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField label="Search" style={{ marginTop: 20, marginBottom: 20, color: 'white' }} value={value} onChange={(e) => onChange(e)} />
            </ThemeProvider>
    );
}