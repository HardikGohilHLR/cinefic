// Header
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useDebouncedEffect from 'use-debounced-effect';

const Header = () => {

    const [search, setSearch] = useState('');

    useDebouncedEffect(() => {
        
    }, 500, [search]);
        
    const handle = {
        search: e => {
            setSearch(e?.target?.value?.length > 3 ? e?.target?.value : '');            
        }
    }

    return (
        <React.Fragment>

            <header>
                <div className="cf_container">
                    <div className="cf_header d_flex">

                        <div className="cf_logo">
                            <Link to="/">
                                <h4>Cinefix</h4>
                            </Link>
                        </div>

                        <nav>
                            <ul className="d_flex">
                                <li>
                                    <Link to={'/'}> Movie </Link>
                                </li>
                                <li>
                                    <Link to={'/'}> Series </Link>
                                </li>
                            </ul>
                        </nav>


                        <div className="cf_search_movie">
                            <input type="text" placeholder="Search series or movie..." onChange={handle.search} />
                        </div>
                    </div>
                </div>
            </header>
            
        </React.Fragment>
    )
}

export default Header;