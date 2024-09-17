import { userInfo } from "@/app/(withoutMainLayout)/action/authAction";
import CheckoutTotal from "../_components/checkOutTotal/CheckoutTotal";
import CheckOutForm from "./_components/CheckOutForm";
const CheckOutPage = async () => {
  const user = await userInfo();
  return (
    <div className="font-[sans-serif] lg:flex lg:items-center lg:justify-center lg:h-screen max-lg:py-4">
      <div className="bg-purple-100 p-8 w-full max-w-5xl max-lg:max-w-xl mx-auto rounded-md mb-20">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center">
          Checkout
        </h2>

        <div className="grid lg:grid-cols-3 gap-6 max-lg:gap-8 mt-16">
          <div className="lg:col-span-2">
            <CheckOutForm user={user?.email}></CheckOutForm>
          </div>

          <CheckoutTotal></CheckoutTotal>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
