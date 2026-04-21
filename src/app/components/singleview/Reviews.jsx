import Favorit from "./Favorit";

const Reviews = async () => {
  const res = await fetch("https://dummyjson.com/products/category/smartphones");
  const data = await res.json();

  // Hjælpefunktion til at tegne stjerner (f.eks. 3 fyldte, 2 tomme)
  const renderStars = (rating) => {
    return (
      <div className="flex text-2xl mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className={star <= Math.round(rating) ? "text-black" : "text-gray-300"}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className=" p-10 pb-10">
      <h2 className="text-xl mb-6 ml-2 font-medium">Reviews</h2>

      <div className="flex gap-6 items-start overflow-x-auto pb-4">
        {data.products.slice(0, 3).map((product) => (
          <div key={product.id} className="bg-white h-auto w-[375px] rounded-sm border border-blue-200 relative p-6 shadow-sm border-b-8 border-b-[#4E77F6]">
            <Favorit id={product.id} />

            {/* Stjerner - dummyjson giver en samlet rating på produktet */}
            {renderStars(product.rating)}

            <h4 className="font-bold text-lg mb-2">{product.title}</h4>

            {/* Vi tager kun den første anmeldelse for at matche billedet */}
            {product.reviews && product.reviews.length > 0 && (
              <div className="mt-1">
                <p className="text-gray-700 leading-snug">{product.reviews[0].comment}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
