// Header
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useDebouncedEffect from 'use-debounced-effect';

// Icons
import SearchIcon from '../icons/Search';
import CloseIcon from '../icons/Close';

const Header = () => {

    const inputRef = useRef(null);

    const [search, setSearch] = useState('');
    const [isSearchActive, SetIsSearchActive] = useState(false);

    useDebouncedEffect(() => {
        
    }, 500, [search]);
        
    const handle = {
        search: e => {
            setSearch(e?.target?.value?.length > 3 ? e?.target?.value : '');            
        },
        getSearchBar: value => {
            setTimeout(() => {
                value && inputRef?.current?.focus();            
            }, 300);
            SetIsSearchActive(value);
        }
    }

    return (
        <React.Fragment>

            <header>
                <div className="cf_container">
                    <div className="cf_header d_flex">

                        <nav>
                            <div className="cf_logo">
                                <Link to="/">
                                    <h4>Cinefix</h4>
                                </Link>
                            </div>

                            <ul className="d_flex">
                                <li>
                                    <Link to={'/'}> Movie </Link>
                                </li>
                                <li>
                                    <Link to={'/tv-shows'}> TV Shows </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="cf_search-movie">

                            <span className="cf_search-movie__icon" onClick={() => handle.getSearchBar(true)}>
                                <SearchIcon />
                            </span>

                            <div className={`cf_search-movie__input ${isSearchActive ? 'active' : ''}`}>
                                <input type="text" placeholder="Search series or movie..." onChange={handle.search} ref={inputRef} />
                                
                                <span onClick={() => handle.getSearchBar(false)}>
                                    <CloseIcon fill="#171717" />
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
            
        </React.Fragment>
    )
}

export default Header;