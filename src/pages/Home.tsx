import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-14 px-6 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 text-gray-900 tracking-tight">
          Коллекция одежды из Европы
        </h1>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

