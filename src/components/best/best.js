import SectionTitle from '../section-title/section-title';
import BestItem from '../best-item/best-item';

import './best.scss';

import bestItem1 from '../../img/best-item_1.jpg';
import bestItem2 from '../../img/best-item_2.jpg';
import bestItem3 from '../../img/best-item_3.jpg';

const Best = () => {
    return (
        <section className="best">
			<div className="container">
                <SectionTitle title="Our best" />
				<div className="best__body">
					<div className="best__column">
						<BestItem 
							img={bestItem1}
							name="Solimo Coffee Beans 2 kg"
							price="10.73$" />

					</div>
					<div className="best__column">
						<BestItem 
							img={bestItem2}
							name="Presto Coffee Beans 1 kg"
							price="15.99$" />
					</div>
					<div className="best__column">
						<BestItem 
							img={bestItem3}
							name="AROMISTICO Coffee 1 kg"
							price="6.99$" />
					</div>
				</div>
			</div>
		</section>
    );
}

export default Best;