import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Product, CartItem } from "../types/product";
import { useCart } from "../contexts/CartContext";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { BuyButton } from "./BuyButton";
import { ShoppingCart, Check, Trash2 } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [showToast, setShowToast] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart, removeFromCart, isInCart, getItemQuantity, cart } = useCart();

  const isItemInCart = isInCart(product.id, selectedSize);
  const itemQuantity = getItemQuantity(product.id, selectedSize);

  // Автоматическое скрытие toast
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleAddToCart = () => {
    setIsAdding(true);
    const cartItem: CartItem = {
      ...product,
      selectedSize,
      quantity: 1,
    };
    addToCart(cartItem);
    setShowToast(true);
    
    setTimeout(() => {
      setIsAdding(false);
    }, 600);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id, selectedSize);
    setShowToast(false);
  };

  const handleBuy = () => {
    const cartItem: CartItem = {
      ...product,
      selectedSize,
      quantity: 1,
    };
    addToCart(cartItem);
    // Переход на страницу корзины
    navigate("/cart");
  };

  return (
    <Card className="glass-card overflow-hidden group relative">
      {isItemInCart && (
        <div className="absolute top-3 right-3 z-10 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-lg">
          <Check className="w-3 h-3" />
          В корзине {itemQuantity > 1 && `(${itemQuantity})`}
        </div>
      )}
      
      <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="py-2 px-5 md:px-6">
        <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
        
        <div className="mb-4">
          <p className="text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">Размер</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                  selectedSize === size
                    ? "bg-black text-white shadow-md scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        
        <p className="text-2xl font-bold text-gray-900 tracking-tight">
          {product.price.toLocaleString("ru-RU")} ₽
        </p>
      </CardContent>
      
      <CardFooter className="p-5 md:p-6 pt-0 flex gap-2">
        <Button
          onClick={isItemInCart ? handleRemoveFromCart : handleAddToCart}
          variant={isItemInCart ? "outline" : "outline"}
          className={`flex-1 text-sm relative overflow-hidden ${
            isAdding ? "animate-pulse" : ""
          } ${isItemInCart ? "border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400" : ""}`}
          disabled={isAdding}
        >
          {isAdding ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" />
              Добавление...
            </span>
          ) : isItemInCart ? (
            <span className="flex items-center gap-2">
              <Trash2 className="w-4 h-4" />
              Удалить из корзины
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              В корзину
            </span>
          )}
        </Button>
        <BuyButton onClick={handleBuy} className="flex-1 text-sm">
          Купить
        </BuyButton>
      </CardFooter>
      
      {showToast && (
        <div className="fixed bottom-6 z-50 animate-in slide-in-from-bottom-5" style={{ right: '1.5rem', left: 'auto', width: 'auto', maxWidth: 'min(400px, calc(100vw - 3rem))' }}>
          <div className="glass-card rounded-lg px-6 py-4 shadow-lg flex items-center gap-3 w-full animate-in fade-in slide-in-from-right-5">
            <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-5 h-5 text-white" />
            </div>
            <p className="text-sm font-medium text-gray-900 flex-1 min-w-0">
              Товар добавлен в корзину!
            </p>
            <button
              onClick={() => setShowToast(false)}
              className="text-gray-400 hover:text-gray-600 flex-shrink-0 text-xl leading-none"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </Card>
  );
}

