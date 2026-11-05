import React from 'react';
import { Link } from 'react-router-dom';
import { connectToMetaMask } from '../utils/connectWallet';

// Nhận walletAddress từ App.js truyền xuống
function Navbar({ walletAddress, setWalletAddress }) {
  
  const handleConnect = async () => {
    const address = await connectToMetaMask();
    if (address) {
      setWalletAddress(address); 
    }
  };

  const formatAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
        🎟️ NFT Ticket
      </Link>
      
      <ul className="nav-links">
        <li><Link to="/">Trang chủ</Link></li>
        <li><Link to="/mytickets">Vé của tôi</Link></li>
        <li><Link to="/create">Tạo sự kiện</Link></li>
      </ul>

      {walletAddress ? (
        <button className="wallet-btn" style={{ background: '#10B981', boxShadow: 'none' }}>
          {formatAddress(walletAddress)}
        </button>
      ) : (
        <button className="wallet-btn" onClick={handleConnect}>
          Connect Wallet
        </button>
      )}
    </nav>
  );
}

export default Navbar;