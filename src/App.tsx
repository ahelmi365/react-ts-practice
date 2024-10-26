import { useState } from "react";
import Dialog from "./components/Dialog/Dialog";
import ProductCard from "./components/ProductCard/ProductCard";
import { newProductFormInputs, products } from "./data";
import { IProduct } from "./interfaces/inedx";
import Button from "./components/ui/Button/Button";
import InputField from "./components/ui/InputField/InputField";

function App() {
  // -------------- STATE ---------------------
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  // -------------- HANDLER ---------------------
  // -------------- RENDER ---------------------
  const renderedProductList = products.map((product) => (
    <ProductCard product={product} key={product.id} setProduct={setProduct} />
  ));

  const renderedAddNewProductInputs = newProductFormInputs.map((input) => (
    <div key={input.id}>
      <div className="label text-gray-700 font-medium text-sm mb-1">
        <label htmlFor={input.id}>{input.label}</label>
      </div>
      <div className="input">
        <InputField
          id={input.id}
          label={input.label}
          name={input.name}
          type={input.type}
          placeholder={input.placeholder || ""}
        />
      </div>
    </div>
  ));
  return (
    <main className="container m-auto p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2">
        {renderedProductList}
      </div>
      <Dialog title={"Add New Product"}>
        {/* <h2>hiiii</h2> */}
        <div>{renderedAddNewProductInputs}</div>

        <div className="flex gap-4 mt-4 flex-col sm:flex-row sm:gap-12">
          <Button className="bg-red-500 text-white basis-1/6 focus:bg-red-900 max-w-56">Cancel</Button>
          <Button className="bg-blue-500 text-white basis-1/6 focus:bg-blue-900 max-w-56">Submit</Button>
        </div>
      </Dialog>
    </main>
  );
}

export default App;
