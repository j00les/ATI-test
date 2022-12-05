import CreditCard from "../components/CreditCard";
import NavBar from "../components/NavBar";
import { ReactComponent as Info } from "../assets/error_outline-1.svg";
import { ReactComponent as Calendar } from "../assets/date_range-24px.svg";
import { ReactComponent as Flight } from "../assets/airplanemode_active-1.svg";
import { ReactComponent as Arrow } from "../assets/arrow_right_alt-1.svg";
export default function CheckoutPage() {
  return (
    <>
      <div className="flex flex-col h-[100vh]">
        <NavBar />
        <section className="w-fit  h-full mx-auto">
          <div id="wrapper" className="flex w-fit mx-40  h-fit my-10 gap-6">
            <div className="grid grid-cols-4 border rounded-lg">
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
            </div>
            <div className="col-start-5 border col-end-6 p-4 h-fit">
              <div className="flex justify-between items-center border-b-[1px] border-dashed border-[#767676] pb-2 mb-2">
                <p className="text-sidebar-text uppercase font-normal">your booking</p>
                <p className="text-sm text-[#009edb]">Details</p>
              </div>
              <div className="border-b-[1px] border-grayborder">
                <p className="uppercase">list of passenger(s)</p>

                <div className="flex justify-between text-sm pb-2">
                  <p className="capitalize">Mr. John Doe</p>
                  <p className="capitalize text-sm">Adult</p>
                </div>
              </div>

              <div className="border-b pb-2 border-grayborder">
                <p className=" uppercase mt-2 ml-2">Flight</p>
                <div className="flex text-sm gap-1">
                  <Flight />

                  <p className="ml-1">Jakarta(CGK)</p>

                  <div className="mx-1">
                    <Arrow />
                  </div>

                  <p>Denpasar(DPS)</p>
                </div>
                <div className="flex">
                  <Calendar />
                  <p className="ml-2 text-sm">23 Nov 2020</p>
                </div>
              </div>
              <div className="mt-2">
                <p className="uppercase">price</p>
                <div className="flex justify-between">
                  <p>Total</p>
                  <div className="flex items-center w-[7rem]">
                    <div className="mr-[2px] mt-[3px]">
                      <Info />
                    </div>
                    <p className="items-end font-semibold">Rp.2.238.000</p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>

          <div className="bg-footer flex text-white px-[7rem] py-2 justify-between">
            <div>
              <p>© 2020. PT Garuda Indonesia(Persero) Tbk. All right reserved.</p>
            </div>
            <div className="flex justify-evenly gap-5">
              <p>Privacy Policy</p>
              <p>Contact Us</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
