import CreditCard from "../components/CreditCard";
import NavBar from "../components/NavBar";
export default function CheckoutPage() {
  return (
    <>
      <div className="flex flex-col h-[100vh]">
        <NavBar />
        <section className="w-fit  h-full mx-auto">
          <div className="grid grid-cols-5 border rounded-lg my-10 mx-40">
            <div className="border border-r">
              <ul className="flex flex-col gap-8">
                <li className="text-xl text-sidebar-text font-bold">
                  <p>Credit/Debit Card</p>
                </li>
                <li className="text-xl text-sidebar-text font-bold">
                  <p>KlikBCA</p>
                </li>
                <li className="text-xl text-sidebar-text font-bold">
                  <p>e-Pay BRI</p>
                </li>
                <li className="text-xl text-sidebar-text font-bold">
                  <p>CIMB Clicks</p>
                </li>
                <li className="text-xl text-sidebar-text font-bold">
                  <p>GoPay</p>
                </li>
                <li className="text-xl text-sidebar-text font-bold">
                  <p>ATM</p>
                </li>
                <li className="text-xl text-sidebar-text font-bold">
                  <p>BNI Mobile</p>
                </li>
                <li className="text-xl text-sidebar-text font-bold">
                  <p>ShopeePay</p>
                </li>
                <li className="text-xl text-sidebar-text font-bold">
                  <p>Bank Transfer</p>
                </li>
                <li className="text-xl text-sidebar-text font-bold">
                  <p>Alfamart</p>
                </li>
                <li className="text-xl text-sidebar-text font-bold">
                  <p>Indomaret</p>
                </li>
              </ul>
            </div>
            <div className="col-start-2 col-end-5">
              <CreditCard />
            </div>

            <div className="col-start-5 border">
              <div className=" container columns-2 w-20 border">
                <p>your booking</p>
                <p>Details</p>
              </div>
            </div>
          </div>
          <div className="border bg-footer bottom-0">
            <p>©2020. PT Garuda Indonesia(Persero) Tbk. All right reserved.</p>
          </div>
        </section>
      </div>
    </>
  );
}
