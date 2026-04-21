import Image from "next/image";
import CategoryCard from "./components/indexpage/CategoryCard";
import FeaturedCard from "./components/indexpage/FeaturedCard";

import { RiShoppingBasket2Line } from "react-icons/ri";
import FeaturedList from "./components/indexpage/FeaturedList";

export default function Home() {
	return (
		<div>
			<section className="grid-hero stretch bg-[#eef2ff] hero-bg p-20">
				<img src="/img/mobil.png" className="" alt="category" />

				<div className="">
					<h1>Smart tech. Smarter choice.</h1>
					<p className="">Product name</p>
					<div className="flex flex-row gap-3.5 mt-9">
						<p className="">Price</p>
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
					<CategoryCard></CategoryCard>
					<CategoryCard></CategoryCard>
					<CategoryCard></CategoryCard>
					<CategoryCard></CategoryCard>
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
			<section className="grid-hero p-[30px] product-display h-[626px] stretch">
				<div className="">
					<h2>hej</h2>
					<p className="">Product name</p>
					<div className="flex flex-row gap-3.5 mt-9">
						<p className="">Price</p>
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

				<img src="/img/mobil.png" className="rotate-y-180" alt="category" />
			</section>
		</div>
	);
}
