"use client";
import { RiShoppingBasket2Line } from "react-icons/ri";
import FavoritElement from "./FavoritElement";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Suspense } from "react";
import { useCart } from "../context/CartContext";

const FeaturedCard = ({
  id,
  title,
  price,
  image,
  category,
}) => {
  const { addToCart } = useCart();
  const product = { id, title, price, image };
  const [active, setActive] = useState(false);

  return (
    <div
      style={{ background: "var(--color-3)" }}
      className="my-4 rounded-2xl max-w-full max-h-full w-[275px] h-[330px]"
    >
      <Suspense fallback={<div>Loading...</div>}>
        <figure className=" m-5 flex items-center justify-center p-2 relative pt-7">
          <FavoritElement
            id={id}
          ></FavoritElement>
          <Image
            src={image}
            alt={title}
            width={150}
            height={150}
          />
        </figure>
        <Link href={`category/${category}/${id}`}>
          <p className="m-5">{title}</p>
        </Link>
        <div className=" m-5 flex justify-between">
          <p className="">{price}$</p>
          <button
            onClick={() => {
              addToCart(product);

              setActive(true);
              setTimeout(
                () => setActive(false),
                600,
              );
            }}
            className={`px-6 py-2 rounded-full cursor-pointer flex items-center gap-2 transition-all duration-200 border-2 ${
              active
                ? "border-green-500"
                : "border-transparent"
            }`}
          >
            <RiShoppingBasket2Line
              size={32}
            />{" "}
          </button>
        </div>
      </Suspense>
    </div>
  );
};

export default FeaturedCard;
