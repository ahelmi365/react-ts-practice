import { IProduct } from "../../interfaces/inedx";
import { sliceText } from "../../utils/functions";
import Button from "../ui/Button/Button";
import Image from "./../Image/Image";

interface IProps {
  product: IProduct;
}


const ProductCard = ({ product }: IProps) => {
  const {  title, describtion, imageURL, price, colors, category } = product;
  return (
    <div className="order p-2 border rounded-md flex flex-col ">
      <div className={""} >
        <Image
          url={imageURL}
          alt={title}
          className="scale-95 hover:scale-100 transition-all ease-in-out duration-500 rounded-md mb-2"
        />
      </div>

      <h3>{title}</h3>
      <p>{sliceText(describtion, 60)}</p>
      <div className="flex gap-1 my-2">
        {colors.map((color) => (
          <span
          key={color}
            className={`w-5 h-5 bg-${color} rounded-full cursor-pointer border-2`}
          ></span>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <span>${price}</span>
        <Image
          url={category.imageURL}
          alt={category.name}
          className="h-10 w-10 border rounded-full object-center cursor-pointer"
        />
      </div>
      <div className="flex gap-8 mt-4">
        <Button
          className="bg-green-500 border-green-300  text-white"
          onClick={() => alert("clicked")}
        >
          Success
        </Button>
        <Button className="bg-blue-500 border-blue-300 text-white">Edit</Button>
        <Button className="bg-red-500 rder-red-300   text-white">Delete</Button>
      </div>
    </div>
  );
};

export default ProductCard;
