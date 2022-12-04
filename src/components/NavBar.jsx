import { ReactComponent as Ranto } from "../assets/garuda-indonesia-logo-1.svg";
import { ReactComponent as CompletePayment } from "../assets/Complete Payment in 000119.svg";

import { ReactComponent as Steps } from "../assets/Group 27.svg";

export default function NavBar() {
  return (
    <section className="navbar bg-base-100 px-12 py-5">
      <div className="navbar-start">
        <Ranto />
      </div>
      <div className="navbar-center flex-2 w-[520px]">
        <Steps />
      </div>
      <div className="navbar-end">
        <CompletePayment />
      </div>
    </section>
  );
}
