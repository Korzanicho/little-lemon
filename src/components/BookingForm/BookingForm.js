import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import cakeImg from '@/assets/images/cake.svg';
import calendarImg from '@/assets/images/ph_calendar.svg';
import clockImg from '@/assets/images/zondicons_time.svg';
import peopleImg from '@/assets/images/people.svg';
import './BookingForm.scss';

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
    <div className='booking-form'>
      <h2>Reserve a table</h2>
      <form style={{display: 'grid', maxWidth: '360px', gap: '20px'}} onSubmit={handleSubmit}>
        <div className='d-flex align-center booking-form__item'>
          <label htmlFor="res-date" className='booking-form__label'>
            <img src={calendarImg} alt='Choose date' className='booking-form__img'/>
          </label>
          <div>
            <input type="date" id="res-date" onChange={handleChangeDate} required className='booking-form__input' />
            { validObject.date.errors.map((error) => <div className='error' key={error}>{error}</div>) }
            <div className='errors'></div>
          </div>
        </div>

        <div className='d-flex align-center booking-form__item'>
          <label htmlFor="res-time">
            <img src={clockImg} alt='Choose time' className='booking-form__img'/>
          </label>
          <div>
            <select id="res-time " onChange={handleChangeTime} required className='booking-form__input'>
              {availableTimes.map(time => <option key={time}>{time}</option>)}
            </select>
            { validObject.time.errors.map((error) => <div className='error' key={error}>{error}</div>) }
          </div>
        </div>

        <div className='d-flex align-center booking-form__item'>
          <label htmlFor="guests">
            <img src={peopleImg} alt='Choose number of guests' className='booking-form__img'/>
          </label>
          <div>
            <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={handleChangeGuests} required className='booking-form__input' />
            { validObject.guests.errors.map((error) => <div className='error' key={error}>{error}</div>) }
          </div>
        </div>

        <div className='d-flex align-center booking-form__item'>
          <label htmlFor="occasion">
            <img src={cakeImg} alt='Choose occasion' className='booking-form__img'/>
          </label>
          <div>
            <select id="occasion" onChange={handleChangeOccasion} required className='booking-form__input'>
                <option disabled selected value> -- select an occasion -- </option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            { validObject.occasion.errors.map((error) => <div className='error' key={error}>{error}</div>) }
          </div>
        </div>
        <button type="submit" required>Make Your reservation</button>
      </form>
    </div>
  );
}

export default BookingForm;