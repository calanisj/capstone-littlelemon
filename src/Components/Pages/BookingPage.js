import React, { useState,useReducer } from "react";
import BookingForm from "./Bookings/BookingForm";

function BookingPage() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const updateTimes = (availableTimes,action) => {
        if (action.type === "Monday") return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        return availableTimes;
        }

    const initializeTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
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
                updateTimes={updateTimes}
                dispatch={dispatch}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}

export default BookingPage;