import CategoryCard from "./CategoryCard";


const CategoryList = async ({products, slug}) => {
	try {
		

		return products.map((product) => {
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