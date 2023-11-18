import '@/components/BookingForm/BookingForm';
import './BookingPage.scss';
import BookingForm from '../../components/BookingForm/BookingForm';

function BookingPage ({availableTimes, dispatch, onSubmit}) {
  return (
    <div className='booking-page'>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} onSubmit={onSubmit} />
    </div>
  )
}

export default BookingPage