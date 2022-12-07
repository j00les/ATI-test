import Input from "./Input";

export default function Akulaku() {
  return (
    <div>
      <article className="flex justify-between border-b border-dashed border-grayborder mb-4 pb-4">
        <p className="uppercase font-semibold text-sidebar-text">
          Akulaku <span className="capitalize">Pay Later</span>
        </p>
      </article>

      <div className="flex flex-col gap-2 mb-5">
        <p> Akulaku PayLater allows you to shop in installments without using a credit card.</p>
        <Input akulakuPhone={true} />
      </div>

      <div>
        <p>How to Pay:</p>
        <ol>
          <li>1. Click Pay Now, then you will be directed to the Akulaku PayLater Payment Center page.</li>
          <li>2. Select the desired installment tenor.</li>
          <li>3. Login to your Akulaku PayLater account.</li>
        </ol>
      </div>

      <button className="w-1/2 border-none btn self-end bg-[#105088] mt-5">pay now</button>
    </div>
  );
}
