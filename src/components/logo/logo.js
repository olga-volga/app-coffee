import './logo.scss';

const Logo = (props) => {
    const {href, white} = props;
    let classNames = white ? 'logo logo_white' : 'logo';
    return <a href={href} className={classNames}>Coffee house</a>;
}

export default Logo;