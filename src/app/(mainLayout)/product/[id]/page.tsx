import ProductDetails from "./_components/ProductDetails";
import ProductTab from "./_components/ProductTab";

const ProductDetailsPage = () => {
  return (
    <div className="my-16">
      <div className="bg-[#fff6f6]">
        <ProductDetails></ProductDetails>
      </div>
      <ProductTab></ProductTab>
    </div>
  );
};

export default ProductDetailsPage;
