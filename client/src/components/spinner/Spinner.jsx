import './spinner.scss';

export const Spinner = ({ top = 0, rigth = 0, bottom = 0, left = 0 }) => {
    return (
        <div className='spinner-content fadeIn' style={{
            margin: `${top}px ${rigth}px ${bottom}px ${left}px`
        }}>
            <span className="loader"></span>
        </div>
    );
};
