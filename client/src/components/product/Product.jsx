import { useNavigate } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import iconFreeShipping from '../../assets/ic_shipping.png';
import './product.scss';

export const Product = ({ id, amount, free, title, picture }) => {
    const navigation = useNavigate();
    const onDetail = () => navigation(`/items/${id}`);

    return (
        <div className='product-container' onClick={onDetail}>
            <div className='product'>
                <div className='product-image'>
                    <img src={picture} alt={title} />
                </div>

                <div className='product-info'>
                    <h2 className='product-info-price'>
                        <NumericFormat
                            value={amount}
                            prefix='$ '
                            decimalSeparator=','
                            thousandsGroupStyle='thousand'
                            thousandSeparator='.'
                            displayType='text'
                        />
                        {
                            (free) ? <img src={iconFreeShipping} alt='Icono envio gratis' /> : <></>
                        }
                    </h2>
                    <h2 className='product-info-title'>{title}</h2>
                </div>

                <div className='product-location'></div>
            </div>
            <hr />
        </div>
    );
};
