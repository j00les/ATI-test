import Input from "./Input";
import { ReactComponent as MasterCard } from "../assets/Group -25.svg";

export default function CreditCard() {
  return (
    <section className="px-10">
      <div id="card-details">
        <article className="flex justify-between">
          <p className="uppercase">card details</p>
          <p className="uppercase">secure</p>
        </article>
        <article className="flex items-center">
          <Input cardNumInput={true} />
          <span className="self-center mt-6">
            <MasterCard />
          </span>
        </article>
        <article>
          <Input expDateInput={true} />
        </article>
      </div>
      <div id="billing-info" className="mt-2">
        <article>
          <p className="uppercase">billing information</p>
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
            <p className="text-[#76bdbf] uppercase">Free</p>
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
            <article>icons</article>
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
