export default function BCA() {
  return (
    <div>
      <article className="flex justify-between border-b border-dashed border-grayborder mb-4 pb-4">
        <p className="uppercase font-semibold text-sidebar-text">Bank BCA</p>
      </article>

      <div className="flex flex-col gap-2 mb-5 mt-2">
        <p>Complete payment from BCA to the virtual account number below.</p>
        <div className="flex flex-col border-b gap-2 mt-5">
          <p className="font-bold">Virtual account number</p>
          <div className="flex justify-between">
            <p>26303439536</p>
            <a className="capitalize text-sidebar-text font-semibold">copy</a>
          </div>
        </div>
      </div>

      <section className="flex flex-col gap-5">
        <p>How to Pay:</p>
        <div>
          <h2>ATM BCA</h2>
          <ol>
            <li>
              1. Select <span className="font-bold">other transactions</span> on the main menu
            </li>
            <li>
              2. Select <span className="font-bold">transfer</span>
            </li>
            <li>
              3. Select to <span className="font-bold">BCA virtual account</span>.
            </li>
            <li>
              4. Insert <span className="font-bold">BCA Virtual account number</span>.
            </li>
            <li>
              5. Insert the <span className="font-bold">payable amount</span>, then
              <span className="font-bold">confirm</span>.
            </li>
            <li>6. Payment Complete</li>
          </ol>
        </div>
        <div>
          <h2>Klik BCA</h2>
          <ol>
            <li>
              1.Select <span className="font-bold">fund transfer</span> .
            </li>
            <li>
              2. Select <span className="font-bold">transfer to BCA virtual account</span>.
            </li>
            <li>
              3.Insert <span>BCA virtual account number</span>.
            </li>
            <li>
              4. Insert the <span className="font-bold">payable amount</span>, then
              <span className="font-bold">confirm</span>.
            </li>
            <li>5. Payment Complete</li>
          </ol>
        </div>
        <div>
          <h2>m-BCA</h2>
          <ol>
            <li>
              1.Select <span className="font-bold">fund transfer</span> .
            </li>
            <li>
              2. Select <span className="font-bold">transfer to BCA virtual account</span>.
            </li>
            <li>
              3.Insert <span>BCA virtual account number</span>.
            </li>
            <li>
              4. Insert the <span className="font-bold">payable amount</span>, then
              <span className="font-bold">confirm</span>.
            </li>
            <li>5. Payment Complete</li>
          </ol>
        </div>
      </section>

      <button className="w-1/2 border-none btn self-end bg-[#105088] mt-5">pay now</button>
    </div>
  );
}
