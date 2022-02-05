import './coffee-list.scss';

import coffeeItem from '../../img/coffee-item.jpg';

const CoffeeList = () => {
    return (
        <section className="coffee-list">
			<div className="container">
				<div className="coffee-list__body">
					<div className="coffee-list__column">
						<div className="coffee-list-item">
							<img src={coffeeItem} alt="coffee item" className="coffee-list-item__img" />
							<h3 className="coffee-list-item__name">AROMISTICO Coffee 1 kg</h3>
							<p className="coffee-list-item__country">Brazil</p>
							<p className="coffee-list-item__price">6.99$</p>
						</div>
					</div>
					{/*<div class="coffee-list__column">
						<div class="coffee-list-item">
							<img src="img/coffee-item.jpg" alt="coffee item" class="coffee-list-item__img" />
							<h3 class="coffee-list-item__name">AROMISTICO Coffee 1 kg</h3>
							<p class="coffee-list-item__country">Kenya</p>
							<p class="coffee-list-item__price">6.99$</p>
						</div>
					</div>
					<div class="coffee-list__column">
						<div class="coffee-list-item">
							<img src="img/coffee-item.jpg" alt="coffee item" class="coffee-list-item__img" />
							<h3 class="coffee-list-item__name">AROMISTICO Coffee 1 kg</h3>
							<p class="coffee-list-item__country">Columbia</p>
							<p class="coffee-list-item__price">6.99$</p>
						</div>
					</div>
					<div class="coffee-list__column">
						<div class="coffee-list-item">
							<img src="img/coffee-item.jpg" alt="coffee item" class="coffee-list-item__img" />
							<h3 class="coffee-list-item__name">AROMISTICO Coffee 1 kg</h3>
							<p class="coffee-list-item__country">Brazil</p>
							<p class="coffee-list-item__price">6.99$</p>
						</div>
					</div>
					<div class="coffee-list__column">
						<div class="coffee-list-item">
							<img src="img/coffee-item.jpg" alt="coffee item" class="coffee-list-item__img" />
							<h3 class="coffee-list-item__name">AROMISTICO Coffee 1 kg</h3>
							<p class="coffee-list-item__country">Brazil</p>
							<p class="coffee-list-item__price">6.99$</p>
						</div>
					</div>
					<div class="coffee-list__column">
						<div class="coffee-list-item">
							<img src="img/coffee-item.jpg" alt="coffee item" class="coffee-list-item__img" />
							<h3 class="coffee-list-item__name">AROMISTICO Coffee 1 kg</h3>
							<p class="coffee-list-item__country">Brazil</p>
							<p class="coffee-list-item__price">6.99$</p>
						</div>
					</div>*/}
				</div>
			</div>
		</section>
    );
}

export default CoffeeList;