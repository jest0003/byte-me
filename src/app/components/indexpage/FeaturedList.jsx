import FeaturedCard from "./FeaturedCard";
import { Suspense } from "react";

const FeaturedList = () => {
  return <FetchList />;
};

const FetchList = async () => {
  try {
    const response = await fetch(
      "https://dummyjson.com/products/category/smartphones?limit=8",
      { cache: "no-store" },
    );
    console.log(response);
    const data = await response.json();

    return data.products.map((product) => {
      return (
        <div
          key={product.id}
          className="relative"
        >
          <Suspense
            fallback={<div>Loading...</div>}
          >
            <FeaturedCard
              title={product.title}
              category={product.category}
              key={product.id}
              id={product.id}
              price={product.price}
              image={product.thumbnail}
            />
          </Suspense>
        </div>
      );
    });
  } catch (error) {
    return <p>Whoops! An error has occurred</p>;
  }
};

export default FeaturedList;
