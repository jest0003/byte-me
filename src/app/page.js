import Image from "next/image";
import CategoryCard from "./components/indexpage/CategoryCard";
import FeaturedCard from "./components/indexpage/FeaturedCard";

import { RiShoppingBasket2Line } from "react-icons/ri";
import FeaturedList from "./components/indexpage/FeaturedList";

export default function Home() {
	return (
		<div>
			<section className="grid-hero stretch bg-[#eef2ff] hero-bg p-20">
				<img src="/img/tablet_category.png" className="" alt="category" />

				<div className="">
					<h1>Smart tech. Smarter choice.</h1>
					<p className="">iPad Mini 2021 Starlight</p>
					<div className="flex flex-row gap-3.5 mt-9">
						<p className="">499.99$</p>
					</div>
					<div className="flex flex-row gap-3.5 mt-2">
						<button className="border-2 border-white text-white cursor-pointer p-2 rounded-3xl">
							Add to basket
						</button>
						<button className="border-2 border-[#CCE0F9] filter drop-shadow-[0_0_0.75rem_white] bg-white cursor-pointer p-2 rounded-3xl">
							Read more
						</button>
					</div>
				</div>
			</section>
			<section className="my-10">
				<h3>Shop categories</h3>
				<div className="flex flex-row gap-20 justify-center">
					<CategoryCard imgsrc="/img/phone_category.png" categoryname="Phones"></CategoryCard>
					<CategoryCard imgsrc="/img/tablet_category.png" categoryname="Tablets"></CategoryCard>
					<CategoryCard imgsrc="/img/laptop_category.png" categoryname="Laptops"></CategoryCard>
					<CategoryCard imgsrc="/img/accessories_category.png" categoryname="Accessories"></CategoryCard>
				</div>
			</section>
			<section className="my-20">
				<div className="flex justify-baseline">
					<h3>Featured products</h3>
				</div>
				<div className="flex flex-row gap-8 justify-center">
					<FeaturedCard></FeaturedCard>
					<FeaturedCard></FeaturedCard>
					<FeaturedCard></FeaturedCard>
					<FeaturedCard></FeaturedCard>
					<FeaturedList></FeaturedList>
				</div>
			</section>
			<section className="grid-product_display p-[30px] product-display h-[626px] stretch">
				<div className="">
					<h2>Stable and Adjustable Shooting</h2>
					<p className="">Monopod</p>
					<div className="flex flex-row gap-3.5 mt-9">
						<p className="">19.99$</p>
					</div>
					<div className="flex flex-row gap-3.5 mt-2">
						<button className="border-2 border-white text-white cursor-pointer p-2 rounded-3xl">
							Add to basket
						</button>
						<button className="border-2 border-[#CCE0F9] filter drop-shadow-[0_0_0.75rem_white] bg-white cursor-pointer p-2 rounded-3xl">
							Read more
						</button>
					</div>
				</div>

				<img src="/img/accessories_category.png" className="rotate-y-180" alt="category" />
			</section>
		</div>
	);
}
