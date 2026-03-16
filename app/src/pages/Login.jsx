import React from 'react';
import { useLinkedIn } from 'react-linkedin-login-oauth2';

function LinkedInLogin() {
    const { linkedinLogin } = useLinkedIn({
        clientId: 'DIN_CLIENT_ID_HÄR',
        redirectUri: `${window.location.origin}/login`, // Måste matcha portalen!
        onSuccess: (code) => {
            console.log("Här är din kod:", code);
            // NU: Skicka 'code' till din backend för att byta mot en token
        },
        onError: (error) => {
            console.error(error);
        },
    });

    return (
        <button onClick={linkedinLogin}>
            Logga in med LinkedIn
        </button>
    );
}