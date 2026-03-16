import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

    return !isAuthenticated ? (
        <button onClick={() => loginWithRedirect({ connection: 'linkedin' })}>
            Logga in med LinkedIn
        </button>
    ) : (
        <div>
            <p>Välkommen {user.name}!</p>
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Logga ut
            </button>
        </div>
    );
};

export default LoginButton;