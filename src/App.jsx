import { useState } from 'react';
import AddRoom from './component/room/AddRoom';
import ExistingRooms from './component/room/ExistingRooms';
import EditRoom from './component/room/EditRoom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/home/Home';
import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
import RoomListing from './component/room/RoomListing';
import Admin from './component/admin/Admin';
import Checkout from './component/bookings/Checkout';
import BookingSuccess from './component/bookings/BookingSuccess';
import Bookings from './component/bookings/Bookings';
import FindBooking from './component/bookings/FindBooking';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit-room/:roomId" element={<EditRoom />} />
            <Route path="/existing-rooms" element={<ExistingRooms />} />
            <Route path="/add-room" element={<AddRoom />} />
            <Route path="/book-room/:roomId" element={<Checkout />} />
            <Route path="/browse-all-rooms" element={<RoomListing />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/booking-success" element={<BookingSuccess />} />
            <Route path="/existing-bookings" element={<Bookings />} />
            <Route path="/find-booking" element={<FindBooking />} />
          </Routes>
        </Router>
        <Footer />
      </main>
    </>
  );
}

export default App;
