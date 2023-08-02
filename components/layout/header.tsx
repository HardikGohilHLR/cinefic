// Header
import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="cf_header">

                <div className="cf_logo">
                    <Link href="/">
                        <h4>Cinefic</h4>
                    </Link>
                </div>

                <div className="cf_navbar">
                    <ul>
                        <li> <Link href="/"> Home </Link> </li>
                        <li> <Link href="/"> Movies </Link> </li>
                        <li> <Link href="/"> TV Shows </Link> </li>
                    </ul>
                </div>

            </div>

        </header>
    )
}

export default Header;