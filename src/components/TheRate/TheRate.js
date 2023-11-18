import './TheRate.scss';
import starIcon from '@/assets/images/ic_baseline-star.svg';

function TheRate({rating, name, review, avatar}) {
	return (
		<div className='the-rate'>
			<h3>{rating}<img src={starIcon} alt='' /></h3>
			<div className='d-flex'>
				<img src={avatar} alt='' className='the-rate__image'/>
				<div>
					<h4>{name}</h4>
				</div>
			</div>
			<p>{review}</p>
		</div>
	);
}

export default TheRate;