import FeaturedCard from "./FeaturedCard";
import Link from "next/link";

const FeaturedList = () => {
	return <FetchList />;
};

const FetchList = async () => {
	"use server";
	try {
		const response = await fetch("https://dummyjson.com/products/category/smartphones");
		console.log(response);
		const products = await response.json();

		return products.map((product) => {
			return (
				<div key={product.id} className="relative">
					<FeaturedCard key={product.id} title={product.title} price={product.price} image={product.images} />
				</div>
			);
		});
	} catch (error) {
		return <p>Whoops! An error has occurred</p>;
	}
};

export default FeaturedList;
