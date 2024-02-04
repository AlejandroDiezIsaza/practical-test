import { NumericFormat } from 'react-number-format';
import './detail.scss';

export const Detail = ({ picture, condition, title, price, description }) => {
    return (
        <div className='detail-container fadeIn'>
            <div className='detail'>
                <div className='detail-data-picture'>
                    <img src={picture} alt={title} />

                    <div className='detail-description'>
                        <h3 className='detail-description-title'>Descripción del producto</h3>
                        <p>{description}</p>
                    </div>
                </div>

                <div className='detail-data-info'>
                    <span className='detail-data-info-condition'>{condition}</span>

                    <h2 className='detail-data-info-title'>{title}</h2>
                    <h2 className='detail-data-info-price'>
                        <NumericFormat
                            value={price}
                            prefix='$ '
                            decimalSeparator=','
                            thousandsGroupStyle='thousand'
                            thousandSeparator='.'
                            displayType='text'
                        />
                    </h2>

                    <button className='detail-data-info-buy'>Comprar</button>
                </div>
            </div>
        </div>
    );
};
