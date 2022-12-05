import { ReactComponent as Ranto } from "../assets/garuda-indonesia-logo-1.svg";
import { ReactComponent as CompletePayment } from "../assets/Complete Payment in 000119.svg";
import { ReactComponent as Steps } from "../assets/Group 27.svg";
import { ReactComponent as Alarm } from "../assets/alarm_on-24px.svg";

export default function NavBar() {
  return (
    <section className="px-20 py-5 h-fit border-b flex justify-between items-center">
      <div className="">
        <Ranto />
      </div>
      <div className=" w-[520px]">
        <Steps />
      </div>
      <div className="bg-[#f7f7f7] flex">
        <CompletePayment />
        <Alarm />
      </div>
    </section>
  );
}
