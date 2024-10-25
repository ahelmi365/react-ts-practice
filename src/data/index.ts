import { IProduct } from "../interfaces/inedx";


export const products: IProduct[] = [
    {
      id: "1",
      title: "Wireless Headphones",
      describtion: "Noise-canceling headphones with deep bass and long battery life.",
      imageURL: "src/assets/images/products/1.jfif",
      price: "120.99",
      colors: ["blue-500", "indigo-600", "purple-700"],
      category: {
        name: "Electronics",
        imageURL: "src/assets/images/products/1.jfif"
      }
    },
    {
      id: "2",
      title: "Smart Watch",
      describtion: "Water-resistant smartwatch with fitness tracking and notifications.",
      imageURL: "src/assets/images/products/2.jfif",
      price: "199.99",
      colors: ["gray-700", "rose-500", "emerald-400"],
      category: {
        name: "Wearables",
        imageURL: "src/assets/images/products/2.jfif"
      }
    },
    {
      id: "3",
      title: "Running Shoes",
      describtion: "Lightweight running shoes with responsive cushioning.",
      imageURL: "src/assets/images/products/3.jfif",
      price: "79.99",
      colors: ["red-600", "blue-700", "yellow-400"],
      category: {
        name: "Sports",
        imageURL: "src/assets/images/products/3.jfif"
      }
    },
    {
      id: "4",
      title: "Gaming Laptop",
      describtion: "High-performance laptop with powerful graphics card.",
      imageURL: "src/assets/images/products/4.jfif",
      price: "1200.00",
      colors: ["gray-800", "blue-900", "orange-500"],
      category: {
        name: "Computers",
        imageURL: "src/assets/images/products/4.jfif"
      }
    },
    {
      id: "5",
      title: "Bluetooth Speaker",
      describtion: "Portable speaker with stereo sound and deep bass.",
      imageURL: "src/assets/images/products/5.jfif",
      price: "49.99",
      colors: ["red-500", "yellow-600", "pink-400"],
      category: {
        name: "Audio",
        imageURL: "src/assets/images/products/5.jfif"
      }
    },
    {
      id: "6",
      title: "Digital Camera",
      describtion: "Compact camera with 24MP sensor and 4K video recording.",
      imageURL: "src/assets/images/products/6.jfif",
      price: "299.99",
      colors: ["gray-600", "cyan-700", "teal-500"],
      category: {
        name: "Photography",
        imageURL: "src/assets/images/products/6.jfif"
      }
    },
    {
      id: "7",
      title: "Yoga Mat",
      describtion: "Eco-friendly yoga mat with non-slip surface.",
      imageURL: "src/assets/images/products/7.avif",
      price: "25.99",
      colors: ["purple-500", "green-400", "blue-300"],
      category: {
        name: "Fitness",
        imageURL: "src/assets/images/products/7.avif"
      }
    },
    {
      id: "8",
      title: "Smartphone",
      describtion: "Latest model with a high-resolution display and long-lasting battery.",
      imageURL: "src/assets/images/products/8.jfif",
      price: "899.99",
      colors: ["blue-600", "rose-700", "lime-500"],
      category: {
        name: "Mobile Phones",
        imageURL: "src/assets/images/products/8.jfif"
      }
    },
    {
      id: "9",
      title: "Tablet",
      describtion: "Lightweight tablet with high-resolution screen, perfect for reading and watching videos.",
      imageURL: "src/assets/images/products/9.jfif",
      price: "349.99",
      colors: ["yellow-400", "gray-500", "indigo-300"],
      category: {
        name: "Tablets",
        imageURL: "src/assets/images/products/9.jfif"
      }
    },
    {
      id: "10",
      title: "Electric Toothbrush",
      describtion: "Rechargeable toothbrush with multiple cleaning modes.",
      imageURL: "src/assets/images/products/10.jfif",
      price: "59.99",
      colors: ["blue-400", "pink-300", "lime-600"],
      category: {
        name: "Personal Care",
        imageURL: "src/assets/images/products/10.jfif"
      }
    }
  ];
  
  