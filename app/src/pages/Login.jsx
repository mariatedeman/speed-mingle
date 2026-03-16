import React from 'react';

export default function LinkedInLogin() {
    const linkedInClientId = import.meta.env.VITE_LINKEDIN_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_LINKEDIN_REDIRECT_URI || `${window.location.origin}/login`;
    const scope = import.meta.env.VITE_LINKEDIN_SCOPE || 'openid profile email';

    const linkedinLogin = () => {
        if (!linkedInClientId) {
            return;
        }

        const state = crypto.randomUUID();
        localStorage.setItem('linkedin_oauth_state', state);

        const authUrl =
            'https://www.linkedin.com/oauth/v2/authorization' +
            `?response_type=code` +
            `&client_id=${encodeURIComponent(linkedInClientId)}` +
            `&redirect_uri=${encodeURIComponent(redirectUri)}` +
            `&scope=${encodeURIComponent(scope)}` +
            `&state=${encodeURIComponent(state)}`;

        window.location.assign(authUrl);
    };

    const isConfigured = Boolean(linkedInClientId);

    return (
        <div>
            <h1>hej</h1>
            {!isConfigured && (
                <p>
                    LinkedIn är inte konfigurerat. Lägg till <strong>VITE_LINKEDIN_CLIENT_ID</strong> i .env.
                </p>
            )}
            <button onClick={linkedinLogin} disabled={!isConfigured}>
                Logga in med LinkedIn
            </button>
        </div>
    );
}