import './coffee-list-item.scss';

import coffeeItem from '../../img/coffee-item.jpg';

const CoffeeListItem = (props) => {
    const {name, country, price} = props;
    return (
        <div className="coffee-list__column">
			<div className="coffee-list-item">
				<img src={coffeeItem} alt="coffee item" className="coffee-list-item__img" />
				<h3 className="coffee-list-item__name">{name}</h3>
				<p className="coffee-list-item__country">{country}</p>
				<p className="coffee-list-item__price">{price + '$'}</p>
			</div>
		</div>
    );
}

export default CoffeeListItem;