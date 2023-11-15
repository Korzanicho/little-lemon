import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function BookingForm({availableTimes, dispatch , onSubmit}) {
  const navigate = useNavigate();

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [validObject, setValidObject] = useState({
    date: {
      errors: []
    },
    time: {
      errors: []
    },
    guests: {
      errors: []
    },
    occasion: {
      errors: []
    }
  })

  // validation mechanism for each field


  const handleChangeDate = (e) => {
    dispatch(e);
    setDate(e.target.value);

  }
  const handleChangeTime = (e) => {
    setTime(e.target.value);
  }
  const handleChangeGuests = (e) => {
    setGuests(e.target.value);
  }
  const handleChangeOccasion = (e) => {
    setOccasion(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    let isFormValid = true;

    console.log(isFormValid)


    // valid date
    if (date === '') {
      isFormValid = false;
      setValidObject({
        ...validObject,
        date: {
          errors: ['Date is required']
        }
      })
    } else {
      setValidObject({
        ...validObject,
        date: {
          errors: []
        }
      })
    }

    console.log(isFormValid)
    console.log(time, 'time')

    // valid time
    if (time === '') {
      isFormValid = false;
      setValidObject({
        ...validObject,
        time: {
          errors: ['Time is required']
        }
      })
    }
    else {
      setValidObject({
        ...validObject,
        time: {
          errors: []
        }
      })
    }

    console.log(isFormValid)

    console.log(guests < 1, 'guests')
    // valid guests
    if (guests < 1) {
      isFormValid = false;
      setValidObject({
        ...validObject,
        guests: {
          errors: ['Min 1 guest']
        }
      })
    } else {
      setValidObject({
        ...validObject,
        time: {
          errors: []
        }
      })
    }

    console.log(isFormValid)


    // valid occasion
    console.log(occasion)
    if (occasion === '') {
      isFormValid = false;
      setValidObject({
        ...validObject,
        occasion: {
          errors: ['Occasion is required']
        }
      })
    } else {
      setValidObject({
        ...validObject,
        occasion: {
          errors: []
        }
      })
    }

    console.log(isFormValid)

    if (!isFormValid) return;

    const isValid = onSubmit({
      date,
      time,
      guests,
      occasion
    })

    if (isValid) {
      navigate('/confirmed');
    }
  }
  return (
    <>
      <h2>Book Now:</h2>
      <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" onChange={handleChangeDate} required />
          { validObject.date.errors.map((error) => <div className='error' key={error}>{error}</div>) }
          <div className='errors'></div>
        </div>

        <div>
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time " onChange={handleChangeTime} required>
            {availableTimes.map(time => <option key={time}>{time}</option>)}
          </select>
          { validObject.time.errors.map((error) => <div className='error' key={error}>{error}</div>) }
        </div>

        <div>
          <label htmlFor="guests">Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={handleChangeGuests} required />
          { validObject.guests.errors.map((error) => <div className='error' key={error}>{error}</div>) }
        </div>

        <div>
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" onChange={handleChangeOccasion} required>
              <option>Birthday</option>
              <option>Anniversary</option>
          </select>
          { validObject.occasion.errors.map((error) => <div className='error' key={error}>{error}</div>) }
        </div>
        <input type="submit" value="Make Your reservation" required />
      </form>
    </>
  );
}

export default BookingForm;