"use client";

import Image from "next/image";
import Link from "next/link";
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
    <section className="flex flex-row gap-4 p-10 font-sans items-start mt-20">
      {/* IMAGE */}
      <figure className="flex relative h-[500px] w-[500px] items-center justify-center p-8" style={{ background: "var(--color-3)" }}>
        <img src={data.thumbnail} alt={data.title} className="h-[352px] object-contain" />
        <Favorite />
      </figure>

      {/* INFO */}
      <div className="max-w-[490px] text-black">
        <h1 className="text-3xl font-bold">{data.title}</h1>

        <p className="text-gray-600 mb-6">{data.description}</p>

        <div className="mb-6">
          <p className="text-2xl font-medium">${data.price}</p>
          <p className="text-sm mt-1">in stock ({data.stock})</p>
        </div>

        {/* ADD TO CART */}
        <button onClick={() => addToCart(product)} className="bg-[#7BB8B8] text-white px-6 py-2 rounded-full flex items-center gap-2">
          <RiShoppingBasket2Line size={24} />
          Add to cart
        </button>

        {/* INFO BOX */}
        <div className="space-y-4 pt-6 text-sm border-t border-gray-200 mt-6">
          <div className="flex items-start gap-3">
            <span className="text-xl">🚚</span>
            <div>
              <p className="font-semibold">Free Delivery</p>
              <p className="text-gray-500 text-xs">Enter your Postal code for Delivery Availability</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-xl">🔄</span>
            <div>
              <p className="font-semibold">Return Delivery</p>
              <p className="text-gray-500 text-xs">Free 30 days Delivery Returns</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
