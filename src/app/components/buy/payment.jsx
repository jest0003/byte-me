"use client";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Payment = () => {
  const [qty, setQty] = useState(1);

  const increase = () => setQty((q) => q + 1);
  const decrease = () => setQty((q) => Math.max(1, q - 1));

  return (
    <div className="flex flex-col gap-8 p-10 font-sans max-w-4xl mx-auto text-black ">
      {/* Produkt Sektion */}
      <div className="flex flex-row gap-6 items-start border-b border-[#B9C6CB]">
        {/* Billede */}
        <figure className="flex h-[252px] w-[252px] items-center justify-center rounded-sm p-8" style={{ background: "var(--color-3)" }}>
          <img src="/img/mobil.png" className="h-full object-contain" alt="Product" />
        </figure>

        {/* Info */}
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-normal">(Produkt navn)</h1>

              {/* Quantity controls */}
              <div className="flex items-center gap-2 mt-2">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-2 py-1 border text-sm">
                  -
                </button>

                <div className="border px-2 py-1">
                  <input type="text" min="1" value={qty} onChange={(e) => setQty(Math.max(1, Number(e.target.value)))} className="w-8 text-sm text-center outline-none" />
                </div>

                <button onClick={() => setQty((q) => q + 1)} className="px-2 py-1 border text-sm">
                  +
                </button>

                <button>
                  <RiDeleteBin6Line size={30} />
                </button>
              </div>
            </div>

            <h3 className="text-xl font-normal uppercase">Pris</h3>
          </div>

          <div className="mt-6 space-y-1 text-sm">
            <p className="text-gray-600">See how fast you can get this item. Enter zip code v</p>

            <div className="flex items-center gap-2">
              <span>🚚</span>
              <p>In stock and ready to ship</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
