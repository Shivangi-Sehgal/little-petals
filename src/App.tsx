import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { CartProvider } from './context/CartContext';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Shop } from './pages/Shop';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="app-shell">
          <div className="floral-bg" aria-hidden="true" />
          <Header />
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
