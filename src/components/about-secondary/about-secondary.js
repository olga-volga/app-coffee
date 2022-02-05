import Divider from '../divider/divider';

import './about-secondary.scss';

import aboutBeans from '../../img/about-beans.jpg';

const AboutSecondary = () => {
    return (
        <section className="about-section">
			<div className="container">
				<div className="about-section__body">
					<div className="about-section__img">
						<img src={aboutBeans} alt="coffee" />
					</div>
					<div className="about-section__txt">
						<h2 className="section-title">About our beans</h2>
						<Divider />
						<p className="about-section__text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br /><br />Afraid at highly months do things on at. Situation recommend objection do intention so questions. <br />As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
					</div>
				</div>
			</div>
		</section>
    );
}

export default AboutSecondary;