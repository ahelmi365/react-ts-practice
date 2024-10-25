import ProductCard from "./components/ProductCard/ProductCard";
import { products } from "./data";

function App() {
  const renderedProductList = products.map((product) => (
    <ProductCard product={product} key={product.id} />
  ));
  return (
    <main className="container m-auto p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2">
        {renderedProductList}
      </div>
    </main>
  );
}

export default App;
