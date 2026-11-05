import React from 'react';
import TicketCard from '../components/TicketCard';

function MyTickets() {
  // Dữ liệu giả lập những vé người dùng đã mua thành công
  const ownedTickets = [
    {
      id: 1,
      title: "Blockchain Music Festival 2026 (VIP Pass)",
      date: "15/12/2026 - 19:00",
      location: "Sân vận động Mỹ Đình, Hà Nội",
      price: "0.05",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80"
    }
  ];

  return (
    <main className="main-content">
      <h2 className="page-title">Vé của tôi</h2>
      <p className="page-subtitle">Quản lý bộ sưu tập vé NFT của bạn tại đây.</p>
      
      {ownedTickets.length > 0 ? (
        <div className="ticket-grid">
          {/* Lặp qua danh sách vé đã sở hữu để hiển thị */}
          {ownedTickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              id={ticket.id}
              title={ticket.title}
              date={ticket.date}
              location={ticket.location}
              price={ticket.price}
              image={ticket.image}
              isOwned={true} /* BẬT CỜ NÀY LÊN ĐỂ ĐỔI GIAO DIỆN NÚT BẤM */
            />
          ))}
        </div>
      ) : (
        /* Nếu mảng rỗng (chưa mua vé nào) thì hiện thông báo này */
        <div style={{ textAlign: 'center', marginTop: '80px', padding: '40px', backgroundColor: '#11111E', borderRadius: '16px', border: '1px dashed #3F3F46' }}>
          <p style={{ color: '#9CA3AF', fontSize: '16px' }}>
            🛒 Bạn chưa sở hữu vé NFT nào. Hãy quay lại trang chủ để mua nhé!
          </p>
        </div>
      )}
    </main>
  );
}

export default MyTickets;