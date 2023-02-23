import {useEffect, useState} from "react"
import {useDispatch,useSelector} from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { selectItems} from "../redux/cartSlice";
import { Link } from 'react-router-dom'


const MenuProducts = () => {

  const products = useSelector(selectItems)
  const [menu,setMenu] = useState([]);

  function RandomInteger (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const dispatch = useDispatch()

  useEffect(() => {
         fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=italian')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setMenu(data.meals);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

  console.log(menu)

  return (
   <div className="flex flex-col">
    <div className="grid gap-12 max-w-[300px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto md:max-w-[1600px] ">
       {
        menu.map(menu => (
            <div className="bg-gradient-to-r from-rose-100 to-teal-100 rounded-3xl w-90  flex flex-col justify-center items-center hover:scale-105 transition-all ">
            <h1 className="text-black mt-3 text-3xl text-center">{menu.strMeal}</h1>
            <img className="p-2 rounded-[40px] " src={menu.strMealThumb} alt="food-items" />
            <h2 className="text-black text-3xl p-2 text-center"> $ {RandomInteger(10,15)}</h2>
            <button onClick={() => dispatch(addToCart({
                id: menu.idMeal,
                desc: menu.strMeal,
                img: menu.strMealThumb,
            }))}className="bg-black py-3 px-6 mb-2 rounded-full hover:scale-110">Add to cart</button>
            </div>
        ))
       }
    </div>
    <div className="max-w-full mx-auto mt-20">
    <Link to="/cart" >
    <div >
      {products.length > 0 ? <button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-16 py-4 md:px-28 md:py-6 rounded-full md:text-3xl font-bold tracking-widest hover:scale-110 transition-all mx-auto relative">Cart 
      <span className= {`text-xl ml-4 px-2 py-1 rounded-full bg-white  text-black absolute -top-[20px] -right-[2px] flex items-center justify-center ${ products.length > 0 ? "animate-bounce" : null}` }>{products.length}</span>
      </button> : null}
    </div>
    </Link>
    </div>
    </div>
    )

}
export default MenuProducts