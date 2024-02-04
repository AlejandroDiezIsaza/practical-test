import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner, Detail, ErrorData } from '../';
import { getItemById } from '../../services/item';

export const ProductDetail = () => {
    const [response, setResponse] = useState({});
    const [states, setStates] = useState({ loading: true, error: false });
    const { id } = useParams();

    useEffect(() => {
        getItemById(id)
            .then(setResponse)
            .catch(() => setStates((old) => ({ ...old, error: true })))
            .finally(() => setStates((old) => ({ ...old, loading: false })));
        
        return () => setStates({ loading: true, error: false });
    }, [id]);

    return (
        <>
            {
                (states.error)
                    ? <ErrorData />
                    : (states.loading)
                        ? <Spinner top={50} />
                        : (
                            <section className='content separator fadeIn'>
                                <Detail
                                    picture={response?.item?.picture}
                                    condition={response?.item?.condition}
                                    title={response?.item?.title}
                                    currency={response?.item?.price?.currency}
                                    price={response?.item?.price?.amount}
                                    description={response?.item?.description}
                                />
                            </section>
                        )
            }
        </>
    );
};
