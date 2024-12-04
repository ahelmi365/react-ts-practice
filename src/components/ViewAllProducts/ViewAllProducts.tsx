import Dialog from "../Dialog/Dialog";
import Button from "../ui/Button/Button";
import ViewSelectedColors from "../ViewSelectedColors/ViewSelectedColors";
import useViewAllProducts from "./useViewAllProducts";

const ViewAllProducts = () => {
  const {
    modalTitle,
    handlOpenNewProductModal,
    renderedProductList,
    dialogRef,
    renderedAddNewProductInputs,
    product,
    renderedColorList,
    handleSubmitNewProduct,
    handleCancelNewProduct,
  } = useViewAllProducts();
  return (
    <>
      <Button
        onClick={handlOpenNewProductModal}
        className="bg-blue-500 text-white basis-1/6 focus:bg-blue-900 max-w-56 mb-8"
      >
        Add New Product
      </Button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2">
        {renderedProductList}
      </div>

      {/* add new produc modal */}
      <Dialog title={modalTitle} dialogRef={dialogRef}>
        <form action="">
          <div>{renderedAddNewProductInputs}</div>

          <div className="seelected-colors mb-3 min-h-5">
            <ViewSelectedColors colors={product.colors} />
          </div>

          <div className="flex gap-1 flex-wrap">{renderedColorList}</div>

          <div className="flex gap-4 mt-4 flex-col sm:flex-row sm:gap-12">
            <Button
              type="submit"
              className="bg-blue-500 text-white basis-1/6 focus:bg-blue-900 max-w-56"
              onClick={handleSubmitNewProduct}
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
    </>
  );
};

export default ViewAllProducts;
