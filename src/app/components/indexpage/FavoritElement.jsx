"use client";
import { FiHeart } from "react-icons/fi";
import useFavorites from "@/stores/favorite";

const Favorite = ({ id }) => {
  const { favorites, setFavorite, removeFavorite } = useFavorites();
  if (favorites.some((favorite) => favorite.id === id)) {
    return (
      <FiHeart
        size={25}
        className="cursor-pointer absolute
  top-3 right-[6px] text-red-500"
        onClick={() => {
          setFavorite;
        }}
      />
    );
  } else {
    return (
      <FiHeart
        size={25}
        className="cursor-pointer absolute
  top-3 right-[6px] text-red-500 fill-red-500"
        onClick={() => {
          removeFavorite;
        }}
      />
    );
  }
};

export default Favorite;
