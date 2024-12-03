import { FormEvent, useRef, useState } from "react";
import Dialog from "./components/Dialog/Dialog";
import ProductCard from "./components/ProductCard/ProductCard";
import { colors, newProductFormInputs, products } from "./data";
import { IProduct, IProductInfoForm } from "./interfaces/inedx";
import Button from "./components/ui/Button/Button";
import InputField from "./components/ui/InputField/InputField";
import { validateProductInfo } from "./validation/inedx";
import ErrorMessage from "./components/ui/ErrorMessage/ErrorMessage";
import CircleColor from "./components/ui/CircleColor/CircleColor";

function App() {
  // -------------- CONSTS ---------------------
  const initialProductInfo = {
    id: "",
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  const initialErrorMessages = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };
  // -------------- REFS ---------------------
  const dialogRef = useRef<HTMLDialogElement>(null);
  // -------------- STATES ---------------------
  const [product, setProduct] = useState<IProduct>(initialProductInfo);
  const [errorMessages, setErrorMessages] =
    useState<IProductInfoForm>(initialErrorMessages);
  // -------------- HANDLERS ---------------------
  const handleInpuChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setErrorMessages({ ...errorMessages, [name]: "" });
    // const newErrorMessages = validateProductInfo({ ...product, [name]: value });
    // setErrorMessages(newErrorMessages);

    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleAddNewProduct = (event: FormEvent) => {
    event.preventDefault();
    setProduct({
      ...product,
      id: Date.now().toString(),
    });
    console.log({ product });
    const errors = validateProductInfo(product);
    setErrorMessages(errors);
    // if (Object.values(errors).join("").length === 0) {
    //   dialogRef?.current?.close();
    // }
    const hasErrorMessage = Object.values(errors).some(
      (errorMessage: string) => errorMessage.length > 0
    );
    if (!hasErrorMessage) {
      dialogRef?.current?.close();
    }
  };

  const handleCancelNewProduct = () => {
    setProduct(initialProductInfo);
    setErrorMessages(initialErrorMessages);
    dialogRef?.current?.close();
  };

  const handleColorClick = (color: string) => {
    console.log({color})
  };
  // -------------- RENDER ---------------------
  const renderedProductList = products.map((product) => (
    <ProductCard product={product} key={product.id} setProduct={setProduct} />
  ));

  const renderedAddNewProductInputs = newProductFormInputs.map((input) => (
    <div key={input.id}>
      <div className="label text-gray-700 font-medium text-sm mb-1">
        <label htmlFor={input.id}>{input.label}</label>
      </div>
      <div className="input mb-3 ">
        <InputField
          id={input.id}
          label={input.label}
          name={input.name}
          type={input.type}
          placeholder={input.placeholder || ""}
          value={product[input.name]}
          onChange={handleInpuChange}
        />
        {/* <p className="text-red-900 text-sm">{errorMessages[input.name]}</p> */}
        <ErrorMessage text={errorMessages[input.name]} />
      </div>
    </div>
  ));

  const renderedColorList = colors.map((color) => (
    <CircleColor
      colorCode={color}
      key={color}
      onClick={() => {
        console.log("cliced color")
        handleColorClick(color)}}
    />
  ));

  return (
    <main className="container m-auto p-2">
      <Button
        onClick={() => {
          const dialog = document.querySelector("dialog");
          dialog?.showModal();
        }}
        className="bg-blue-500 text-white basis-1/6 focus:bg-blue-900 max-w-56 mb-8"
      >
        Add New Product
      </Button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2">
        {renderedProductList}
      </div>
      <Dialog title={"Add New Product"} dialogRef={dialogRef}>
        <form action="">
          <div>{renderedAddNewProductInputs}</div>

          <div className="flex gap-1 flex-wrap">{renderedColorList}</div>

          <div className="flex gap-4 mt-4 flex-col sm:flex-row sm:gap-12">
            <Button
              type="submit"
              className="bg-blue-500 text-white basis-1/6 focus:bg-blue-900 max-w-56"
              onClick={handleAddNewProduct}
            >
              Submit
            </Button>
            <Button
              type="button"
              className="bg-red-500 text-white basis-1/6 focus:bg-red-900 max-w-56"
              onClick={handleCancelNewProduct}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Dialog>
    </main>
  );
}

export default App;
