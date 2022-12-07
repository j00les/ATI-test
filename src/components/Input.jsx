import { useEffect, useState } from "react";
import { ReactComponent as Help } from "../assets/help-1.svg";
export default function Input({
  akulakuPhone,
  cardNumInput,
  expDateInput,
  cardHolderInput,
  addressInput,
  provinceInput,
  emailInput,
  redeemInput,
}) {
  const [form, setForm] = useState({
    cardNumber: "",
    expirationDate: "",
  });

  function handleChange(e) {
    if (e.target.name === "cardNumber") {
      if (e.target.value.length === 4 || e.target.value.length === 9 || e.target.value.length === 14) {
        e.target.value += " ";
      }
    }
    if (e.target.name === "expirationDate") {
      if (e.target.value.length === 2) {
        e.target.value += " / ";
      }
    }
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const cardNum = (
    <label className="flex flex-col w-[20rem] justify-between items-start font-semibold">
      Card Number
      <input
        onChange={e => handleChange(e)}
        type="text"
        maxLength={19}
        placeholder="0123 4567 8910 1112"
        className="input w-full input-bordered border-black"
        name="cardNumber"
      />
    </label>
  );
  const expDate = (
    <div className="font-semibold mt-4 flex">
      <label className="">
        Expiration date *
        <input
          onChange={e => handleChange(e)}
          maxLength={9}
          type="text"
          placeholder="01 / 2345"
          className="input w-full border-black"
          name="expirationDate"
        />
      </label>
      <label className="">
        CVC *
        <input
          maxLength={3}
          type="text"
          placeholder="* * *"
          className="input w-full border-black ml-[1rem]"
          name="number"
        />
      </label>
    </div>
  );

  const cardHolder = (
    <label className="flex flex-col w-[20rem] mb-4">
      Card Holder Name
      <input type="text" placeholder="Type here" className="input w-full border-black" name="number" />
    </label>
  );

  const address = (
    <div className="mb-4 flex">
      <label className="w-[22rem]">
        Address
        <input type="text" placeholder="Type here" className="input w-full input-bordered border-black" name="number" />
      </label>
      <label className="w-[22rem] ml-[1rem]">
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
        <input type="text" placeholder="Type here" className="input input-bordered border-black w-full" name="number" />
      </label>
      <label>
        City
        <input type="text" placeholder="Type here" className="input w-full input-bordered border-black" name="number" />
      </label>
      <label>
        ZIP Code
        <input type="text" placeholder="Type here" className="input w-full input-bordered border-black" name="number" />
      </label>
    </div>
  );

  const email = (
    <div className="flex font-semibold text-sm mt-4">
      <label className="w-[22rem] ">
        Email
        <input
          type="text"
          placeholder="example@mail.com"
          className="input input-bordered w-full border-black"
          name="number"
        />
      </label>
      <label className="w-[22rem] ml-[1rem]">
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
          <span className="label-text text-sm text-graytext">I'd like to see redeem points from this credit card</span>
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

  const akulakuPhoneInput = (
    <input
      type="tel"
      maxLength={19}
      placeholder="Phone Number"
      className="input w-full input-bordered border-black"
      name="phone"
    />
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
      {akulakuPhone && akulakuPhoneInput}
    </>
  );
}
