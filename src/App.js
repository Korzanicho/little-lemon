import './App.scss';
import { useReducer } from 'react';
import HomePage from '@/pages/HomePage/HomePage';
import TheLayout from '@/components/TheLayout/TheLayout';
import BookingPage from '@/pages/BookingPage/BookingPage';
import ConfirmedBooking from '@/pages/ConfirmedBooking/ConfirmedBooking';
import { Routes, Route } from "react-router-dom";

function App() {
  // helper for mock API
  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = s * a % m) / m;
    };
  }
  // mock API
  const fetchAPI = function(date) {
    let result = [
      '12:00', '12:30', '13:00', '13:30',
      '14:00','18:00', '18:30', '19:00',
      '19:30', '20:00', '20:30', '21:00'
    ];
    for (let i = 0; i<= 6; i++) {
      const randomIndex = Math.floor(Math.random()*result.length);
      result.splice(randomIndex, 1);
    }

    return result;
  };

  // mock API
  const submitAPI = function(formData) {
    console.log(formData);
    return true;
  };
  const initialState = {availableTimes:  fetchAPI(new Date())}
  const [availableTimes, dispatch] = useReducer(updateTimes, initialState.availableTimes);

  function updateTimes(state, date) {
    return fetchAPI(new Date(date));
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<TheLayout />}>
          <Route index element={<HomePage />} />
          <Route path="reserve" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} onSubmit={submitAPI} />} />
          <Route path="confirmed" element={<ConfirmedBooking />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
