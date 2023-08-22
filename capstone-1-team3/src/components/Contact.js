import React from 'react';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Link as RouterLink } from 'react-router-dom';
import Registration from './Registration';


function Contact() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#152840',
            },
            secondary: {
                main: '#F2F2F2',
            },
        },
    });

    return (
        <main
            style={{
                backgroundColor: '#C2A45F',
                color: 'black',
                minHeight: '80vh',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center', // Center horizontally
                margin: 0,
                padding: 0,
                textAlign: 'center',
            }}
        >
            <div style={{ marginBottom: '0.5rem' }}>
                <h1 style={{ color: 'black', fontSize: '2.5rem', lineHeight: '0.5', marginBottom: '0.5rem' }}>
                    InnovPay: Where Security, Innovation,
                    <p style={{ color: 'black', fontSize: '2.5rem', lineHeight: '0.5', marginBottom: '0.5rem' }}>
                        and Prosperity Converge for You.
                    </p>
                </h1>
            </div>
            <div style={{ marginBottom: '3rem' }}>
                <p style={{ color: 'black', fontSize: '1.25rem', lineHeight: '1.2' }}>
                    Step into the future of finance within a transparent community.
                </p>
                <p style={{ color: 'black', fontSize: '1.25rem', lineHeight: '1.2' }}>
                    Secure, diverse, and empowering solutions await your journey.
                </p>
            </div>
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <ThemeProvider theme={theme}>
                    <RouterLink to="/registration" element={<Registration />}>
                        <Button
                            variant='contained'
                            color='primary'
                            size='large'
                            style={{
                                borderRadius: '18px',
                                padding: '20px 25px',
                                fontSize: '1.25rem',
                                fontWeight: 'bold',
                            }}
                        >
                            Open An Account
                        </Button>
                    </RouterLink>
                    <Button
                        variant='contained'
                        color='secondary'
                        size='large'
                        style={{ borderRadius: '18px', padding: '20px 25px', fontSize: '1.25rem', fontWeight: ' bolder' }}
                    >
                        Get In Touch
                    </Button>
                </ThemeProvider>
            </div>
        </main>
    );
}

export default Contact;
