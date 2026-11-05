import React from 'react';
import { Link } from 'react-router-dom';

function CreateEvent({ walletAddress }) {
  // Hàm này để hờ cho bạn của bạn (Backend/Smart Contract) xử lý
  const handleCreate = (e) => {
    e.preventDefault(); // Ngăn trang bị tải lại khi bấm Submit
    
    if (!walletAddress) {
      alert("Vui lòng kết nối ví trước khi tạo sự kiện!");
      return;
    }

    alert(`Tuyệt vời! Dữ liệu Form đã sẵn sàng để gửi lên Smart Contract bằng ví: ${walletAddress}`);
    // 👉 Bạn của bạn sẽ viết code lấy dữ liệu từ các ô input và gọi hàm contract.createEvent() ở đây
  };

  return (
    <main className="main-content">
      <Link to="/" style={{ color: '#A855F7', textDecoration: 'none', marginBottom: '20px', display: 'inline-block', fontWeight: 'bold' }}>
        &larr; Quay lại Trang chủ
      </Link>

      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#11111E', padding: '40px', borderRadius: '16px', border: '1px solid #27272A' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '8px', color: '#fff' }}>Tạo Sự Kiện NFT</h2>
        <p style={{ color: '#9CA3AF', marginBottom: '30px', fontSize: '15px' }}>
          Biến vé sự kiện của bạn thành NFT độc bản trên Blockchain.
        </p>

        <form onSubmit={handleCreate} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Tên sự kiện */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: '#D1D5DB', fontSize: '14px', fontWeight: 'bold' }}>Tên sự kiện</label>
            <input type="text" placeholder="VD: Blockchain Music Festival..." required 
              style={inputStyle} 
            />
          </div>

          {/* Ngày và Địa điểm (Chia 2 cột) */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: '#D1D5DB', fontSize: '14px', fontWeight: 'bold' }}>Thời gian</label>
              <input type="datetime-local" required style={inputStyle} />
            </div>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: '#D1D5DB', fontSize: '14px', fontWeight: 'bold' }}>Địa điểm</label>
              <input type="text" placeholder="VD: Sân vận động Mỹ Đình" required style={inputStyle} />
            </div>
          </div>

          {/* Giá vé và Link ảnh (Chia 2 cột) */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: '#D1D5DB', fontSize: '14px', fontWeight: 'bold' }}>Giá vé (ETH)</label>
              <input type="number" step="0.001" placeholder="0.05" required style={inputStyle} />
            </div>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: '#D1D5DB', fontSize: '14px', fontWeight: 'bold' }}>Link ảnh Banner</label>
              <input type="url" placeholder="https://..." required style={inputStyle} />
            </div>
          </div>

          {/* Mô tả chi tiết */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: '#D1D5DB', fontSize: '14px', fontWeight: 'bold' }}>Mô tả chi tiết</label>
            <textarea rows="4" placeholder="Giới thiệu về sự kiện của bạn..." required style={{ ...inputStyle, resize: 'vertical' }}></textarea>
          </div>

          {/* Nút Submit */}
          <button type="submit" className="wallet-btn" style={{ marginTop: '10px', fontSize: '16px', padding: '16px' }}>
            Khởi tạo Smart Contract
          </button>
        </form>
      </div>
    </main>
  );
}

// CSS dùng chung cho các ô input trong form này
const inputStyle = {
  width: '100%',
  padding: '14px',
  backgroundColor: '#0B0B14',
  border: '1px solid #3F3F46',
  borderRadius: '8px',
  color: '#fff',
  fontSize: '15px',
  outline: 'none',
  transition: 'border-color 0.2s'
};

export default CreateEvent;