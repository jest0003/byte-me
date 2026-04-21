import FeaturedCard from "./FeaturedCard";
import Link from "next/link";

const FeaturedList = () => {
	return <FetchList />;
};

const FetchList = async () => {
	try {
		const response = await fetch("https://dummyjson.com/products/category/smartphones?limit=8");
		console.log(response);
		const data = await response.json();

		return data.products.map((product) => {
			return (
				<div key={product.id} className="relative">
					<FeaturedCard title={product.title} key={product.id} id={product.id} price={product.price} image={product.thumbnail} />
				</div>
			);
		});
	} catch (error) {
		return <p>Whoops! An error has occurred</p>;
	}
};

export default FeaturedList;
