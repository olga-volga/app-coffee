import Logo from '../logo/logo';
import Divider from '../divider/divider';

import './footer.scss';

const Footer = () => {
    return (
        <footer class="footer">
			<div class="container">
				<div class="footer__body">
					<div class="footer__nav">
                        <Logo href="#" />
						<nav class="footer__menu">
							<ul class="footer__list">
								<li><a href="#" class="footer__link">Our coffee</a></li>
								<li><a href="#" class="footer__link">For your pleasure</a></li>
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