import SectionTitle from '../section-title/section-title';
import Divider from '../divider/divider';

import './about-coffee-item.scss';

import aboutCoffeeItem from '../../img/about-coffee-item.jpg';

const AboutCoffeeItem = () => {
    return (
        <section className="about-coffee-item">
			<div className="about-coffee-item__container">
				<div className="about-coffee-item__body">
					<div className="about-coffee-item__img">
						<img src={aboutCoffeeItem} alt="coffee" />
					</div>
					<div className="about-coffee-item__txt">
                        <SectionTitle title="About it" />
						<Divider />
						<p className="about-coffee-item__country"><span>Country:</span> Brasil</p>
						<p className="about-coffee-item__descr"><span>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						<p className="about-coffee-item__price">Price:  <span>16.99$</span></p>
					</div>
				</div>
			</div>
		</section>
    );
}

export default AboutCoffeeItem;