import './HomePage.scss';
import { Link } from "react-router-dom";
import bannerImg from '@/assets/images/restauranfood.jpg';
import bruchettaImg from '@/assets/images/bruchetta.svg';
import greekSaladImg from '@/assets/images/greek salad.jpg';
import lemonDessertImg from '@/assets/images/lemon dessert.jpg';
import TheSpecial from '@/components/TheSpecial/TheSpecial';
import TheRate from '@/components/TheRate/TheRate';
import restaurantImg from '@/assets/images/restaurant.jpg';
import restaurantChefImg from '@/assets/images/restaurant chef B.jpg';

function HomePage () {
  return (
    <>
      <section className='cta-reserve-table'>
        <div className="restaurant-info">
          <div className="restaurant-info__text">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link to="/reserve" aria-label="Button"><button>Reserve a Table</button></Link>
          </div>

          <div className="restaurant-info__banner">
            <img src={bannerImg} alt='banner' />
          </div>
        </div>
      </section>
      <section className='specials section'>
        <div className='d-flex justify-space-between'>
          <h2 className='section__title'>This weeks specials!</h2>
          <button>Online Menu</button>
          <div className="specials-wrapper">
            <TheSpecial
              title='Greek Salad'
              img={greekSaladImg}
              description='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
              price='$12.99'
            />
            <TheSpecial
              title='Bruchetta'
              img={bruchettaImg}
              description='Our famous bruchetta, made with fresh tomatoes, basil, garlic and olive oil, served on toasted sourdough bread.'
              price='$7.50'
            />
            <TheSpecial
              title='Lemon Dessert'
              img={lemonDessertImg}
              description='Lemon dessert with a twist, made with our secret recipe, served with a scoop of vanilla ice cream.'
              price='$5.99'
            />
          </div>
        </div>
      </section>
      <section className='testimonials'>
        <div className='testimonials__inner section'>
          <h2 className='section__title'>Testimonials</h2>
          <div className='d-flex justify-space-between' style={{ gap: '15px' }}>
            <TheRate
              rating='4.9'
              name='John Doe'
              review='“The food was amazing, I will definitely be back!”'
              avatar='https://i.pravatar.cc/100'
            />
            <TheRate
              rating='5.0'
              name='Amanda Lee'
              review='“Its the best restaurant on the World”'
              avatar='https://i.pravatar.cc/100'
            />
            <TheRate
              rating='4.9'
              name='John Doe'
              review='“The food was amazing, I will definitely be back!”'
              avatar='https://i.pravatar.cc/100'
            />
          </div>
        </div>
      </section>
      <section className='about-us section d-flex justify-space-between'>
        <div className='about-us__info'>
          <h2 className='section__title'>Little Lemon</h2>
          <h3 className='section__subtitle'>Chicago</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
          </p>
        </div>
        <div className='about-us__images-wrapper'>
          <img src={restaurantImg} alt='restaurant' className='about-us__image' />
          <img src={restaurantChefImg} alt='restaurant chef' className='about-us__image' />
        </div>
      </section>
    </>
  )
}

export default HomePage