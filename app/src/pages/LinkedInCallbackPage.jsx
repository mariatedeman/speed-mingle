import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

export default function LinkedInCallbackPage() {
	const result = useMemo(() => {
		const params = new URLSearchParams(window.location.search);
		const code = params.get('code');
		const error = params.get('error');
		const errorDescription = params.get('error_description');
		const state = params.get('state');
		const savedState = localStorage.getItem('linkedin_oauth_state');

		if (state && savedState && state !== savedState) {
			return {
				type: 'error',
				message: 'State matchar inte. Försök logga in igen.',
			};
		}

		if (error) {
			return {
				type: 'error',
				message: errorDescription || 'LinkedIn-inloggningen misslyckades.',
			};
		}

		if (code) {
			return {
				type: 'success',
				message: 'Inloggning via LinkedIn lyckades. Skicka nu koden till backend för token-utbyte.',
				code,
			};
		}

		return {
			type: 'error',
			message: 'Ingen kod hittades i callback-URL:en.',
		};
	}, []);

	return (
		<div>
			<h1>LinkedIn callback</h1>
			<p>{result.message}</p>
			{result.type === 'success' && <p><strong>Authorization code:</strong> {result.code}</p>}
			<p>
				<Link to="/">Tillbaka</Link>
			</p>
		</div>
	);
}
