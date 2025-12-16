import { Card, CardContent } from "../components/ui/card";
import { ExternalLink } from "lucide-react";

export function About() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-8 tracking-tight">
          О нас
        </h1>

        <Card className="glass-card mb-8">
          <CardContent className="p-6 md:p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Информация о продавце</h2>
              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-semibold">Индивидуальный предприниматель:</span> Германович Е.А.
                </p>
                <p>
                  <span className="font-semibold">Свидетельство:</span> №791362822 от 01.02.2024
                </p>
                <p>
                  <span className="font-semibold">Администрация:</span> Ленинского района г. Могилев
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Условия возврата и обмена</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                <p className="text-gray-800 font-semibold mb-3 text-lg">
                  ⚠️ Внимание! Важная информация о возврате и обмене товаров
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  В соответствии со <span className="font-semibold">статьей 28 Закона Республики Беларусь 
                  «О защите прав потребителей»</span> и Перечнем непродовольственных товаров надлежащего 
                  качества, не подлежащих обмену и возврату (п. 1.14), товары категории second-hand 
                  (бывшие в употреблении) <span className="font-semibold">возврату и обмену не подлежат</span>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Пожалуйста, ответственно подходите к выбору размера и модели, внимательно изучайте 
                  описания, фото и видеообзоры перед покупкой.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Правовая база</h3>
                <p className="text-gray-700 mb-4">
                  Данное положение регулируется <span className="font-semibold">Законом Республики Беларусь 
                  от 9 января 2002 года № 90-З «О защите прав потребителей»</span> (с последующими изменениями 
                  и дополнениями).
                </p>
                <p className="text-gray-700 mb-4">
                  Конкретная норма содержится в <span className="font-semibold">статье 28</span> этого закона, 
                  которая устанавливает Перечень непродовольственных товаров надлежащего качества, не подлежащих 
                  обмену и возврату.
                </p>
                <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
                  <p className="text-gray-700 mb-3 font-semibold">Пункт 1.14 Перечня:</p>
                  <p className="text-gray-700 italic">
                    «Предметы личной гигиены, парфюмерно-косметические товары, товары для профилактики и ухода 
                    за зубами, товары для ухода за кожей, волосами, глазами и ногтями, бижутерия, 
                    <span className="font-semibold"> товары бывшие в употреблении</span>»
                  </p>
                </div>
                <p className="text-gray-700 mb-4 text-sm">
                  Также в Перечне указаны другие категории товаров, не подлежащих возврату: текстильные товары 
                  (п. 1.5), изделия швейные и трикотажные бельевые (п. 1.11).
                </p>
                <a
                  href="https://pravo.by/document/?guid=3871&p0=H10600127"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-black font-semibold hover:underline"
                >
                  Закон Республики Беларусь "О защите прав потребителей" (статья 28)
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Рекомендации</h3>
                <p className="text-gray-700 mb-3">
                  Перед оформлением заказа внимательно ознакомьтесь с:
                </p>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• Описанием товара и его состоянием</li>
                  <li>• Размерами и составом ткани</li>
                  <li>• Фотографиями товара</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Если у вас возникли вопросы по товару, пожалуйста, свяжитесь с нами перед оформлением заказа:
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-700">
                    <span className="font-semibold">Email:</span>{" "}
                    <a href="mailto:test@mail.ru" className="text-black hover:underline">
                      test@mail.ru
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Телефон:</span>{" "}
                    <a href="tel:+3752598866263" className="text-black hover:underline">
                      +375 25 988-62-63
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

