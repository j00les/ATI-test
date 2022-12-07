export default function BRI() {
  return (
    <div>
      <article className="flex justify-between border-b border-dashed border-grayborder mb-4 pb-4">
        <p className="uppercase font-semibold text-sidebar-text">Bank BRI</p>
      </article>

      <div className="flex flex-col gap-2 mb-5 mt-2">
        <p>Complete payment from BRI to the virtual account number below.</p>
        <div className="flex flex-col border-b gap-2 mt-5">
          <p className="font-bold">Virtual account number</p>
          <div className="flex justify-between">
            <p>263036036533148965</p>
            <a className="capitalize text-sidebar-text font-semibold">copy</a>
          </div>
        </div>
      </div>

      <section className="flex flex-col gap-5">
        <p>How to Pay:</p>
        <div>
          <h2>ATM BRI</h2>
          <ol>
            <li>
              1. Select <span className="font-bold">other transactions</span> on the main menu.
            </li>
            <li>
              2. Select <span className="font-bold">payment</span>.
            </li>
            <li>
              3. Select <span className="font-bold">other</span>
            </li>
            <li>
              4. Select <span className="font-bold"> BRIVA</span>.
            </li>
            <li>
              5. Select <span className="font-bold"> BRIVA Number</span>. then
              <span className="font-bold">Confirm</span>
            </li>
            <li>6. Payment Complete</li>
          </ol>
        </div>
        <div>
          <h2>IB BRI</h2>
          <ol>
            <li>
              1.Select <span className="font-bold">payment & purchase</span>.
            </li>
            <li>
              2. Select <span className="font-bold">BRIVA</span>.
            </li>
            <li>
              3.Insert <span className="font-bold">BRIVA Number</span>, then <span className="font-bold">confirm</span>
            </li>
            <li>4.Payment Complete</li>
          </ol>
        </div>
        <div>
          <h2>BRImo</h2>
          <ol>
            <li>
              1.Select <span className="font-bold">payment & purchase</span>.
            </li>
            <li>
              2. Select <span className="font-bold">BRIVA</span>.
            </li>
            <li>
              3.Insert <span className="font-bold">BRIVA Number</span>, then <span className="font-bold">confirm</span>
            </li>
            <li>4.Payment Complete</li>
          </ol>
        </div>
      </section>

      <button className="w-1/2 border-none btn self-end bg-[#105088] mt-5">pay now</button>
    </div>
  );
}
