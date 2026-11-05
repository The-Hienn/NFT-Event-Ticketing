import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">© {new Date().getFullYear()} NFT Event Ticketing. Tất cả quyền được bảo lưu.</p>
      <p className="footer-sub">Nền tảng bán vé sự kiện an toàn & minh bạch trên Blockchain.</p>
    </footer>
  );
}

export default Footer;