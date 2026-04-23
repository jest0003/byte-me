"use client";
import { RiShoppingBasket2Line } from "react-icons/ri";
import FavoritElement from "./FavoritElement";
import Image from "next/image";
import Link from "next/link";

import { useCart } from "../context/CartContext";

const FeaturedCard = ({ id, title, price, image, category }) => {
  const { addToCart } = useCart();
  const product = { id, title, price, image };

  return (
    <div style={{ background: "var(--color-3)" }} className="my-4 rounded-2xl max-w-full max-h-full w-[275px] h-[330px]">
      <figure className=" m-5 flex items-center justify-center p-2 relative pt-7">
        <FavoritElement id={id}></FavoritElement>
        <Image src={image} alt={title} width={150} height={150} />
      </figure>
      <Link href={`category/${category}/${id}`}>
        <p className="m-5">{title}</p>
      </Link>
      <div className=" m-5 flex justify-between">
        <p className="">{price}$</p>
        <button onClick={() => addToCart(product)} className="cursor-pointer hover:scale-110 transition-transform p-2 bg-white/10 rounded-full" aria-label="Add to cart">
          <RiShoppingBasket2Line size={32} />{" "}
        </button>
      </div>
    </div>
  );
};

export default FeaturedCard;
