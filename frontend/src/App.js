import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MyTickets from './pages/MyTickets';
import EventDetail from './pages/EventDetail';
import CreateEvent from './pages/CreateEvent';
function App() {
  // TẠO BIẾN LƯU VÍ Ở ĐÂY ĐỂ DÙNG CHUNG CHO TOÀN BỘ WEB
  const [walletAddress, setWalletAddress] = useState("");

  return (
    <Router>
      <div className="app-container">
        {/* Truyền ví và hàm cập nhật ví vào Navbar */}
        <Navbar walletAddress={walletAddress} setWalletAddress={setWalletAddress} />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mytickets" element={<MyTickets />} />
          <Route path="/create" element={<CreateEvent walletAddress={walletAddress} />} />
          {/* Truyền ví xuống trang Chi tiết sự kiện để bạn của bạn dùng */}
          <Route path="/event/:id" element={<EventDetail walletAddress={walletAddress} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;