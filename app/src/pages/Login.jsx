import React from 'react';
import { useLinkedIn } from 'react-linkedin-login-oauth2';

export default function LinkedInLogin() {
    const { linkedinLogin } = useLinkedIn({
        clientId: import.meta.env.VITE_LINKEDIN_CLIENT_ID,
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
        <div>
            <h1>hej</h1>
            <button onClick={linkedinLogin}>
                Logga in med LinkedIn
            </button>
        </div>
    );
}