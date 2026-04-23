"use client";

import Favorite from "../indexpage/FavoritElement";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { useCart } from "../context/CartContext";

const SingleProduct = ({ data }) => {
  const { addToCart } = useCart();

  const product = {
    id: data.id,
    title: data.title,
    price: data.price,
    image: data.thumbnail,
  };

  return (
    <section className="flex flex-row gap-4 p-10 mt-20">
      <figure className="flex relative h-[500px] w-[500px] items-center justify-center rounded-sm p-8" style={{ background: "var(--color-3)" }}>
        {" "}
        <img src={data.thumbnail} alt={data.title} className="h-[352px] object-contain" /> <Favorite />{" "}
      </figure>{" "}
      <div className="max-w-[490px] text-black">
        {" "}
        <h1 className="text-3xl font-bold mb-3">{data.title}</h1> <p className="text-gray-600 mb-6 leading-relaxed">{data.description}</p>{" "}
        <div className="mb-6">
          {" "}
          <p className="text-2xl font-medium">${data.price}</p> <p className="text-sm mt-1">in stock ({data.stock})</p>{" "}
        </div>{" "}
        <button onClick={() => addToCart(product)} className="bg-[#7BB8B8] text-white px-6 py-2 rounded-full flex items-center gap-2">
          {" "}
          <RiShoppingBasket2Line size={24} /> Add to cart{" "}
        </button>
      </div>
    </section>
  );
};

export default SingleProduct;
