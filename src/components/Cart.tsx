import { useState, useEffect } from "react";
import { useCart } from "../contexts/CartContext";
import { Button } from "./ui/button";
import { BuyButton } from "./BuyButton";
import { DeliveryForm } from "./DeliveryForm";
import { Trash2, Plus, Minus } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface DeliveryData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  address: string;
  apartment: string;
  postalCode: string;
  comment: string;
}

const DELIVERY_STORAGE_KEY = "fashion-store-delivery";

export function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [deliveryData, setDeliveryData] = useState<DeliveryData | null>(null);
  const [showDeliveryForm, setShowDeliveryForm] = useState(true);

  // Загрузка данных из localStorage при монтировании компонента
  useEffect(() => {
    const savedData = localStorage.getItem(DELIVERY_STORAGE_KEY);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        // Проверяем, что все обязательные поля заполнены
        if (parsed.fullName && parsed.phone && parsed.email && parsed.city && parsed.address) {
          setDeliveryData(parsed);
          setShowDeliveryForm(false);
        }
      } catch (error) {
        console.error("Error parsing delivery data:", error);
      }
    }
  }, []);

  const handleDeliverySubmit = (data: DeliveryData) => {
    setDeliveryData(data);
    setShowDeliveryForm(false);
  };

  const handleBuy = () => {
    if (!deliveryData) {
      setShowDeliveryForm(true);
      return;
    }
    // Здесь можно отправить данные на сервер перед переходом к оплате
    console.log("Order data:", { cart, deliveryData });
    // Переход на страницу оплаты
    window.location.href = "https://securepayments.sberbank.ru/payment";
  };

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-4xl font-semibold mb-4 text-gray-900 tracking-tight">Корзина пуста</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">Добавьте товары в корзину, чтобы продолжить покупки</p>
        <Button onClick={() => (window.location.href = "/")} variant="default" size="lg">
          Перейти в магазин
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">Корзина</h1>
        <Button onClick={clearCart} variant="outline" size="sm" className="text-sm">
          Очистить корзину
        </Button>
      </div>

      <div className="space-y-4 mb-8">
        {cart.map((item) => (
          <Card key={`${item.id}-${item.selectedSize}`} className="glass-card">
            <CardContent className="p-5 md:p-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="w-full sm:w-24 h-48 sm:h-32 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 line-clamp-2">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">Размер: <span className="font-medium">{item.selectedSize}</span></p>
                  <p className="text-lg font-semibold text-gray-900 mb-4">
                    {item.price.toLocaleString("ru-RU")} ₽
                  </p>
                  
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-1 border border-gray-300 rounded-lg overflow-hidden">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                        className="h-9 w-9 rounded-none"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="px-4 py-1 text-sm font-medium min-w-[3rem] text-center">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                        className="h-9 w-9 rounded-none"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.id, item.selectedSize)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                
                <div className="text-left sm:text-right">
                  <p className="text-xl md:text-2xl font-bold text-gray-900">
                    {(item.price * item.quantity).toLocaleString("ru-RU")} ₽
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {showDeliveryForm ? (
        <DeliveryForm onSubmit={handleDeliverySubmit} />
      ) : (
        <Card className="glass-card mb-8">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Данные доставки</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowDeliveryForm(true)}
                className="text-sm"
              >
                Изменить
              </Button>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <span className="font-medium">ФИО:</span> {deliveryData?.fullName}
              </p>
              <p>
                <span className="font-medium">Телефон:</span> {deliveryData?.phone}
              </p>
              <p>
                <span className="font-medium">Email:</span> {deliveryData?.email}
              </p>
              <p>
                <span className="font-medium">Адрес:</span> {deliveryData?.city}, {deliveryData?.address}
                {deliveryData?.apartment && `, кв. ${deliveryData.apartment}`}
              </p>
              {deliveryData?.comment && (
                <p>
                  <span className="font-medium">Комментарий:</span> {deliveryData.comment}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="glass-card mb-6">
        <CardContent className="p-6">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="text-sm text-gray-800 font-semibold mb-2">
              ⚠️ Важная информация о возврате и обмене товаров
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              В соответствии со <span className="font-semibold">статьей 28 Закона Республики Беларусь 
              «О защите прав потребителей»</span> и Перечнем непродовольственных товаров надлежащего 
              качества, не подлежащих обмену и возврату (п. 1.14), товары категории second-hand 
              (бывшие в употреблении) <span className="font-semibold">возврату и обмену не подлежат</span>.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              Пожалуйста, ответственно подходите к выбору размера и модели, внимательно изучайте 
              описания и фотографии товаров перед покупкой.
            </p>
            <a
              href="/about"
              className="text-sm text-black font-semibold hover:underline inline-flex items-center gap-1"
            >
              Подробнее о правилах возврата и обмена
            </a>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-card sticky bottom-4">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-2xl font-semibold text-gray-900">Итого:</span>
            <span className="text-3xl font-bold text-gray-900 tracking-tight">
              {getTotalPrice().toLocaleString("ru-RU")} ₽
            </span>
          </div>
          <BuyButton onClick={handleBuy} className="w-full" size="lg">
            {deliveryData ? "Оформить заказ" : "Заполните данные доставки"}
          </BuyButton>
        </CardContent>
      </Card>
    </div>
  );
}

