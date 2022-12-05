import { ReactComponent as Help } from "../assets/help-1.svg";
export default function Input({
  cardNumInput,
  expDateInput,
  cardHolderInput,
  addressInput,
  provinceInput,
  emailInput,
  redeemInput,
}) {
  const cardNum = (
    <label className="flex flex-col w-[20rem] justify-between items-start">
      Card Number
      <input
        type="text"
        placeholder="Type here"
        className="input w-full input-bordered border-black"
        name="number"
      />
    </label>
  );
  const expDate = (
    <div className="flex font-semibold justify-between mt-4">
      <label className="flex flex-col w-[13rem] justify-center">
        Expiration Date *
        <select className="select w-full max-w-xs border-black text-graytext select-bordered">
          <option selected>No Installment</option>
        </select>
      </label>

      <label className=" w-[13rem] mt-6 ">
        <select className="select text-graytext w-full border-black max-w-xs select-bordered">
          <option disabled selected>
            Year
          </option>
        </select>
      </label>

      <label className="">
        CVC *
        <input
          type="text"
          placeholder="* * *"
          className="input w-full border-black"
          name="number"
        />
      </label>
    </div>
  );
  const cardHolder = (
    <label className="flex flex-col w-[20rem] mb-4">
      Card Holder Name
      <input
        type="text"
        placeholder="Type here"
        className="input w-full border-black"
        name="number"
      />
    </label>
  );

  const address = (
    <div className="flex mb-4 justify-between">
      <label className="w-[22rem]">
        Address
        <input
          type="text"
          placeholder="Type here"
          className="input w-full input-bordered border-black"
          name="number"
        />
      </label>
      <label className="w-[22rem]">
        Country
        <input
          type="text"
          placeholder="Type here"
          className="input w-full input-bordered border-black "
          name="number"
        />
      </label>
    </div>
  );

  const province = (
    <div className="flex gap-5">
      <label>
        Province/State
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered border-black w-full"
          name="number"
        />
      </label>
      <label>
        City
        <input
          type="text"
          placeholder="Type here"
          className="input w-full input-bordered border-black"
          name="number"
        />
      </label>
      <label>
        ZIP Code
        <input
          type="text"
          placeholder="Type here"
          className="input w-full input-bordered border-black"
          name="number"
        />
      </label>
    </div>
  );

  const email = (
    <div className="flex justify-between font-semibold text-sm mt-4">
      <label className="w-[22rem] ">
        Email
        <input
          type="text"
          placeholder="example@mail.com"
          className="input input-bordered w-full border-black"
          name="number"
        />
      </label>
      <label className="w-[22rem]">
        Phone
        <input
          type="text"
          placeholder="081234567890"
          className="input w-full input-primary input-bordered border-black"
          name="number"
        />
      </label>
    </div>
  );

  const redeem = (
    <div className="flex justify-between mt-6 gap-10  border-t border-dashed  border-graytext pt-6 text-sm text-graytext">
      <label className="text-sm text-graytext">
        <div className="flex justify-between ">
          Redeem Point
          <Help />
        </div>
        <div className="flex items-center mt-1 gap-2">
          <input type="checkbox" className="checkbox checkbox-info checkbox-xs " />
          <span className="label-text text-sm text-graytext">
            I'd like to see redeem points from this credit card
          </span>
        </div>
      </label>

      <label className="flex flex-col  w-[21rem]">
        Installment Plan
        <select className="select select-bordered select-md w-full ">
          <option selected>No Installment</option>
        </select>
      </label>
    </div>
  );

  return (
    <>
      {cardNumInput && cardNum}
      {expDateInput && expDate}
      {cardHolderInput && cardHolder}
      {addressInput && address}
      {provinceInput && province}
      {emailInput && email}
      {redeemInput && redeem}
    </>
  );
}
