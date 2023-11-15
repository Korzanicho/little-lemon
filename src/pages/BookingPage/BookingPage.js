import '@/components/BookingForm/BookingForm';
import BookingForm from '../../components/BookingForm/BookingForm';

function BookingPage ({availableTimes, dispatch, onSubmit}) {
  return (
    <>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} onSubmit={onSubmit} />
    </>
  )
}

export default BookingPage