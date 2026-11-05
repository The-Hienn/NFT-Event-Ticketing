export const connectToMetaMask = async () => {
  // Kiểm tra xem trình duyệt đã cài MetaMask chưa
  if (typeof window.ethereum !== 'undefined') {
    try {
      // Gọi cửa sổ MetaMask hiện lên để người dùng đăng nhập
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      
      // Trả về địa chỉ ví đầu tiên (chính là thông tin bạn của bạn cần)
      return accounts[0]; 
    } catch (error) {
      console.error("Người dùng hủy kết nối:", error);
      return null;
    }
  } else {
    alert("Bạn chưa cài MetaMask. Vui lòng cài đặt tiện ích này nhé!");
    return null;
  }
};