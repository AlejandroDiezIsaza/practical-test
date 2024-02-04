import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/Logo_ML.png';
import iconSearch from '../../assets/ic_Search.png';
import './search-box.scss';

export const SearchBox = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchValue, setSearchValue] = useState('');

    const toHome = () => {
        setSearchValue('');
        navigate('/');
    };
    const onChangeSearchValue = (event) => setSearchValue(event.target.value);
    const onSearch = () => navigate(`/items?search=${searchValue}`);
    const onKeyUpEnter = (event) => {
        if (event.keyCode === 13) {
            onSearch();
        }
    };

    useEffect(() => {
        if (!!location.search) {
            const search = new URLSearchParams(location.search).get('search');
            if (!!search) {
                setSearchValue(search);
            }
        } else {
            setSearchValue('');
        }
    }, [location]);

    return (
        <header className='fadeIn'>
            <div className='sb-content content'>
                <img src={logo} alt='Logo prueba practica' className='sb-logo' onClick={toHome} />

                <div className='sb-input-search'>
                    <input
                        name='search'
                        value={searchValue}
                        placeholder='Nunca dejes de buscar'
                        autoComplete='off'
                        onChange={onChangeSearchValue}
                        onKeyUp={onKeyUpEnter}
                    />
                    <div className='sb-button-search' onClick={onSearch}>
                        <img src={iconSearch} alt='Icono buscar' />
                    </div>
                </div>
            </div>
        </header>
    );
};
