"use client";
import { useCart } from "../context/CartContext";
import { RiShoppingBasket2Line } from "react-icons/ri";

import Image from "next/image";
import Link from "next/link";

const ButtonToCart = ({ slug, id, title, price, image }) => {
  const { addToCart } = useCart();

  return (
    <button onClick={() => addToCart({ slug, id, title, price, image })} className="bg-[#7BB8B8] text-white px-8 py-2 rounded-full  mb-1 flex items-center gap-2 cursor-pointer  hover:bg-[#6aa7a7] transition-colors  p-2 " aria-label="Add to cart">
      <RiShoppingBasket2Line size={24} />
      <span>Add to cart</span>
    </button>
  );
};

export default ButtonToCart;
