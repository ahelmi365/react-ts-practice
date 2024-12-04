import { IProduct } from "../../interfaces/inedx";
import { sliceText } from "../../utils/functions";
import Button from "../ui/Button/Button";
import CircleColor from "../ui/CircleColor/CircleColor";
import Image from "./../Image/Image";

interface IProps {
  product: IProduct;
  setProduct: React.Dispatch<React.SetStateAction<IProduct>>;
  handleEditProductDetails: (product: IProduct) => void;
}

const ProductCard = ({
  product,
  setProduct,
  handleEditProductDetails,
}: IProps) => {
  const { id, title, description, imageURL, price, colors, category } = product;
  return (
    <div className="order p-2 border rounded-md flex flex-col ">
      <div className={""}>
        <Image
          url={imageURL}
          alt={title}
          className="scale-95 hover:scale-100 transition-all ease-in-out duration-500 rounded-md mb-2"
        />
      </div>

      <h3>{title}</h3>
      <p>{sliceText(description, 60)}</p>
      <div className="flex gap-1 my-2">
        {colors.map((color) => (
          <CircleColor colorCode={color} key={color} />
        ))}
      </div>

      <div className="flex justify-between items-center">
        <span>${price}</span>
      </div>
      <div className="flex justify-between gap-8 mt-4">
        <Button
          className="bg-blue-500 border-blue-300 text-white"
          onClick={() => handleEditProductDetails(product)}
        >
          Edit
        </Button>
        <Button className="bg-red-500 rder-red-300 text-white">Delete</Button>
      </div>
    </div>
  );
};

export default ProductCard;
