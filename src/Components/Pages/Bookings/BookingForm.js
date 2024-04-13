import React, {useState} from "react";
import "../../Main.css";


    const BookingForm = ({
        date,
        setDate,
        time,
        setTime,
        guests,
        setGuests,
        occasion,
        setOccasion,
        availableTimes,
        dispatch,
        handleSubmit
    }) => {
    const [isValid,setIsValid]= useState(false)
    const [dateError, setDateError] = useState('');

    const handleDateChange = (e) => {
        setDate(e.target.value);
        if(!e.target.value) {
            setDateError('Please select a date');
          } else {
            setDateError('');
          }
        dispatch({date});
    };

    return (
        <>
        <form className="booking-form" onSubmit={handleSubmit}>
            <label htmlfor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange} required/>
            {dateError && <p style={{color:'red'}}>{dateError}</p>}
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " value={time} onChange={e=>setTime(e.target.value)} required>
                {availableTimes.map((time,index)=>(
                    <option key={index}>{time}</option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e=>setGuests(e.target.value)}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={e=>setOccasion(e.target.value)}>
                <option>no special occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <button aria-label="Submit" role="button" disabled={!isValid} className="form-button">Make Your reservation</button>
        </form>
        </>
    )
}
export default BookingForm