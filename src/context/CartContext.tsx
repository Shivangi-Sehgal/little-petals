import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { CartItem, Product } from '../types';

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (product: Product, sizeMonths: number, quantity?: number) => void;
  removeItem: (productId: string, sizeMonths: number) => void;
  updateQuantity: (productId: string, sizeMonths: number, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((product: Product, sizeMonths: number, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id && i.sizeMonths === sizeMonths);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id && i.sizeMonths === sizeMonths
            ? { ...i, quantity: i.quantity + quantity }
            : i,
        );
      }
      return [...prev, { product, sizeMonths, quantity }];
    });
  }, []);

  const removeItem = useCallback((productId: string, sizeMonths: number) => {
    setItems((prev) =>
      prev.filter((i) => !(i.product.id === productId && i.sizeMonths === sizeMonths)),
    );
  }, []);

  const updateQuantity = useCallback((productId: string, sizeMonths: number, quantity: number) => {
    if (quantity < 1) {
      setItems((prev) =>
        prev.filter((i) => !(i.product.id === productId && i.sizeMonths === sizeMonths)),
      );
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.product.id === productId && i.sizeMonths === sizeMonths ? { ...i, quantity } : i,
      ),
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const value = useMemo(() => {
    const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
    return { items, itemCount, subtotal, addItem, removeItem, updateQuantity, clearCart };
  }, [items, addItem, removeItem, updateQuantity, clearCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
