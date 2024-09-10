import ProductDetails from "./_components/ProductDetails";
import ProductTab from "./_components/ProductTab";

const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const response = await fetch(`http://localhost:5000/books/${id}`, {
    cache: "no-store",
  });

  const result = await response.json();
  return (
    <div className="my-16">
      <div className="bg-[#fff6f6]">
        <ProductDetails book={result?.data}></ProductDetails>
      </div>
      <ProductTab book={result?.data}></ProductTab>
    </div>
  );
};

export default ProductDetailsPage;
