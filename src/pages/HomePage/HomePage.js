import { Link } from "react-router-dom";

function HomePage () {
  return (
    <>
      <section className='cta-reserve-table'>
        <Link to="/reserve">Reserve a Table</Link>
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