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
    <label className="flex flex-col">
      Card Number
      <input type="text" placeholder="Type here" className="input w-full" name="number" />
    </label>
  );
  const expDate = (
    <div className="flex">
      <label className="flex flex-col">
        asdklj
        <select className="select w-full max-w-xs">
          <option disabled selected>
            Pick your favorite Simpson
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </label>
      <label className="flex flex-col">
        asdklj
        <select className="select w-full max-w-xs">
          <option disabled selected>
            Pick your favorite Simpson
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </label>
      <label>
        CVC
        <input type="text" placeholder="Type here" className="input w-full" name="number" />
      </label>
    </div>
  );
  const cardHolder = (
    <label className="flex flex-col">
      Card Holder Name
      <input type="text" placeholder="Type here" className="input w-full" name="number" />
    </label>
  );
  const address = (
    <div className="flex">
      <label>
        Address
        <input type="text" placeholder="Type here" className="input w-full" name="number" />
      </label>
      <label>
        Country
        <input type="text" placeholder="Type here" className="input w-full" name="number" />
      </label>
    </div>
  );

  const province = (
    <div className="flex">
      <label>
        Province/State
        <input type="text" placeholder="Type here" className="input w-full" name="number" />
      </label>
      <label>
        City
        <input type="text" placeholder="Type here" className="input w-full" name="number" />
      </label>
      <label>
        ZIP Code
        <input type="text" placeholder="Type here" className="input w-full" name="number" />
      </label>
    </div>
  );

  const email = (
    <div className="flex">
      <label>
        Email
        <input type="text" placeholder="Type here" className="input w-full" name="number" />
      </label>
      <label>
        Phone
        <input type="text" placeholder="Type here" className="input w-full" name="number" />
      </label>
    </div>
  );

  const redeem = (
    <div className="flex">
      <label>
        asdkj
        <input type="text" placeholder="Type here" className="input w-full" name="number" />
      </label>
      <label className="flex flex-col">
        Installment Plan
        <select className="select w-full max-w-xs">
          <option disabled selected>
            Pick your favorite Simpson
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
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
