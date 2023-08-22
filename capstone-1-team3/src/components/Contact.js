import { withTheme } from '@emotion/react'
import React from 'react'

function Contact() {

    return (
        <main
            style={{
                backgroundColor: 'gold',
                color: 'black',
                minHeight: '100vh', // Set minimum height of viewport
                display: 'flex',
                flexDirection: 'column',
                margin: 0, // Reset margin
                padding: 0, // Reset padding
                textAlign: 'center',
            }}>
            <h1 style={{color:'black'}}>
                InnovPay: Where Security, Innovation, and Prosperity Converge for You.
            </h1>
            <div>
                Step into the future of finance within a transparent community.
                Secure, diverse, and empowering solutions await your journey.
            </div>
            <button>Open An Account</button>
            <button>Get In Touch</button>

        </main>
    )
}

export default Contact