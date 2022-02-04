import './header.scss';

const Header = () => {
    return (
        <header class="header">
			<div class="header__body">
				<a href="#" class="header__logo">Coffee house</a>
				<nav class="header__menu">
					<ul class="header__list">
						<li><a href="#" class="header__link">Our coffee</a></li>
						<li><a href="#" class="header__link">For your pleasure</a></li>
					</ul>
				</nav>
				<div class="header__burger">
					<span></span>
				</div>
			</div>
		</header>
    );
}

export default Header;