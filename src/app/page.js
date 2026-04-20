import Image from "next/image";
import CategoryCard from "./components/indexpage/CategoryCard";
import FeaturedCard from "./components/indexpage/FeaturedCard";

export default function Home() {
	return (
		<div>
			<h1>Hello world</h1>
			<p>noget tekst her</p>
			<section>
				<h3>Shop categories</h3>
				<div className="flex flex-row gap-8 justify-center">
					<CategoryCard></CategoryCard>
					<CategoryCard></CategoryCard>
					<CategoryCard></CategoryCard>
					<CategoryCard></CategoryCard>
				</div>
			</section>
			<section>
				<h3>Featured products</h3>
				<div className="flex flex-row gap-8 justify-center">
					<FeaturedCard></FeaturedCard>
					<FeaturedCard></FeaturedCard>
					<FeaturedCard></FeaturedCard>
					<FeaturedCard></FeaturedCard>
				</div>
			</section>
		</div>
	);
}
