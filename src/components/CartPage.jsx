import Header from "./Header"
import Footer from "./Footer"
import CartProducts from "./CartProducts"



const CartPage = () => {
  return (
    <div className= "text-white max-w-[1800px] mx-auto mt-80">
      <Header />
      <CartProducts />
      <div className="md:mt-80">
          <Footer />
      </div>

    </div>
  )
}
export default CartPage