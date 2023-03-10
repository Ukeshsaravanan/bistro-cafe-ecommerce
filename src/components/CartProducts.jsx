import {useSelector} from "react-redux";
import {resetCart,removeItem, selectItems} from "../redux/cartSlice";
import logo from '../assets/img/header/logo-orange.png'
import {RiDeleteBin5Fill} from "react-icons/ri"
import {useDispatch} from "react-redux";


const CartProducts = () => {
    const products = useSelector(selectItems)
    function RandomInteger (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const dispatch = useDispatch()

  return (
    <div className=" max-w-sm  mx-auto md:max-w-[1600px] text-black ">
       <div className=" flex flex-col mb-20">
        {
            products.map((item) => (
                <div className="max-w-[300px] md:max-w-[1600px] bg-gradient-to-r from-rose-100 to-teal-100 rounded-3xl mb-10 flex items-center justify-between  p-5 mx-auto">
                <img className="h-10 w-10 mx-6 " src={logo} alt="Product" />
                <h2 className="text-sm md:text-3xl pr-10 min-w-[50px] md:min-w-[400px]">{item.desc}</h2>
                    <h2 className="text-black md:text-3xl p-2 text-center pr-10"> ${RandomInteger(10,15)}</h2>
                    <button onClick={() => dispatch(removeItem({
                        id: item.id,
                    }))} className="border border-red-700/20  rounded-full w-[30px] h-[30px] md:w-[60px] md:h-[60px] flex items-center justify-center md:text-3xl hover:text-accent hover:border-accent transition-all"><RiDeleteBin5Fill /></button>

                </div>

            ))
        }
       </div>

        <div className="flex items-center justify-evenly text-black ">
            { products.length > 0 ?
                <>
            <button onClick={() => dispatch(resetCart())}className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-6 py-4 md:px-28 md:py-6 rounded-full md:text-3xl font-bold tracking-widest hover:scale-110 transition-all">Reset</button>
            <button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-6 py-4 md:px-28 md:py-6 rounded-full md:text-3xl font-bold tracking-widest hover:scale-110 transition-all animate-pulse">Checkout</button>
                </> : null
            }
        </div>
    </div>
  )
}
export default CartProducts