import Filter from "./_components/Filter/Filter";
import FilterItem from "./_components/Filter/FilterItem";
import NoProducts from "./_components/Filter/NoProduct";
type TSearchParams = {
  ratings: string;
  price: string;
  category: string;
};

const ShopPage = async ({ searchParams }: { searchParams: TSearchParams }) => {
  const { ratings, price, category } = searchParams;

  let url;
  let refineRating;
  let refinePrice;
  let refineCategory;

  const decodedRating = decodeURI(ratings);
  const decodedPrice = decodeURI(price);
  const decodeCategory = decodeURI(category);
  if (
    decodedRating === "undefined" &&
    decodedPrice === "undefined" &&
    decodeCategory === "undefined"
  ) {
    refineRating = "";
    refinePrice = "";
    refineCategory = "";

    url = "http://localhost:5000/books";
  } else if (
    decodedRating !== "undefined" &&
    decodedPrice !== "undefined" &&
    decodeCategory !== "undefined"
  ) {
    refinePrice = decodedPrice;
    refineRating = decodedRating;
    refineCategory = decodeCategory;

    url = `http://localhost:5000/books?ratings=${refineRating}&price=${refinePrice}&category=${refineCategory}`;
  } else if (decodedPrice !== "undefined" && decodedRating !== "undefined") {
    refinePrice = decodedPrice;
    refineRating = decodedRating;
    url = `http://localhost:5000/books?price=${refinePrice}&ratings=${refineRating}`;
  } else if (decodedPrice !== "undefined" && decodeCategory !== "undefined") {
    refinePrice = decodedPrice;
    refineCategory = decodeCategory;
    url = `http://localhost:5000/books?price=${refinePrice}&category=${refineCategory}`;
  } else if (decodedRating !== "undefined" && decodeCategory !== "undefined") {
    refineRating = decodedRating;
    refineCategory = decodeCategory;
    url = `http://localhost:5000/books?ratings=${refineRating}&category=${refineCategory}`;
  } else if (decodedPrice !== "undefined") {
    refinePrice = decodedPrice;
    url = `http://localhost:5000/books?price=${refinePrice}`;
  } else if (decodedRating !== "undefined") {
    refineRating = decodedRating;
    url = `http://localhost:5000/books?ratings=${refineRating}`;
  } else if (decodeCategory !== "undefined") {
    refineCategory = decodeCategory;
    url = `http://localhost:5000/books?category=${refineCategory}`;
  }

  const response = await fetch(url as string, {
    cache: "no-store",
  });
  const result = await response.json();
  return (
    <div className="container grid grid-cols-12 my-10 gap-5">
      <Filter></Filter>
      {result?.data.length > 0 ? (
        <FilterItem products={result?.data}></FilterItem>
      ) : (
        <NoProducts></NoProducts>
      )}
    </div>
  );
};

export default ShopPage;
