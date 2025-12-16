import { useState, useEffect } from "react";
import { CartItem } from "../types/product";

const CART_STORAGE_KEY = "fashion-store-cart";

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCart));
  };

  const addToCart = (item: CartItem) => {
    const existingItem = cart.find(
      (cartItem) => cartItem.id === item.id && cartItem.selectedSize === item.selectedSize
    );

    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id && cartItem.selectedSize === item.selectedSize
          ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
          : cartItem
      );
      saveCart(updatedCart);
    } else {
      saveCart([...cart, item]);
    }
  };

  const removeFromCart = (id: string, size: string) => {
    const updatedCart = cart.filter(
      (item) => !(item.id === id && item.selectedSize === size)
    );
    saveCart(updatedCart);
  };

  const updateQuantity = (id: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id, size);
      return;
    }
    const updatedCart = cart.map((item) =>
      item.id === id && item.selectedSize === size
        ? { ...item, quantity }
        : item
    );
    saveCart(updatedCart);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const isInCart = (id: string, size: string) => {
    return cart.some(
      (item) => item.id === id && item.selectedSize === size
    );
  };

  const getItemQuantity = (id: string, size: string) => {
    const item = cart.find(
      (item) => item.id === id && item.selectedSize === size
    );
    return item ? item.quantity : 0;
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
    isInCart,
    getItemQuantity,
  };
}

