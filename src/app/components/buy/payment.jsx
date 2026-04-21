import Button from "./Button";
import Summary from "./Summary";

const Payment = () => {
  return (
    <div className="flex flex-col gap-8 p-10 font-sans max-w-4xl mx-auto text-black">
      {/* PRODUCT */}
      <div className="flex flex-row gap-6 items-start border-b border-[#B9C6CB] pb-6">
        <figure className="flex h-[252px] w-[252px] items-center justify-center rounded-sm p-8" style={{ background: "var(--color-3)" }}>
          <img src="/img/mobil.png" className="h-full object-contain" alt="Product" />
        </figure>

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-normal">(Produkt navn)</h1>

              {/* Button */}
              <Button />
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

      {/* SUMMARY */}

      <Summary />
    </div>
  );
};

export default Payment;

// "use client";
// import { useState } from "react";
// import { RiDeleteBin6Line } from "react-icons/ri";

// const Payment = () => {
//   const [qty, setQty] = useState(1);

//   return (
//     <div className="flex flex-col gap-8 p-10 font-sans max-w-4xl mx-auto text-black">
//       {/* PRODUCT */}
//       <div className="flex flex-row gap-6 items-start border-b border-[#B9C6CB] pb-6">
//         <figure className="flex h-[252px] w-[252px] items-center justify-center rounded-sm p-8" style={{ background: "var(--color-3)" }}>
//           <img src="/img/mobil.png" className="h-full object-contain" alt="Product" />
//         </figure>

//         <div className="flex-1">
//           <div className="flex justify-between items-start">
//             <div>
//               <h1 className="text-2xl font-normal">(Produkt navn)</h1>

//               {/* Quantity */}
//               <div className="flex items-center gap-2 mt-2">
//                 <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-2 py-1 border text-sm">
//                   -
//                 </button>

//                 <div className="border px-2 py-1">
//                   <input type="text" min="1" value={qty} onChange={(e) => setQty(Math.max(1, Number(e.target.value)))} className="w-8 text-sm text-center outline-none text-gray-400" />
//                 </div>

//                 <button onClick={() => setQty((q) => q + 1)} className="px-2 py-1 border text-sm">
//                   +
//                 </button>

//                 <button>
//                   <RiDeleteBin6Line size={30} />
//                 </button>
//               </div>
//             </div>

//             <h3 className="text-xl font-normal uppercase">Pris</h3>
//           </div>

//           <div className="mt-6 space-y-1 text-sm">
//             <p className="text-gray-600">See how fast you can get this item. Enter zip code v</p>

//             <div className="flex items-center gap-2">
//               <span>🚚</span>
//               <p>In stock and ready to ship</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* SUMMARY */}
//       <div className="flex flex-col items-end gap-4 mt-10">
//         <div className="w-full space-y-2">
//           <div className="flex justify-between">
//             <span>Subtotal</span>
//             <span className="font-mono">XXXXXX</span>
//           </div>

//           <div className="flex justify-between">
//             <span>Shipping</span>
//             <span className="font-medium">FREE</span>
//           </div>

//           <hr className="border-[#B9C6CB]" />

//           <div className="flex justify-between text-2xl font-normal pt-4">
//             <span>Total</span>
//             <span className="font-mono">XXXX</span>
//           </div>
//         </div>

//         <button className="mt-4 bg-[#6BB6B9] hover:bg-teal-500 text-black px-10 py-3 rounded-full font-medium transition-colors">Go to checkout</button>
//       </div>
//     </div>
//   );
// };

// export default Payment;
