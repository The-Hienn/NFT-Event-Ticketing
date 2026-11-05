import React from 'react';
import { Link } from 'react-router-dom';

// Thêm thuộc tính isOwned vào đây
function TicketCard({ id, title, date, location, price, image, isOwned }) {
  return (
    <div className="ticket-card">
      <div className="ticket-image-wrapper">
        <img src={image} alt={title} className="ticket-image" />
        <span className="nft-badge">✨ NFT Ticket</span>
      </div>

      <div className="ticket-body">
        <h3 className="ticket-title">{title}</h3>
        <p className="ticket-info">📅 {date}</p>
        <p className="ticket-info">📍 {location}</p>

        <div className="ticket-footer">
          <div>
            <span className="ticket-price-label">Giá vé</span>
            <div className="ticket-price">{price} ETH</div>
          </div>
          
          {/* LOGIC ĐỔI NÚT Ở ĐÂY: */}
          {isOwned ? (
            <button className="buy-btn" style={{ backgroundColor: '#10B981', color: '#fff', border: 'none' }}>
              Hiển thị mã QR
            </button>
          ) : (
            <Link to={`/event/${id}`} className="buy-btn" style={{ textDecoration: 'none', textAlign: 'center' }}>
              Mua vé ngay
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default TicketCard;