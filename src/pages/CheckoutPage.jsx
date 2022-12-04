import NavBar from "../components/NavBar";
import { ReactComponent as CreditCard } from "../assets/Credit-Debit Card.svg";
import { ReactComponent as LinkAja } from "../assets/LinkAja.svg";
import { ReactComponent as KlikBCA } from "../assets/KlikBCA.svg";
import { ReactComponent as KlikBCA } from "../assets/KlikBCA.svg";

export default function CheckoutPage() {
  return (
    <section>
      <NavBar />
      <div className="grid grid-cols-5 border rounded-md m-20">
        <div className="border">
          <article>
            <CreditCard />
          </article>
          <article>
            <LinkAja />
          </article>
          <article>
            <KlikBCA />
          </article>
          <article>1</article>
          <article>1</article>
          <article>1</article>
          <article>1</article>
        </div>
        <div>
          <p>2</p>
        </div>
      </div>
    </section>
  );
}
