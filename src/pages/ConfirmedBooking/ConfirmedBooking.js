import './ConfirmedBooking.scss'
import { Link } from "react-router-dom";

function ConfirmedBooking() {
  return (
    <>
      <h2>The booking has been confirmed</h2>
      <Link to="/" aria-label="Button"><button>Back to home</button></Link>
    </>
  )
}

export default ConfirmedBooking;