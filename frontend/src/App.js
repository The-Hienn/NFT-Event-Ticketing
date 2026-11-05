import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <main className="main-content">
        <h2>Chào mừng đến với Nền tảng Bán vé NFT!</h2>
        <p>Giao diện khung đã sẵn sàng!</p>
      </main>

      <Footer />
    </div>
  );
}

export default App;