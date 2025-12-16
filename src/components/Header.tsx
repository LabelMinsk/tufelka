import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { Button } from "./ui/button";

export function Header() {
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold text-gray-900 hover:text-gray-700 transition-colors tracking-tight">
          Туфелька Store
        </Link>
        
        <div className="flex items-center gap-8">
          <Link to="/">
            <Button variant="ghost" className="text-gray-900 hover:text-gray-700 text-sm font-normal">
              Магазин
            </Button>
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="tel:+3752598866263" className="hover:text-gray-900 transition-colors">
              +375 25 988-62-63
            </a>
            <a href="mailto:test@mail.ru" className="hover:text-gray-900 transition-colors">
              test@mail.ru
            </a>
          </div>
          
          <Link to="/cart" className="relative">
            <Button variant="ghost" className="relative p-2">
              <ShoppingBag className="w-5 h-5 text-gray-900" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs font-semibold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1.5 shadow-lg animate-in zoom-in-50 border-2 border-white">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

