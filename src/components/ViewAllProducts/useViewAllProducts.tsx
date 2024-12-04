import { FormEvent, useRef, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import CircleColor from "../../components/ui/CircleColor/CircleColor";
import ErrorMessage from "../../components/ui/ErrorMessage/ErrorMessage";
import InputField from "../../components/ui/InputField/InputField";
import { colors, newProductFormInputs, products } from "../../data";
import { IProduct, IProductInfoForm } from "../../interfaces/inedx";
import { validateProductInfo } from "../../validation/inedx";

const useViewAllProducts = () => {
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

  const [modalTitle, setModalTitle] = useState("Add New Product");
  // -------------- HANDLERS ---------------------
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setErrorMessages({ ...errorMessages, [name]: "" });
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmitNewProduct = (event: FormEvent) => {
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
      products.push(product);
      dialogRef?.current?.close();
    }
  };

  const handleCancelNewProduct = () => {
    setProduct(initialProductInfo);
    setErrorMessages(initialErrorMessages);
    dialogRef?.current?.close();
  };

  const handleSelectNewProductColor = (color: string) => {
    if (product.colors.includes(color)) {
      const colorIndex = product.colors.findIndex((c) => c === color);
      product.colors.splice(colorIndex, 1);
    } else {
      product.colors.push(color);
    }
    setProduct({ ...product, colors: product.colors });
    console.log({ product });
  };

  const handlOpenNewProductModal = () => {
    setModalTitle("Add New Product");
    setProduct(initialProductInfo);
    setErrorMessages(initialErrorMessages);
    dialogRef?.current?.showModal();
  };

  const handleEditProductDetails = (product: IProduct) => {
    setModalTitle("Edit Product");
    setProduct(product);
    dialogRef.current?.showModal();
  };
  // -------------- RENDER ---------------------
  const renderedProductList = products.map((product) => (
    <ProductCard
      product={product}
      key={product.id}
      setProduct={setProduct}
      handleEditProductDetails={handleEditProductDetails}
    />
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
          onChange={handleInputChange}
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
        console.log("cliced color");
        handleSelectNewProductColor(color);
      }}
    />
  ));

  return {
    modalTitle,
    handlOpenNewProductModal,
    renderedProductList,
    dialogRef,
    renderedAddNewProductInputs,
    product,
    renderedColorList,
    handleSubmitNewProduct,
    handleCancelNewProduct,
  };
};

export default useViewAllProducts;
