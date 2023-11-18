import './TheSpecial.scss';
import orderImg from '@/assets/images/order.png';

function TheSpecial({title, description, img, price}) {
	return (
		<div className="the-special">
			<img className="the-special__image" src={img} alt={title} />
			<div className='the-special__content'>
				<div className='d-flex justify-space-between'>
					<h1>{title}</h1>
					<p className='the-special__price'>{price}</p>
				</div>
				<p>{description}</p>
				<p className='the-special__order'>Order a delivery <img src={orderImg} alt='' /></p>
			</div>
		</div>
	);
}

export default TheSpecial;