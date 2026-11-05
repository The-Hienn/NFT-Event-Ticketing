import React from 'react';
import { Link, useParams } from 'react-router-dom';

// Nhận walletAddress từ App.js truyền xuống
function EventDetail({ walletAddress }) {
  const { id } = useParams();

  // Dữ liệu mẫu
  const sampleEvents = [
    { id: 1, title: "Blockchain Music Festival 2026", date: "15/12/2026 - 19:00", location: "Sân vận động Mỹ Đình, Hà Nội", price: "0.05", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80", desc: "Tham gia lễ hội âm nhạc EDM..." },
    { id: 2, title: "Web3 & NFT Developers Conference", date: "20/12/2026 - 08:30", location: "Trung tâm Hội nghị SECC, TP.HCM", price: "0.02", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", desc: "Hội nghị dành cho các lập trình viên..." },
    { id: 3, title: "Crypto Art & Metaverse Exhibition", date: "25/12/2026 - 14:00", location: "Triển lãm Nghệ thuật số, Đà Nẵng", price: "0.035", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80", desc: "Khám phá không gian nghệ thuật..." }
  ];

  const event = sampleEvents.find(e => e.id === parseInt(id));

  // --- HÀM NÀY DÀNH CHO BẠN CỦA BẠN (SMART CONTRACT DEV) ---
  const handleMintTicket = async () => {
    if (!walletAddress) {
      alert("Vui lòng cuộn lên bấm Connect Wallet trước khi mua vé!");
      return;
    }

    alert(`Bắt đầu gọi Smart Contract để mua vé cho ví: ${walletAddress}`);
    
    // 👉 BẠN CỦA BẠN SẼ XÓA DÒNG ALERT TRÊN VÀ VIẾT CODE TƯƠNG TÁC CONTRACT Ở ĐÂY:
    // Ví dụ:
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const signer = provider.getSigner();
    // const contract = new ethers.Contract(contractAddress, abi, signer);
    // await contract.mintTicket({ value: ethers.utils.parseEther(event.price) });
  };
  // --------------------------------------------------------

  if (!event) return <main className="main-content"><h2 style={{color: 'white'}}>Không tìm thấy sự kiện!</h2></main>;

  return (
    <main className="main-content">
      <Link to="/" style={{ color: '#A855F7', textDecoration: 'none', marginBottom: '20px', display: 'inline-block', fontWeight: 'bold' }}>
        &larr; Quay lại Trang chủ
      </Link>
      
      <div style={{ display: 'flex', gap: '40px', marginTop: '10px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img src={event.image} alt="Event" style={{ width: '100%', borderRadius: '16px', border: '1px solid #27272A', objectFit: 'cover' }} />
        </div>

        <div style={{ flex: '1', minWidth: '300px', backgroundColor: '#11111E', padding: '32px', borderRadius: '16px', border: '1px solid #27272A' }}>
          <span style={{ backgroundColor: 'rgba(168, 85, 247, 0.2)', color: '#A855F7', padding: '6px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold', border: '1px solid #A855F7' }}>
            ✨ NFT Chuẩn ERC-721
          </span>
          
          <h1 style={{ fontSize: '32px', marginTop: '20px', marginBottom: '16px', lineHeight: '1.3' }}>{event.title}</h1>
          <p style={{ color: '#9CA3AF', marginBottom: '12px', fontSize: '16px' }}>📅 Ngày: {event.date}</p>
          <p style={{ color: '#9CA3AF', marginBottom: '24px', fontSize: '16px' }}>📍 Địa điểm: {event.location}</p>
          <div style={{ color: '#D1D5DB', lineHeight: '1.6', marginBottom: '30px', fontSize: '15px' }}>{event.desc}</div>
          
          <div style={{ borderTop: '1px solid #27272A', paddingTop: '24px' }}>
            <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '8px' }}>Giá đúc (Mint Price)</p>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#10B981', marginBottom: '24px' }}>
              {event.price} ETH
            </div>
            
            {/* Gắn hàm handleMintTicket vào nút bấm */}
            <button className="wallet-btn" onClick={handleMintTicket} style={{ width: '100%', fontSize: '18px', padding: '16px' }}>
              Bấm để Đúc Vé (Mint Ticket)
            </button>
            <p style={{ color: '#6B7280', fontSize: '12px', textAlign: 'center', marginTop: '12px' }}>
              Yêu cầu kết nối ví MetaMask và mạng Sepolia
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default EventDetail;