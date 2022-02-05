import Logo from '../logo/logo';
import Divider from '../divider/divider';

import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
			<div className="container">
				<div className="footer__body">
					<div className="footer__nav">
                        <Logo href="#" />
						<nav className="footer__menu">
							<ul className="footer__list">
								<li><a href="#" className="footer__link">Our coffee</a></li>
								<li><a href="#" className="footer__link">For your pleasure</a></li>
							</ul>
						</nav>
					</div>
					<Divider />
				</div>
			</div>
		</footer>
    );
}

export default Footer;