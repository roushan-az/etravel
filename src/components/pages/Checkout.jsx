export default function Checkout() {
  return (
    <section className="content">
      <h2>Secure Checkout</h2>
      <div className="checkout">
        <input placeholder="Full Name" />
        <input placeholder="Email" />
        <input placeholder="Mobile Number" />
        <button className="btn primary">
          Proceed to Payment
        </button>
      </div>
    </section>
  )
}
