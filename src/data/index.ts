import { IFormInput, IProduct } from "../interfaces/inedx";

export const products: IProduct[] = [
  {
    id: "1",
    title: "Wireless Headphones",
    describtion:
      "Noise-canceling headphones with deep bass and long battery life.",
    imageURL: "src/assets/images/products/1.jfif",
    price: "120.99",
    colors: ["blue-500", "indigo-600", "purple-700"],
    category: {
      name: "Electronics",
      imageURL: "src/assets/images/products/1.jfif",
    },
  },
  {
    id: "2",
    title: "Tablet",
    describtion:
      "Lightweight tablet with high-resolution screen, perfect for reading and watching videos.",
    imageURL: "src/assets/images/products/1.jfif",
    price: "349.99",
    colors: ["yellow-400", "gray-500", "indigo-300"],
    category: {
      name: "Tablets",
      imageURL: "src/assets/images/products/1.jfif",
    },
  },
  {
    id: "3",
    title: "Running Shoes",
    describtion: "Lightweight running shoes with responsive cushioning.",
    imageURL: "src/assets/images/products/1.jfif",
    price: "79.99",
    colors: ["red-600", "blue-700", "yellow-400"],
    category: {
      name: "Sports",
      imageURL: "src/assets/images/products/1.jfif",
    },
  },
  {
    id: "4",
    title: "Gaming Laptop",
    describtion: "High-performance laptop with powerful graphics card.",
    imageURL: "src/assets/images/products/1.jfif",
    price: "1200.00",
    colors: ["gray-800", "blue-900", "orange-500"],
    category: {
      name: "Computers",
      imageURL: "src/assets/images/products/1.jfif",
    },
  },
  {
    id: "5",
    title: "Bluetooth Speaker",
    describtion: "Portable speaker with stereo sound and deep bass.",
    imageURL: "src/assets/images/products/1.jfif",
    price: "49.99",
    colors: ["red-500", "yellow-600", "pink-400"],
    category: {
      name: "Audio",
      imageURL: "src/assets/images/products/1.jfif",
    },
  },
  {
    id: "6",
    title: "Digital Camera",
    describtion: "Compact camera with 24MP sensor and 4K video recording.",
    imageURL: "src/assets/images/products/1.jfif",
    price: "299.99",
    colors: ["gray-600", "cyan-700", "teal-500"],
    category: {
      name: "Photography",
      imageURL: "src/assets/images/products/1.jfif",
    },
  },
];

export const newProductFormInputs: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
    placeholder: "Product Title",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
    placeholder: "Product Description",
  },
  {
    id: "image",
    name: "image",
    label: "Product Image URL",
    type: "text",
    placeholder: "Product Image URL",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
    placeholder: "Product Price",
  },
];
