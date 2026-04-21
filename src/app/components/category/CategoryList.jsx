import CategoryCard from "./CategoryCard";
import Link from "next/link";

const CategoryList = () => {
	return <FetchList />;
};

const FetchList = async () => {
	try {
		const response = await fetch("https://dummyjson.com/products/category/smartphones");
		console.log(response);
		const data = await response.json();

		return data.products.map((product) => {
			return (
				<div key={product.id} className="relative">
					<CategoryCard title={product.title} price={product.price} image={product.thumbnail} />
				</div>
			);
		});
	} catch (error) {
		return <p>Whoops! An error has occurred</p>;
	}
};

export default CategoryList;