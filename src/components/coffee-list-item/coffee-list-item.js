import {Link} from 'react-router-dom';

import './coffee-list-item.scss';

import coffeeItem from '../../img/coffee-item.jpg';

const CoffeeListItem = (props) => {
    const {id, name, country, description, price, updateCoffeeItem} = props;
    return (
        <div className="coffee-list__column">
			<div className="coffee-list-item">
				<Link to={`/coffee/${id}`} onClick={() => updateCoffeeItem({name, country, description, price})}>
					<img src={coffeeItem} alt="coffee item" className="coffee-list-item__img" />
					<h3 className="coffee-list-item__name">{name}</h3>
					<p className="coffee-list-item__country">{country}</p>
					<p className="coffee-list-item__price">{price + '$'}</p>
				</Link>
			</div>
		</div>
    );
}

export default CoffeeListItem;