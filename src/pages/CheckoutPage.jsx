import CreditCard from "../components/CreditCard";
import NavBar from "../components/NavBar";
import { ReactComponent as Info } from "../assets/error_outline-1.svg";
import { ReactComponent as Calendar } from "../assets/date_range-24px.svg";
import { ReactComponent as Flight } from "../assets/airplanemode_active-1.svg";
import { ReactComponent as Arrow } from "../assets/arrow_right_alt-1.svg";
import { ReactComponent as Expand } from "../assets/expand_more-24px.svg";
import { useState } from "react";
import Akulaku from "../components/Akulaku";
import ShopeePay from "../components/ShopeePay";
import GoPay from "../components/GoPay";
import BCA from "../components/BCA";
import BRI from "../components/BRI";
import Indomaret from "../components/Indomaret";
import Alfamart from "../components/Alfamart";
export default function CheckoutPage() {
  const [paymentPage, setPaymentPage] = useState({
    akulaku: null,
    creditCard: true,
    shopeePay: null,
    goPay: null,
    BCA: null,
    BRI: null,
    indomaret: null,
    alfamart: null,
  });
  return (
    <>
      <div className="flex flex-col h-[100vh]">
        <NavBar />
        <section className="w-[80vw]  h-100vh mx-auto">
          <div id="wrapper" className="flex w-full mx-auto h-full my-10 gap-6">
            <div className="grid grid-cols-4 border rounded-lg border-l-none">
              <div className="border-r">
                <ul className="flex flex-col gap-8 p-10">
                  <li
                    onClick={() => setPaymentPage({ creditCard: true })}
                    className="text-xl text-sidebar-text font-bold"
                  >
                    <p className="cursor-pointer">Credit/Debit Card</p>
                  </li>

                  <li className="dropdown dropdown-hover">
                    <label tabIndex={0} className="text-sidebar-text font-semibold text-xl">
                      <div className="flex">
                        <p className="cursor-pointer">Bank Transfer</p>
                        <span className="ml-2">
                          <Expand />
                        </span>
                      </div>
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                      <li onClick={() => setPaymentPage({ BCA: true })}>
                        <a>BCA</a>
                      </li>
                      <li onClick={() => setPaymentPage({ BRI: true })}>
                        <a>BRI</a>
                      </li>
                    </ul>
                  </li>
                  <li onClick={() => setPaymentPage({ goPay: true })} className="text-xl text-sidebar-text font-bold">
                    <p className="cursor-pointer">GoPay</p>
                  </li>

                  <li
                    onClick={() => setPaymentPage({ alfamart: true })}
                    className="text-xl text-sidebar-text font-bold"
                  >
                    <p className="cursor-pointer">Alfamart</p>
                  </li>

                  <li
                    className="text-sidebar-text font-semibold text-xl"
                    onClick={() => setPaymentPage({ indomaret: true })}
                  >
                    <p className="cursor-pointer">Indomaret</p>
                  </li>
                  <li className="dropdown dropdown-hover">
                    <label tabIndex={0} className="text-sidebar-text font-semibold text-xl">
                      <div className="flex">
                        <p className="cursor-pointer">BNPL Services</p>
                        <span className="ml-2">
                          <Expand />
                        </span>
                      </div>
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                      <li onClick={() => setPaymentPage({ akulaku: true })}>
                        <a>Akulaku</a>
                      </li>
                      <li onClick={() => setPaymentPage({ shopeePay: true })}>
                        <a>ShopeePay</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="col-start-2 col-end-5">
                <section className="px-[5rem] py-7">
                  {paymentPage.akulaku && <Akulaku />}
                  {paymentPage.shopeePay && <ShopeePay />}
                  {paymentPage.creditCard && <CreditCard />}
                  {paymentPage.goPay && <GoPay />}
                  {paymentPage.BCA && <BCA />}
                  {paymentPage.BRI && <BRI />}
                  {paymentPage.indomaret && <Indomaret />}
                  {paymentPage.alfamart && <Alfamart />}
                </section>
              </div>
            </div>
            <div className="col-start-5 border col-end-6 p-4 h-fit">
              <div className="flex justify-between items-center border-b-[1px] border-dashed border-[#767676] pb-2 mb-2">
                <p className="text-sidebar-text uppercase font-semibold">your booking</p>
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
            </div>
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
