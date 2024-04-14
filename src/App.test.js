import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './Components/Pages/Bookings/BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const labelElement = screen.getByLabelText(/Choose date/);
    expect(labelElement).toBeInTheDocument();
});

/*
test ('initializeTimes returns correct initial state',()=>{
  const initialState = initializeTimes();
  const expectedState = {availableTimes:["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]};
  expect(initialState).toEqual(expectedState);
});

test ('updateTimes returns correct state',()=>{
  const currentState = {availableTimes:["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]};
  const updateTimes = updateTimes(date);
  expect(updateTimes).toEqual(currentState.availableTimes);
});

test('submit is disabled if invalid', () => {
  render(<BookingForm />);

  fireEvent.change(screen.getByLabelText('Date'), {
    target: { value: '' }
  });

  expect(screen.getByRole('button')).toBeDisabled();
});

test('displays error if date missing', () => {
  render(<BookingForm />);

  fireEvent.submit(screen.getByRole('form'));

  expect(screen.getByText('Please enter a date')).toBeInTheDocument();
});
*/