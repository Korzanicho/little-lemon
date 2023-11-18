import { useState, useEffect } from 'react';
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

  const rules = {
    date: [
      {
        validator: (value) => value !== '',
        message: 'Date is required'
      },
      {
        validator: (value) => {
          const today = new Date();
          const date = new Date(value);
          return date > today;
        },
        message: 'Date should be in the future'
      }
    ],
    time: [
      {
        validator: (value) => value !== '',
        message: 'Time is required'
      }
    ],
    guests: [
      {
        validator: (value) => value > 0,
        message: 'Min 1 guest'
      },
      {
        validator: (value) => value <= 10,
        message: 'Max 10 guests. For more please contact us'
      }
    ],
    occasion: [
      {
        validator: (value) => value !== '',
        message: 'Occasion is required'
      }
    ]
  }

  const handleChangeDate = (e) => {
    const errors = [];

    rules.date.forEach(rule => {
      if (!rule.validator(e.target.value)) {
        errors.push(rule.message);
      }
    })

    setValidObject({
      ...validObject,
      date: {
        errors
      }
    })

    if (errors.length) return;

    dispatch(e);
    setDate(e.target.value);
  }

  const handleChangeTime = (e) => {
    const errors = [];

    rules.time.forEach(rule => {
      if (!rule.validator(e.target.value)) {
        errors.push(rule.message);
      }
    })

    setValidObject({
      ...validObject,
      time: {
        errors
      }
    })

    if (errors.length) return;

    setTime(e.target.value);
  }
  const handleChangeGuests = (e) => {
    const errors = [];

    rules.guests.forEach(rule => {
      if (!rule.validator(e.target.value)) {
        errors.push(rule.message);
      }
    })

    setValidObject({
      ...validObject,
      guests: {
        errors
      }
    })

    if (errors.length) return;

    setGuests(e.target.value);
  }
  const handleChangeOccasion = (e) => {
    const errors = [];

    rules.occasion.forEach(rule => {
      if (!rule.validator(e.target.value)) {
        errors.push(rule.message);
      }
    })

    setValidObject({
      ...validObject,
      occasion: {
        errors
      }
    })

    if (errors.length) return;
    setOccasion(e.target.value);
  }
  const isFormValid = () => {
    let isFormValid = true;
    
    Object.keys(validObject).forEach((key) => {
      if (validObject[key].errors.length) {
        isFormValid = false;
      }
    })

    return isFormValid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // valid all rules
    Object.keys(rules).forEach((key) => {
      rules[key].forEach((rule) => {
        const errors = [];
        if (!rule.validator(eval(key))) {
          errors.push(rule.message);
        }
        setValidObject({
          ...validObject,
          [key]: {
            errors
          }
        })
      })
    })

    if (!isFormValid()) return;

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

  useEffect(() => {
    isFormValid();
  }, [date, time, guests, occasion, isFormValid])

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
            <input type="number" placeholder="Guests quantity" min="1" max="10" id="guests" onChange={handleChangeGuests} required className='booking-form__input' />
            { validObject.guests.errors.map((error) => <div className='error' key={error}>{error}</div>) }
          </div>
        </div>

        <div className='d-flex align-center booking-form__item'>
          <label htmlFor="occasion">
            <img src={cakeImg} alt='Choose occasion' className='booking-form__img'/>
          </label>
          <div>
            <select id="occasion" onChange={handleChangeOccasion} required className='booking-form__input' defaultValue=''>
                <option disabled value=''> -- select an occasion -- </option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            { validObject.occasion.errors.map((error) => <div className='error' key={error}>{error}</div>) }
          </div>
        </div>
        <button type="submit" disabled={!isFormValid()}>Make Your reservation</button>
      </form>
    </div>
  );
}

export default BookingForm;