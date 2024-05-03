import { useState } from 'react';
import AddRoom from './component/room/AddRoom';
import ExistingRooms from './component/room/ExistingRooms';
import EditRoom from './component/room/EditRoom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/home/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit-room/:roomId" element={<EditRoom />} />
            <Route path="/existing-rooms" element={<ExistingRooms />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
