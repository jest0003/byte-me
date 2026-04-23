import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFavorites = create(
  persist(
    (set, get) => ({
      favorites: [],

      setFavorite: (id) =>
        set((state) => {
          if (state.favorites.some((fav) => fav.id === id)) return state;
          return {
            favorites: [...state.favorites, { id }],
          };
        }),

      removeFavorite: (id) =>
        set(() => ({
          favorites: get().favorites.filter((favorite) => favorite.id !== id),
        })),
    }),
    {
      name: "favorites-storage", // vigtigt
    },
  ),
);

export default useFavorites;

// "use client";

// import { create } from "zustand";
// import { persist } from "zustand/middleware";
// const useFavorites = create(
//   persist(
//     (set) => ({
//       ratings: {}, // { [id]: number }

//       setRating: (id, value) =>
//         set((state) => ({
//           ratings: {
//             ...state.ratings,
//             [id]: value,
//           },
//         })),

//       removeRating: (id) =>
//         set((state) => {
//           const copy = { ...state.ratings };
//           delete copy[id];
//           return { ratings: copy };
//         }),
//     }),
//     {
//       name: "favorites-storage",
//     },
//   ),
// );

// export default useFavorites;

// "use client";

// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// const useFavorites = create(
//   persist(
//     (set) => ({
//       favorites: [],

//       setFavorite: (id) =>
//         set((state) => ({
//           favorites: [...state.favorites, { id }],
//         })),

//       removeFavorite: (id) =>
//         set((state) => ({
//           favorites: state.favorites.filter((f) => f.id !== id),
//         })),
//     }),
//     {
//       name: "favorites-storage",
//     },
//   ),
// );

// export default useFavorites;
