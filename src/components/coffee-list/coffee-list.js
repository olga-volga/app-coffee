import CoffeeListItem from '../coffee-list-item/coffee-list-item';

import './coffee-list.scss';

const CoffeeList = ({data, updateCoffeeItem}) => {
	const coffeeItems = data.map(item => {
		const {...itemProps} = item;
		return (
			<CoffeeListItem key={item.id} {...itemProps} updateCoffeeItem={updateCoffeeItem} />
		);
	});
    return (
		<section className="coffee-list">
			<div className="container">
				<div className="coffee-list__body">
					{coffeeItems}
				</div>
			</div>
		</section>
        
    );
}

export default CoffeeList;