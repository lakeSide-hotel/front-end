import React, { useEffect, useState } from 'react';
import { getAllBookings } from '../utils/ApiFunctions';
import Header from '../common/Header';
import BookingTable from './BookingTable';

const Bookings = () => {
  const [bookingInfo, setBookingInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
      getAllBookings()
        .then((data) => {
          setBookingInfo(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  const handleBookingCancellation = async (bookingId) => {
    try {
      await cancelBooking(bookingId);
      const data = await getAllBookings();
      setBookingInfo(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="container" style={{ backgroundColor: 'white' }}>
      <Header title={'Existing Booking'} />

      {error && <div className="text-danger">{error}</div>}

      {isLoading ? (
        <div>Loading existing bookings</div>
      ) : (
        <BookingTable
          bookingInfo={bookingInfo}
          handleBookingCancellation={handleBookingCancellation}
        />
      )}
    </section>
  );
};

export default Bookings;
