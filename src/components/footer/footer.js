import {NavLink} from 'react-router-dom';

import Logo from '../logo/logo';
import Divider from '../divider/divider';

import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
			<div className="container">
				<div className="footer__body">
					<div className="footer__nav">
                        <Logo />
						<nav className="footer__menu">
							<ul className="footer__list">
								<li><NavLink exact to="/coffee" className="footer__link">Our coffee</NavLink></li>
								<li><NavLink exact to="/pleasure" className="footer__link">For your pleasure</NavLink></li>
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