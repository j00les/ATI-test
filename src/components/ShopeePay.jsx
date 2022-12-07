import qr from "../assets/qrcode_attack.png";

export default function ShopeePay() {
  return (
    <div>
      <article className="flex justify-between border-b border-dashed border-grayborder mb-4 pb-4">
        <p className="uppercase font-semibold text-sidebar-text">ShopeePay</p>
      </article>

      <div className="flex flex-col gap-2 mb-5">
        <span className="font-bold">QR Code:</span>
        <div className="w-[20rem] border">
          <img className="w-full" alt="qr-code" src={qr}></img>
        </div>
      </div>

      <div>
        <p>How to Pay:</p>
        <ol>
          <li>1.Open your Shopee or other e-wallet app.</li>
          <li>2.Scan the QR code on your monitor.</li>
          <li>3.Confirm payment in the app.</li>
          <li>4.Payment complete.</li>
        </ol>
      </div>

      <button className="w-1/2 border-none btn self-end bg-[#105088] mt-5">pay now</button>
    </div>
  );
}
