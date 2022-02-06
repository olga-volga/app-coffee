import {Component} from 'react';

import Logo from '../logo/logo';

import './header.scss';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false
		}
	}
	toggleState = () => {
		const isActive = this.state.isActive;
		this.setState(() => ({
			isActive: !isActive
		}));
	}
	render() {
		let menuClassNames = 'header__menu';
		let burgerClassNames = 'header__burger';
		if (this.state.isActive) {
			menuClassNames += ' active';
			burgerClassNames += ' active';
			document.body.classList.add('lock');
		} else {
			document.body.classList.remove('lock');
		}
		return (
			<header className="header">
				<div className="header__body">
					<Logo 
						href="#"
						white={true} />
					<nav className={menuClassNames} onClick={this.toggleState}>
						<ul className="header__list">
							<li><a href="#" className="header__link">Our coffee</a></li>
							<li><a href="#" className="header__link">For your pleasure</a></li>
						</ul>
					</nav>
					<div className={burgerClassNames} onClick={this.toggleState} >
						<span></span>
					</div>
				</div>
			</header>
		);
	}  
}

export default Header;