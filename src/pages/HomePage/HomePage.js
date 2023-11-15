import './HomePage.scss';
import { Link } from "react-router-dom";
import bannerImg from '@/assets/images/restauranfood.jpg';

function HomePage () {
  return (
    <>
      <section className='cta-reserve-table'>
        <div className="restaurant-info">
          <div className="restaurant-info__text">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterraneran restaurant, focused on tradition recipes served with a modern twist.</p>
            <Link to="/reserve" aria-label="Button"><button>Reserve a Table</button></Link>
          </div>

          <div className="restaurant-info__banner">
            <img src={bannerImg} alt='banner' />
          </div>
        </div>
      </section>
      <section className='specials'>
      </section>
      <section className='testimonials'>
      </section>
      <section className='about-us'>
      </section>
    </>
  )
}

export default HomePage