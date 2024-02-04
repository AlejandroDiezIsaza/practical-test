import './categories.scss';

export const Categories = ({ categories }) => {
    const newCategories = (categories.length > 3) ? categories.slice(0, 3) : categories;
    return (
        <ul className='ct-ul'>
            {
                newCategories.map((category, i) => <li key={i}>{category}</li>)
            }
        </ul>
    );
};
