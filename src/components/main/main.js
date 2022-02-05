import Header from '../header/header';

import './main.scss';

const Main = () => {
    return (
        <section class="main">
			<Header />
			<div class="container">
				<div class="main__body">
					<h1 class="main__title">Everything You Love About Coffee</h1>
					<div class="divider">
						<div class="divider__img divider__img_white"></div>
					</div>
					<div>
						<h2 class="main__subtitle">We makes every day full of energy and taste</h2>
						<h2 class="main__subtitle">Want to try our beans?</h2>
					</div>
					<a href="#" class="main__link">More</a>
				</div>
			</div>
		</section>
    );
}

export default Main;