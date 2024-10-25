interface IProps {}
import Button from "../ui/Button/Button";
import Image from "./../Image/Image";

const ProductCard = ({}: IProps) => {
  return (
    <div className="border p-2 rounded-md flex flex-col">
      <Image
        url="https://d2tez01fe91909.cloudfront.net/wp-content/uploads/2024/02/shutterstock_743270791.jpg.webp"
        alt="product name"
        className="scale-95 hover:scale-100 transition-all ease-in-out duration-500 rounded-md mb-2"
      />

      <h3>2022 Mozila Car</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quos sit
        aspernatur tempore
      </p>
      <div className="flex gap-1 my-2">
        <span className="w-5 h-5 bg-indigo-500 rounded-full cursor-pointer"></span>
        <span className="w-5 h-5 bg-green-500 rounded-full cursor-pointer"></span>
        <span className="w-5 h-5 bg-red-500 rounded-full cursor-pointer"></span>
      </div>

      <div className="flex justify-between items-center">
        <span>$500,000</span>
        <Image
          url="https://d2tez01fe91909.cloudfront.net/wp-content/uploads/2024/02/shutterstock_743270791.jpg.webp"
          alt="product name"
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
