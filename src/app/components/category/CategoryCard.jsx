import { RiShoppingBasket2Line } from "react-icons/ri";
import FavoritElement from "../indexpage/FavoritElement"
import Image from "next/image";

const CategoryCard = ({ id, title, price, image }) => {
	return (
		<div style={{ background: "var(--color-3)" }} className="my-4 rounded-2xl max-w-full max-h-full w-[275px] h-[330px]">
			<figure className=" m-5 flex items-center justify-center p-2 relative pt-7">
				<FavoritElement></FavoritElement>
				<Image src={image} alt={title} width={150} height={150} />
			</figure>
			<p className="m-5">{title}</p>
			<div className=" m-5 flex justify-between">
				<p className="">{price}$</p>
				<RiShoppingBasket2Line className="size-9 cursor-pointer" />
			</div>
		</div>
	);
};

export default CategoryCard;