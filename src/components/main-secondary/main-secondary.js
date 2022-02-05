import Header from '../header/header';
import PageTitle from '../page-title/page-title';

import './main-secondary.scss';

const MainSecondary = () => {
    return (
        <section className="main-secondary">
			<Header />
			<div className="container">
				<div className="main-secondary__body">
                    <PageTitle title="Our Coffee" />
				</div>
			</div>
		</section>
    );
}

export default MainSecondary;