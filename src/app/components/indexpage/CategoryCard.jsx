import Image from "next/image";

const CategoryCard = async ({ imgsrc, categoryname }) => {
	return (
		<div className="my-6 rounded-2xl category-card">
			<figure className="flex h-[200px] w-[200px] items-center justify-center p-2">
				{/* <img src="/img/mobil.png" className="" alt="category" /> */}
				<Image src={imgsrc} alt="" width={200} height={200} className="cursor-pointer" />
			</figure>
			<p className="text-center my-3">{categoryname}</p>
		</div>
	);
};

export default CategoryCard;
