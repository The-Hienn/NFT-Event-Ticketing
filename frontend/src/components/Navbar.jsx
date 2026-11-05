import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🎟️ NFT Ticket</div>
      
      <ul className="nav-links">
        <li><a href="#home">Trang chủ</a></li>
        <li><a href="#mytickets">Vé của tôi</a></li>
        <li><a href="#create">Tạo sự kiện</a></li>
      </ul>

      <button className="wallet-btn">Connect Wallet</button>
    </nav>
  );
}

export default Navbar;