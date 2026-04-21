"use server";
import Button from "../../../components/singleview/Button"

const ProductPage = async ({ params }) => {
const { id } = await params;

  const response = await fetch(
    `https://dummyjson.com/products/${id}`
  );

  const data = await response.json();

  return (
    <div className="flex flex-row gap-4 p-10 font-sans items-start">
      {/* <div className="flex flex-col gap-4">
        {data.images?.slice(0, 3).map((img, index) => (
          <button onClick={() => "{data.thumbnail}"} key={index} className="h-[100px] w-[100px] rounded-sm flex items-center justify-center p-2" style={{ background: "var(--color-3)" }}>
            <img src={img} alt={`Thumbnail ${index}`} className="max-h-full object-contain" />
          </button>
        ))}
      </div> */}

      {/* BILLEDE */}
      <figure className="flex h-[500px] w-[500px] items-center justify-center rounded-sm p-8" style={{ background: "var(--color-3)" }}>
        <img src={data.thumbnail} alt={data.title} className="h-[352px] object-contain" />
      </figure>

      {/* INFO */}
      <div className="max-w-[490px] text-black">
        <h1 className="mb-1 mt-[-1.6rem] text-3xl font-bold">{data.title}</h1>
        <p className="text-gray-600 mb-6 leading-relaxed">{data.description}</p>

        <div className="mb-6">
          <p className="text-2xl font-medium">${data.price}</p>
          <p className="text-sm mt-1">in stock ({data.stock})</p>
        </div>

        <Button />

        {/* EKSTRA INFO */}
        <div className="space-y-4 pt-6 text-sm border-t border-gray-200 mt-6">
          <div className="flex items-start gap-3">
            <span className="text-xl">🚚</span>
            <div>
              <p className="font-semibold">Free Delivery</p>
              <p className="text-gray-500 underline text-xs">Enter your Postal code for Delivery Availability</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-xl">🔄</span>
            <div>
              <p className="font-semibold">Return Delivery</p>
              <p className="text-gray-500 text-xs">Free 30days Delivery Returns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ProductPage;