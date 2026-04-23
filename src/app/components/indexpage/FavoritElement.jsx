"use client";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

import useFavorites from "@/stores/favorite";

const Favorite = ({ id }) => {
  console.log(id);
  const { favorites, setFavorite, removeFavorite } = useFavorites();
  if (favorites.some((favorite) => favorite.id === id)) {
    return <FaHeart size={25} className="cursor-pointer absolute top-3 right-[6px] text-red-500" onClick={() => removeFavorite(id)} />;
  } else {
    return <FiHeart size={25} className="cursor-pointer absolute top-3 right-[6px] text-red-500" onClick={() => setFavorite(id)} />;
  }
};

export default Favorite;
