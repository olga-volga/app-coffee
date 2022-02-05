import './best-item.scss';

const BestItem = (props) => {
    const {img, name, price} = props;
    return (
        <div className="best-item">
			<img src={img} alt="coffee item" className="best-item__img" />
			<h3 className="best-item__name">{name}</h3>
			<p className="best-item__price">{price}</p>
		</div>
    );
}

export default BestItem;