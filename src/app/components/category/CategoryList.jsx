import CategoryCard from "./CategoryCard";

const CategoryList = ({slug}) => {
	return <FetchList slug={slug} />;
};

const FetchList = async ({slug}) => {
	try {
		const response = await fetch(`https://dummyjson.com/products/category/${slug}`);
		console.log(response);

		const data = await response.json();

		return data.products.map((product) => {
			return (
				<div key={product.id} className="relative">
					<CategoryCard key={product.id} slug={slug} id={product.id} title={product.title} price={product.price} image={product.thumbnail} />
				</div>
			);
		});
	} catch (error) {
		return <p>Whoops! An error has occurred</p>;
	}
};

export default CategoryList;