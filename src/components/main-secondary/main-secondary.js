import Header from '../header/header';
import PageTitle from '../page-title/page-title';

import './main-secondary.scss';

const MainSecondary = (props) => {
	const {theme, title} = props;

	let classNames = 'main-secondary';
	switch(theme) {
		case 'coffee':
			classNames += ' main-secondary_coffee';
			break;
		case 'pleasure':
			classNames += ' main-secondary_pleasure';
			break;
	}
    return (
        <section className={classNames}>
			<Header />
			<div className="container">
				<div className="main-secondary__body">
                    <PageTitle title={title} />
				</div>
			</div>
		</section>
    );
}

export default MainSecondary;