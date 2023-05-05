import React from "react";

const SignedInMenu = ({ logout }) => {
    return (
        <li onClick={logout}>
            <a href="/login">Logout</a>
        </li>
    );
};

export default SignedInMenu;
