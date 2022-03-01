import SectionTitle from '../section-title/section-title';
import Divider from '../divider/divider';

import './about-coffee-item.scss';

import aboutCoffeeItem from '../../img/about-coffee-item.jpg';

const AboutCoffeeItem = (props) => {
	const {name, country, description, price} = props.coffeeItem;
    return (
        <section className="about-coffee-item">
			<div className="about-coffee-item__container">
				<div className="about-coffee-item__body">
					<div className="about-coffee-item__img">
						<img src={aboutCoffeeItem} alt="coffee" />
					</div>
					<div className="about-coffee-item__txt">
                        <SectionTitle title={name} />
						<Divider />
						<p className="about-coffee-item__country"><span>Country:</span> {country}</p>
						<p className="about-coffee-item__descr"><span>Description:</span> {description}</p>
						<p className="about-coffee-item__price">Price: <span>{price}$</span></p>
					</div>
				</div>
			</div>
		</section>
    );
}

export default AboutCoffeeItem;