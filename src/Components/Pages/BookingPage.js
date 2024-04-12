import React, { useState,useReducer,useEffect} from "react";
import BookingForm from "./Bookings/BookingForm";

const initializeTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

function BookingPage() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const updateTimes = (availableTimes, action) => {
        const date = new Date().toLocaleDateString();
        const day = new Date(date).getDay()

        if(day >= 1 && day <= 3) {
          // Monday to Thursday
          return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        } else if(day === 5 || day === 6) {
          // Friday or Saturday
          return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
        } else if(day === 0) {
          // Sunday
          return [];
        }

        return availableTimes;
      }

    const [availableTimes,dispatch] = useReducer(updateTimes,initializeTimes);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(date, time, guests, occasion);
        setDate("");
        setTime("");
        setGuests("");
        setOccasion("");
        alert("Your reservation is confirmed!");
    }

    return (
        <div>
            <BookingForm
                date={date}
                setDate={setDate}
                time={time}
                setTime={setTime}
                guests={guests}
                setGuests={setGuests}
                occasion={occasion}
                setOccasion={setOccasion}
                availableTimes={availableTimes}
                dispatch={dispatch}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}

export default BookingPage;