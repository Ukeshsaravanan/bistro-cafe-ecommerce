import { FaShoppingCart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { selectItems } from "../redux/cartSlice";
import { useSelector } from "react-redux";

const TopBar = () => {
  const products = useSelector(selectItems);
  return (
    <div className="flex gap-x-[10px]">
      <div className="border border-white/20  rounded-full w-[60px] h-[60px] flex items-center justify-center text-3xl hover:text-accent hover:border-accent transition-all">
        <Link to="/menus">
          <MdOutlineRestaurantMenu />
        </Link>
      </div>
      <div className="border border-white/20  rounded-full w-[60px] h-[60px] flex items-center justify-center text-3xl hover:text-accent hover:border-accent transition-all">
        <Link to="/">
          <VscAccount />
        </Link>
      </div>
      <div className="border border-white/20  rounded-full w-[60px] h-[60px] flex items-center justify-center text-3xl hover:text-accent hover:border-accent transition-all relative">
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
        <span
          className={`text-lg w-[30px] h-[30px] rounded-full bg-[#2879fe] text-white absolute -top-[10px] -right-[10px] flex items-center justify-center ${
            products.length > 0 ? "animate-bounce" : null
          }`}
        >
          {products.length}
        </span>
      </div>
    </div>
  );
};

export default TopBar;
