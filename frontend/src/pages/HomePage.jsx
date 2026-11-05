import React from 'react';
import TicketCard from '../components/TicketCard';

function HomePage() {
  // Chuyển danh sách sự kiện từ App.js sang đây
  const sampleEvents = [
    {
      id: 1,
      title: "Blockchain Music Festival 2026",
      date: "15/12/2026 - 19:00",
      location: "Sân vận động Mỹ Đình, Hà Nội",
      price: "0.05",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80"
    },
    {
      id: 2,
      title: "Web3 & NFT Developers Conference",
      date: "20/12/2026 - 08:30",
      location: "Trung tâm Hội nghị SECC, TP.HCM",
      price: "0.02",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80"
    },
    {
      id: 3,
      title: "Crypto Art & Metaverse Exhibition",
      date: "25/12/2026 - 14:00",
      location: "Triển lãm Nghệ thuật số, Đà Nẵng",
      price: "0.035",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80"
    }
  ];

  return (
    <main className="main-content">
      <h2 className="page-title">Sự kiện nổi bật</h2>
      <p className="page-subtitle">Sở hữu vé NFT minh bạch, không lo vé giả hay bị nâng giá.</p>

      <div className="ticket-grid">
        {sampleEvents.map((event) => (
          <TicketCard
            key={event.id}
            id={event.id}
            title={event.title}
            date={event.date}
            location={event.location}
            price={event.price}
            image={event.image}
          />
        ))}
      </div>
    </main>
  );
}

export default HomePage;