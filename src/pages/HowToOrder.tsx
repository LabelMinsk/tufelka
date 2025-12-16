import { Card, CardContent } from "../components/ui/card";

export function HowToOrder() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-8 tracking-tight">
          Как оформить заказ в Туфелька Store
        </h1>

        <Card className="glass-card mb-8">
          <CardContent className="p-6 md:p-8">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Оформить заказ в нашем интернет-магазине очень просто! Это займет всего несколько минут. 
              Мы подготовили для вас пошаговую инструкцию.
            </p>

            {/* Шаг 1 */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Шаг 1: Выбор товара</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-black font-semibold mr-2">•</span>
                  <span>Просматривайте наш каталог на сайте.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-semibold mr-2">•</span>
                  <span>
                    Чтобы подробнее рассмотреть вещь, нажмите на ее фото — откроется карточка товара 
                    с описанием, составом и доступными размерами.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-semibold mr-2">•</span>
                  <span>Выбрав нужный размер, нажмите кнопку «В корзину».</span>
                </li>
              </ul>
            </div>

            {/* Шаг 2 */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Шаг 2: Работа с корзиной</h2>
              <p className="text-gray-700 mb-3">
                Значок корзины всегда в верхней части сайта. Вы можете продолжать выбирать товары или 
                перейти к оформлению.
              </p>
              <p className="text-gray-700 mb-3">
                Нажав на значок корзины, вы увидите все выбранные позиции. Здесь можно:
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• Изменить количество товара.</li>
                <li>• Удалить позицию, если передумали.</li>
                <li>• Пересчитать итоговую сумму.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Когда всё готово, нажмите кнопку «Оформить заказ».
              </p>
            </div>

            {/* Шаг 3 */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Шаг 3: Оформление заказа</h2>
              <p className="text-gray-700 mb-4">
                Перед вами откроется форма, состоящая из двух основных блоков:
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  1. Данные для доставки (Адрес получателя):
                </h3>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>
                    <span className="font-semibold">ФИО:</span> Укажите полное имя и фамилию получателя.
                  </li>
                  <li>
                    <span className="font-semibold">Номер телефона:</span> Обязательный для связи с курьером почты.
                  </li>
                  <li>
                    <span className="font-semibold">Email:</span> На него придет вся информация о заказе.
                  </li>
                  <li>
                    <span className="font-semibold">Город и адрес:</span> Укажите полный адрес доставки.
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Способ оплаты:</h3>
                <p className="text-gray-700 mb-3">
                  Мы принимаем оплату через надежную платежную систему банка-эквайера.
                </p>
                <p className="text-gray-700">
                  После заполнения данных и нажатия кнопки «Оформить заказ» вы будете перенаправлены 
                  на безопасную страницу платежного шлюза.
                </p>
                <p className="text-gray-700 mt-3">
                  Оплата происходит банковской картой (Visa, MasterCard, БЕЛКАРТ). Это быстро и безопасно. 
                  Данные вашей карты защищены и не передаются нам.
                </p>
              </div>
            </div>

            {/* Шаг 4 */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Шаг 4: Подтверждение и отслеживание
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-black font-semibold mr-2">•</span>
                  <span>
                    После успешной оплаты на ваш email сразу придет чек и подробное письмо с подтверждением 
                    заказа от нашего магазина.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-semibold mr-2">•</span>
                  <span>
                    В течение 1-2 рабочих дней мы упакуем ваш заказ и отправим его выбранным способом.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-semibold mr-2">•</span>
                  <span>
                    Как только заказ отправится, вы получите трек-номер для отслеживания на почту или в смс.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-semibold mr-2">•</span>
                  <span>
                    Когда заказ придет в отделение, вы получите уведомление. Забрать его можно, 
                    предъявив паспорт или номер заказа.
                  </span>
                </li>
              </ul>
            </div>

            {/* Важные моменты */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Важные моменты:</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-black font-semibold mr-2">•</span>
                  <span>
                    Мы не работаем через наложенный платеж. Оплата происходит онлайн при оформлении.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-semibold mr-2">•</span>
                  <span>
                    Все вопросы по размеру, составу ткани и наличию можно уточнить, написав нам на почту 
                    или по телефону.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-semibold mr-2">•</span>
                  <span>
                    Если у вас возникли трудности при оформлении, просто напишите нам в мессенджер или 
                    на email: <a href="mailto:test@mail.ru" className="text-black font-semibold hover:underline">
                      test@mail.ru
                    </a>. Мы поможем!
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 text-center">
              <p className="text-xl font-semibold text-gray-900">Спасибо, что выбираете нас!</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

