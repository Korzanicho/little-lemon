import './ConfirmedBooking.scss'
import { Link } from "react-router-dom";
import checkedImg from '@/assets/images/Checked.svg';

function ConfirmedBooking() {
  return (
    <div className='confirmed-booking'>
      <h2>Well Done</h2>
      <img src={checkedImg} alt="" className='confirmed-booking__img' />
      <p className='confirmed-booking__description'>
        You have successfully booked a table.
        You have received confirmation of your reservation to your email address.
        We will also send a reminder to your phone number.
        See you soon!
      </p>
      <Link to="/" aria-label="Button"><button>Done</button></Link>
    </div>
  )
}

export default ConfirmedBooking;