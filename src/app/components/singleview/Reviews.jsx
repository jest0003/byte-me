import Favorit from "./Favorit";

const Reviews = () => {
  return (
    <div className="flex gap-4 p-10 font-sans items-start">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-[240px] w-[375px] rounded-sm border-2 border-[#4E77F6] relative">
          <Favorit id={i} />
        </div>
      ))}
    </div>
  );
};

export default Reviews;
