import {Link} from 'react-router-dom';

import './logo.scss';

const Logo = (props) => {
    const {href, white} = props;
    let classNames = white ? 'logo logo_white' : 'logo';
    return <Link to="/" className={classNames}>Coffee house</Link>;
}

export default Logo;