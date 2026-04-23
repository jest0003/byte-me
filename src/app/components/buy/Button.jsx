"use client";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useCart } from "../context/CartContext";

const Button = ({ cartId }) => {
  const [qty, setQty] = useState(1);
  const { removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-2 mt-2">
      <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-2 py-1 border text-sm">
        -
      </button>

      <div className="border px-2 py-1">
        <input type="text" value={qty} onChange={(e) => setQty(Math.max(1, Number(e.target.value)))} className="w-8 text-sm text-center outline-none text-gray-400" />
      </div>

      <button onClick={() => setQty((q) => q + 1)} className="px-2 py-1 border text-sm">
        +
      </button>

      {/* 🔥 DELETE BUTTON */}
      <button onClick={() => removeFromCart(cartId)}>
        <RiDeleteBin6Line size={30} />
      </button>
    </div>
  );
};

export default Button;
