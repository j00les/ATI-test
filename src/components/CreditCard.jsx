import Input from "./Input";
import { ReactComponent as MasterCard } from "../assets/Group -25.svg";
import { ReactComponent as Lock } from "../assets/lock-3.svg";
import { ReactComponent as Info } from "../assets/error_outline-1.svg";

export default function CreditCard() {
  return (
    <section>
      <div id="card-details font-semibold text-sm">
        <article className="flex justify-between border-b border-dashed border-grayborder mb-4 pb-4">
          <p className="uppercase font-semibold text-sidebar-text">card details</p>
          <div className="flex text-graytext">
            <div className="mt-[5px] mr-1">
              <Lock />
            </div>
            <p className="capitalize">secure server</p>
          </div>
        </article>

        <article className="flex">
          <Input cardNumInput={true} />

          <span className="self-center mt-6 ml-[5rem]">
            <MasterCard />
          </span>
        </article>
        <article>
          <Input expDateInput={true} />
        </article>
      </div>
      <div id="billing-info" className="mt-2 font-semibold text-sm">
        <article className="border-b border-dashed pb-4 mt-7 mb-2 border-grayborder">
          <p className="uppercase text-base  text-sidebar-text ">billing information</p>
        </article>
        <article>
          <Input cardHolderInput={true} />
        </article>
        <article>
          <Input addressInput={true} />
        </article>
        <article>
          <Input provinceInput={true} />
        </article>
        <article>
          <Input emailInput={true} />
        </article>
        <article>
          <Input redeemInput={true} />
        </article>
      </div>
      <div id="price-details" className="mt-5  bg-[#f7f7f7] py-4 px-8">
        <p className="uppercase text-[#105088]">Price details</p>
        <div className="border-b pb-1 mb-1 flex flex-col gap-1">
          <div className="flex justify-between">
            <p>Air Transportation Charges</p>
            <p>IDR 2.167.000</p>
          </div>
          <div className="flex justify-between">
            <p>Baggage</p>
            <p className="text-[#76bdbf] font-semibold uppercase">Free</p>
          </div>
          <div className="flex justify-between">
            <p>Flight Insurance</p>
            <p>IDR 60.000</p>
          </div>
          <div className="flex justify-between">
            <p>Service Fee</p>
            <p>IDR 11.000</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p>Total Price</p>

          <div className="flex justify-between">
            <div className="mr-[2px] mt-[3px]">
              <Info />
            </div>
            <p>IDR 2.238.000</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <button className="btn w-full rounded-none capitalize border-dashed border-[#105088] bg-white mt-8 text-[#105088]">
          Use Promo Code
        </button>
        <button className="w-1/2 border-none btn self-end bg-[#105088] mt-5">pay now</button>
      </div>
    </section>
  );
}
