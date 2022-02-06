import SectionTitle from '../section-title/section-title';
import Divider from '../divider/divider';

import './about-secondary.scss';

const AboutSecondary = (props) => {
	const {img, alt, title} = props;
    return (
        <section className="about-section">
			<div className="container">
				<div className="about-section__body">
					<div className="about-section__img">
						<img src={img} alt={alt} />
					</div>
					<div className="about-section__txt">
                        <SectionTitle title={title} />
						<Divider />
						<p className="about-section__text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br /><br />Afraid at highly months do things on at. Situation recommend objection do intention so questions. <br />As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
					</div>
				</div>
			</div>
		</section>
    );
}

export default AboutSecondary;