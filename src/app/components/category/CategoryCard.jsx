"use client";

import Image from "next/image";
import Link from "next/link";
import { RiShoppingBasket2Line } from "react-icons/ri";
import FavoritElement from "../indexpage/FavoritElement";

import { useCart } from "../context/CartContext";

const CategoryCard = ({ slug, id, title, price, image }) => {
  const { addToCart } = useCart();

  const product = { id, title, price, image };

  return (
    <div className="my-4 rounded-2xl w-[275px] h-[330px] flex flex-col justify-between" style={{ background: "var(--color-3)" }}>
      <div>
        <figure className="m-5 flex justify-center pt-7 relative">
          <FavoritElement id={id} />
          <Image src={image} alt={title} width={150} height={150} className="object-contain h-[150px]" />
        </figure>

        <Link href={`/category/${slug}/${id}`}>
          <p className="mx-5 font-medium hover:underline line-clamp-1">{title}</p>
        </Link>
      </div>

      <div className="m-5 flex justify-between items-center">
        <p className="font-bold text-lg">{price}$</p>

        {/* Nu virker denne knap, fordi den bruger addToCart fra din Context */}
        <button onClick={() => addToCart(product)} className="cursor-pointer hover:scale-110 transition-transform p-2 bg-white/10 rounded-full" aria-label="Add to cart">
          <RiShoppingBasket2Line size={32} />
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { RiShoppingBasket2Line } from "react-icons/ri";
// import FavoritElement from "../indexpage/FavoritElement";

// const CategoryCard = ({ slug, id, title, price, image, addToCart }) => {
//   // Saml produktdata ét sted
//   const product = { id, title, price, image };

//   return (
//     <div className="my-4 rounded-2xl w-[275px] h-[330px] flex flex-col justify-between" style={{ background: "var(--color-3)" }}>
//       <div>
//         <figure className="m-5 flex justify-center pt-7 relative">
//           <FavoritElement id={id} />
//           <Image src={image} alt={title} width={150} height={150} className="object-contain h-[150px]" />
//         </figure>

//         <Link href={`/category/${slug}/${id}`}>
//           <p className="mx-5 font-medium hover:underline line-clamp-1">{title}</p>
//         </Link>
//       </div>

//       <div className="m-5 flex justify-between items-center">
//         <p className="font-bold text-lg">{price}$</p>

//         {/* Vi bruger 'product' variablen her */}
//         <button onClick={() => addToCart(product)} className="cursor-pointer hover:scale-110 transition-transform" aria-label="Add to cart">
//           <RiShoppingBasket2Line size={32} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CategoryCard;
