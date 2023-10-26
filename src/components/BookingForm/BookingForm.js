import { useState } from 'react';

function BookingForm() {
  // const [formData, setFormData] = useState({
  //   date: '',
  //   time: '',
  //   guests: '',
  //   occasion: ''
  // });
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');

  const [availableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);

  const handleChangeDate = (e) => {
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
    console.log('date', date);
    console.log('time', time);
    console.log('guests', guests);
    console.log('occasion', occasion);

  }
  return (
    <>
      <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}} onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" onChange={handleChangeDate} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time " onChange={handleChangeTime}>
          {availableTimes.map(time => <option key={time}>{time}</option>)}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={handleChangeGuests} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={handleChangeOccasion}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
}

export default BookingForm;