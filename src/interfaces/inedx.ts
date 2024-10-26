export interface IProduct {
  id: string;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageURL: string;
  };
}

type inputName = "title" | "description" | "imageURL" | "price";
export interface IFormInput {
  id: string;
  name: inputName;
  label: string;
  type: string;
  placeholder?: string;
}
