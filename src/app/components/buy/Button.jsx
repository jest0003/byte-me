"use client";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useCart } from "../context/CartContext";

const Button = ({ cartId, quantity }) => {
  const { removeFromCart, updateQuantity } =
    useCart();

  return (
    <div className="flex items-center gap-2 mt-2">
      <button
        onClick={() =>
          updateQuantity(cartId, quantity - 1)
        }
        className="px-2 py-1 border text-sm"
      >
        -
      </button>

      <div className="border px-2 py-1">
        <input
          type="text"
          value={quantity}
          onChange={(e) =>
            updateQuantity(
              cartId,
              Number(e.target.value),
            )
          }
          className="w-8 text-sm text-center outline-none text-gray-400"
        />
      </div>

      <button
        onClick={() =>
          updateQuantity(cartId, quantity + 1)
        }
        className="px-2 py-1 border text-sm"
      >
        +
      </button>

      <button
        onClick={() => removeFromCart(cartId)}
      >
        <RiDeleteBin6Line className="size-7 mr-3 cursor-pointer"></RiDeleteBin6Line>
      </button>
    </div>
  );
};

export default Button;
