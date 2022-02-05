import Logo from '../logo/logo';

import './header.scss';

const Header = () => {
    return (
        <header className="header">
			<div className="header__body">
				<Logo 
					href="#"
					white={true} />
				<nav className="header__menu">
					<ul className="header__list">
						<li><a href="#" className="header__link">Our coffee</a></li>
						<li><a href="#" className="header__link">For your pleasure</a></li>
					</ul>
				</nav>
				<div className="header__burger">
					<span></span>
				</div>
			</div>
		</header>
    );
}

export default Header;