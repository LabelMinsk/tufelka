import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    // Здесь можно добавить логику отправки email
    console.log("Newsletter subscription:", email);
    e.currentTarget.reset();
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Newsletter Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Хотите быть в курсе последних поступлений?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Оставьте свой e-mail и мы будем сообщать вам о новинках нашего магазина
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                name="email"
                placeholder="ВВЕДИТЕ ВАШ E-MAIL"
                required
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              <Button type="submit" variant="default" size="icon" className="flex-shrink-0">
                <Mail className="w-5 h-5" />
              </Button>
            </form>
            <div className="mt-6">
              <div className="text-2xl font-bold text-red-600">Туфелька Store</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">
                European Clothing
              </div>
            </div>
          </div>

          {/* Info Center */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4">Инфоцентр</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/how-to-order" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Как сделать заказ?
                </Link>
              </li>
              <li>
                <Link to="/how-to-order" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Оплата и доставка
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  О нас
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4">Контакты</h4>
            <p className="text-sm text-gray-600 mb-4">
              Есть вопросы? Вы можете найти ответы на популярные вопросы{" "}
              <Link to="/faq" className="text-black hover:underline">
                здесь
              </Link>
              .
            </p>
            <p className="text-sm text-gray-600 mb-4">Либо связаться с нами:</p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-600" />
                <a
                  href="tel:+3752598866263"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  +375 25 988-62-63
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-600" />
                <a
                  href="mailto:test@mail.ru"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  test@mail.ru
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <p className="text-sm text-gray-600 mb-4 text-center">
            Интернет-магазин европейской одежды. Низкие цены на брендовую одежду. Акции, скидки,
            распродажи, новые поступления. Доставка по всей Беларуси.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>
                <p>© 2025 ИП Германович Е.А.</p> 
                <p>Свидетельство о государственной регистрации № 791362822.</p>
                <p>от 01.02.2024 Администрация Ленинского района г.Могилев</p>
                <p>All rights reserved.</p></div>
            <div>
              Design & Development: <span className="font-semibold">Туфелька Store Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

