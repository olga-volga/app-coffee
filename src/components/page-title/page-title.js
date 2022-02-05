import './page-title.scss';

const PageTitle = (props) => {
    const {title} = props;
    return <h1 className="page-title">{title}</h1>
}

export default PageTitle;