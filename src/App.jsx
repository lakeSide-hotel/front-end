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
            <Route path="/browse-all-rooms" element={<RoomListing />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Router>
        <Footer />
      </main>
    </>
  );
}

export default App;
