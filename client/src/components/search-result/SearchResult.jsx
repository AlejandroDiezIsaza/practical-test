import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { searchItemsByQuery } from '../../services';
import { Product, Spinner, ErrorData, Categories } from '../../components';

export const SearchResult = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [states, setStates] = useState({ loading: true, error: false });
    const [response, setResponse] = useState({});

    useEffect(() => {
        const searchValue = new URLSearchParams(location.search).get('search');
        (!!searchValue)
            ? searchItemsByQuery({ query: searchValue })
                .then(setResponse)
                .catch(() => setStates((old) => ({ ...old, error: true })))
                .finally(() => setStates((old) => ({ ...old, loading: false })))

            : navigate('/');

        return () => setStates({ loading: true, error: false });
    }, [location]);

    return (
        <>
            {
                (states.error)
                    ? <ErrorData />
                    : (states.loading)
                        ? <Spinner top={50} />
                        : (
                            <>
                            <Categories categories={response?.categories} />
                            <section className='content fadeIn'>
                                {
                                    response?.items?.map(item =>
                                        <Product
                                            id={item.id}
                                            amount={item.price.amount}
                                            free={item.free_shipping}
                                            title={item.title}
                                            picture={item.picture}
                                            key={item.id}
                                        />
                                    )
                                }
                            </section>
                            </>
                        )
            }
        </>
    );
}
