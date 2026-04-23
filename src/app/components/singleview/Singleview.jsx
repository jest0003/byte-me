"use client";

import { useEffect, useState } from "react";
import { useCart } from "../../../../context/CartContext";
import { RiShoppingBasket2Line } from "react-icons/ri";

const Singleview = ({ slug, id, title, price, image }) => {
  const { addToCart } = useCart();

  const product = { id, title, price, image };

  useEffect(() => {
    fetch("https://dummyjson.com/products/121")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="flex flex-row gap-10 p-10 font-sans">
      {/* IMAGE */}
      <div className="flex h-[500px] w-[500px] items-center justify-center bg-[var(--color-3)] p-8">
        <img src={data.thumbnail} alt={data.title} className="h-[350px] object-contain" />
      </div>

      {/* INFO */}
      <div className="max-w-[500px]">
        <h1 className="text-3xl font-bold">{data.title} </h1>

        <p className="text-gray-600 my-4">{data.description}</p>

        <p className="text-2xl font-bold mb-6">${data.price}</p>

        <button onClick={() => addToCart(product)} className="bg-[#7BB8B8] text-white px-6 py-2 rounded-full flex items-center gap-2">
          <RiShoppingBasket2Line size={24} />
          Add to cart
        </button>

        <button onClick={() => addToCart(product)} className="cursor-pointer hover:scale-110 transition-transform p-2 bg-white/10 rounded-full" aria-label="Add to cart">
          <RiShoppingBasket2Line size={32} />
        </button>
      </div>
    </div>
  );
};

export default Singleview;
