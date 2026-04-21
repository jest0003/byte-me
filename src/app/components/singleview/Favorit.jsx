"use client";

import useFavorites from "@/stores/favorite";

const Favorit = ({ id }) => {
  const { favorites, setFavorite, removeFavorite } = useFavorites();

  // Tjek om dette specifikke produkt er i favoritter
  const isFavorite = favorites.some((f) => f.id === id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(id);
    } else {
      setFavorite(id);
    }
  };
};

export default Favorit;

// "use client";

// import { CiStar } from "react-icons/ci";
// import { FaStar } from "react-icons/fa6";
// import useFavorites from "@/stores/favorite";

// const Favorit = ({ id }) => {
//   const { favorites, setFavorite, removeFavorite } = useFavorites();

//   const isFavorite = favorites.some((f) => f.id === id);

//   return (
//     <div className="flex gap-1 absolute top-3 left-1/2 -translate-x-1/2 z-10">
//       {[1, 2, 3, 4, 5].map((i) => (isFavorite ? <FaStar key={i} size={35} className="text-black " onClick={() => removeFavorite(id)} /> : <CiStar key={i} size={35} className="text-black" onClick={() => setFavorite(id)} />))}
//     </div>
//   );
// };

// export default Favorit;
