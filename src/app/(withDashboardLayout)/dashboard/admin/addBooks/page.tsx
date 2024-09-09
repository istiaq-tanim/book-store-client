import AddProduct from "@/app/(withDashboardLayout)/_components/AddBook";

const AddBookPage = () => {
  return (
    <div>
      <div className="mb-20 mt-5">
        <p className="text-center pb-5 font-extrabold text-2xl">Add Book</p>
        <AddProduct></AddProduct>
      </div>
    </div>
  );
};

export default AddBookPage;
