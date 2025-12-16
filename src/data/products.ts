import { Product } from "../types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Классическая белая рубашка",
    description: "Премиальная хлопковая рубашка с идеальной посадкой. Идеально подходит для офиса и повседневной носки.",
    price: 2990,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&h=1000&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    category: "Рубашки"
  },
  {
    id: "2",
    name: "Черный классический костюм",
    description: "Элегантный костюм из итальянской шерсти. Идеален для деловых встреч и особых случаев.",
    price: 15990,
    image: "https://images.unsplash.com/photo-1594938291221-94f313b0e0e6?w=800&h=1000&fit=crop",
    sizes: ["M", "L", "XL", "XXL"],
    category: "Костюмы"
  },
  {
    id: "3",
    name: "Джинсы скинни",
    description: "Удобные джинсы из премиального денима. Современный крой и комфортная посадка.",
    price: 4990,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=1000&fit=crop",
    sizes: ["28", "30", "32", "34", "36"],
    category: "Джинсы"
  },
  {
    id: "4",
    name: "Кожаная куртка",
    description: "Стильная кожаная куртка премиум качества. Защитит от ветра и добавит образу дерзости.",
    price: 12990,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    category: "Куртки"
  },
  {
    id: "5",
    name: "Белое платье-миди",
    description: "Элегантное платье из натурального шелка. Идеально для романтических вечеров и особых событий.",
    price: 8990,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1000&fit=crop",
    sizes: ["XS", "S", "M", "L"],
    category: "Платья"
  },
  {
    id: "6",
    name: "Свитшот оверсайз",
    description: "Удобный свитшот из мягкого хлопка. Идеален для повседневной носки и спорта.",
    price: 3490,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop",
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "Свитшоты"
  },
  {
    id: "7",
    name: "Классические брюки чинос",
    description: "Универсальные брюки из хлопка. Подходят для офиса и casual стиля.",
    price: 3990,
    image: "https://images.unsplash.com/photo-1624378515195-6bbdb73f2197?w=800&h=1000&fit=crop",
    sizes: ["30", "32", "34", "36", "38"],
    category: "Брюки"
  },
  {
    id: "8",
    name: "Тренчкот бежевый",
    description: "Классический тренчкот из водоотталкивающей ткани. Неотъемлемый элемент гардероба.",
    price: 11990,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&h=1000&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    category: "Пальто"
  },
  {
    id: "9",
    name: "Черное платье-футляр",
    description: "Классическое платье-футляр из премиальной ткани. Идеально для деловых встреч.",
    price: 6990,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1000&fit=crop",
    sizes: ["XS", "S", "M", "L"],
    category: "Платья"
  },
  {
    id: "10",
    name: "Джинсовая куртка",
    description: "Стильная джинсовая куртка из премиального денима. Классика, которая никогда не выходит из моды.",
    price: 5990,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    category: "Куртки"
  },
  {
    id: "11",
    name: "Белый пиджак",
    description: "Элегантный белый пиджак из льна. Идеален для летнего сезона и светских мероприятий.",
    price: 7990,
    image: "https://images.unsplash.com/photo-1594938291221-94f313b0e0e6?w=800&h=1000&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    category: "Пиджаки"
  },
  {
    id: "12",
    name: "Спортивные брюки",
    description: "Удобные спортивные брюки из эластичной ткани. Идеальны для тренировок и активного отдыха.",
    price: 4490,
    image: "https://images.unsplash.com/photo-1624378515195-6bbdb73f2197?w=800&h=1000&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    category: "Спорт"
  },
  {
    id: "13",
    name: "Шерстяное пальто",
    description: "Теплое пальто из натуральной шерсти. Защитит от холода и добавит элегантности образу.",
    price: 13990,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&h=1000&fit=crop",
    sizes: ["M", "L", "XL", "XXL"],
    category: "Пальто"
  },
  {
    id: "14",
    name: "Платье с цветочным принтом",
    description: "Легкое летнее платье с ярким цветочным принтом. Идеально для отпуска и прогулок.",
    price: 5490,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1000&fit=crop",
    sizes: ["XS", "S", "M", "L"],
    category: "Платья"
  },
  {
    id: "15",
    name: "Худи с капюшоном",
    description: "Удобный худи из мягкого флиса. Идеален для прохладной погоды и повседневной носки.",
    price: 3990,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop",
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "Худи"
  },
  {
    id: "16",
    name: "Классические черные брюки",
    description: "Универсальные черные брюки из шерсти. Подходят для офиса и формальных мероприятий.",
    price: 4990,
    image: "https://images.unsplash.com/photo-1624378515195-6bbdb73f2197?w=800&h=1000&fit=crop",
    sizes: ["30", "32", "34", "36", "38"],
    category: "Брюки"
  },
  {
    id: "17",
    name: "Джинсы с высокой посадкой",
    description: "Стильные джинсы с высокой посадкой. Подчеркнут фигуру и добавят образу современности.",
    price: 5490,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=1000&fit=crop",
    sizes: ["26", "28", "30", "32", "34"],
    category: "Джинсы"
  },
  {
    id: "18",
    name: "Бомбер",
    description: "Стильная куртка-бомбер из нейлона. Легкая и практичная, идеальна для межсезонья.",
    price: 6990,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    category: "Куртки"
  },
  {
    id: "19",
    name: "Платье макси",
    description: "Длинное платье из струящейся ткани. Элегантно и романтично, идеально для особых случаев.",
    price: 7990,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1000&fit=crop",
    sizes: ["XS", "S", "M", "L"],
    category: "Платья"
  },
  {
    id: "20",
    name: "Кардиган из кашемира",
    description: "Мягкий кардиган из натурального кашемира. Невероятно комфортный и стильный.",
    price: 9990,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    category: "Кардиганы"
  },
  {
    id: "21",
    name: "Классическая рубашка в клетку",
    description: "Стильная рубашка с клетчатым принтом. Идеальна для casual стиля и офиса.",
    price: 3490,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&h=1000&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    category: "Рубашки"
  },
  {
    id: "22",
    name: "Кожаные брюки",
    description: "Стильные кожаные брюки премиум качества. Добавят образу дерзости и элегантности.",
    price: 11990,
    image: "https://images.unsplash.com/photo-1624378515195-6bbdb73f2197?w=800&h=1000&fit=crop",
    sizes: ["S", "M", "L"],
    category: "Брюки"
  },
  {
    id: "23",
    name: "Парка с мехом",
    description: "Теплая парка с меховым капюшоном. Защитит от самых суровых морозов.",
    price: 14990,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&h=1000&fit=crop",
    sizes: ["M", "L", "XL", "XXL"],
    category: "Пальто"
  },
  {
    id: "24",
    name: "Платье-рубашка",
    description: "Универсальное платье-рубашка из хлопка. Идеально для офиса и повседневной носки.",
    price: 4490,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1000&fit=crop",
    sizes: ["XS", "S", "M", "L"],
    category: "Платья"
  },
  {
    id: "25",
    name: "Ветровка",
    description: "Легкая ветровка из водоотталкивающей ткани. Идеальна для активного отдыха и путешествий.",
    price: 5990,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    category: "Куртки"
  },
  {
    id: "26",
    name: "Джинсы с завышенной талией",
    description: "Стильные джинсы с завышенной талией. Подчеркнут талию и добавят образу женственности.",
    price: 4990,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=1000&fit=crop",
    sizes: ["26", "28", "30", "32", "34"],
    category: "Джинсы"
  },
  {
    id: "28",
    name: "Платье с открытыми плечами",
    description: "Элегантное платье с открытыми плечами. Идеально для романтических вечеров.",
    price: 6490,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1000&fit=crop",
    sizes: ["XS", "S", "M", "L"],
    category: "Платья"
  },
  {
    id: "29",
    name: "Куртка-аляска",
    description: "Теплая куртка-аляска с меховой отделкой. Защитит от холода и добавит стиля.",
    price: 12990,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop",
    sizes: ["M", "L", "XL", "XXL"],
    category: "Куртки"
  }
];

