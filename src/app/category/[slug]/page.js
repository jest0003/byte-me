import Filter from "../../components/category/Filter";
import CategoryList from "@/app/components/category/CategoryList";
import Link from "next/link";
import SortDropdown from "@/app/components/category/SortDropDown";

const CategoryPage = async ({ params, searchParams }) => {
	const { slug } = await params;
	const { sort } = await searchParams;

	const [productRes, catRes] = await Promise.all([
		fetch(`https://dummyjson.com/products/category/${slug}`),
		fetch("https://dummyjson.com/products/categories"),
	]);

	const productData = await productRes.json();
	let products = [...productData.products];

	if (sort === "asc") {
		products = products.sort((a, b) => a.title.localeCompare(b.title));
	}

	if (sort === "desc") {
		products = products.sort((a, b) => b.title.localeCompare(a.title));
	}

	if (sort === "price-asc") {
		products = products.sort((a, b) => a.price - b.price);
	}

	if (sort === "price-desc") {
		products = products.sort((a, b) => b.price - a.price);
	}
	const categories = await catRes.json();

	const currentCategory = categories.find((cat) => cat.slug === slug);

	return (
		<div className="flex">
			<Filter />
			<div className="w-screen">
				<article className="relative pb-16">
					<img src="/bg-tech/tech-long.png" height={100} className="w-full h-20 object-cover opacity-30"></img>

					<section className="absolute top-14 ml-4">
						<p>
							<Link href={"/"}>Home</Link> / {currentCategory?.name}{" "}
						</p>
						<h1>{currentCategory?.name}</h1>
					</section>
				</article>
				<article className="ml-4 mb-8 mt-8">
					<div className="flex justify-end">
						<SortDropdown />
					</div>
					<div className="flex flex-wrap gap-8">
						<CategoryList products={products} slug={slug} />
					</div>
				</article>
				<img src="/bg-tech/tech-short.png" className="w-screen h-40 object-cover opacity-30"></img>
			</div>
		</div>
	);
};

export default CategoryPage;
