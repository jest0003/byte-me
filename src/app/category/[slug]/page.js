import Filter from "../../components/category/Filter";
import CategoryList from "@/app/components/category/CategoryList";
import Link from "next/link";

const CategoryPage = async ({ params, searchParams }) => {
  const { slug } = await params;
  const { sort } = await searchParams;

  const [productRes, catRes] = await Promise.all([
    fetch(
      `https://dummyjson.com/products/category/${slug}`,
    ),
    fetch(
      "https://dummyjson.com/products/categories",
    ),
  ]);

  const productData = await productRes.json();
let products = productData.products;

if (sort === "asc") {
  products = products.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
}

if (sort === "desc") {
  products = products.sort((a, b) =>
    b.title.localeCompare(a.title)
  );
}

  const categories = await catRes.json();

  const currentCategory = categories.find(
    (cat) => cat.slug === slug,
  );

  return (
    <div className="flex">
      <Filter />
      <div className="w-screen">
        <article className="relative pb-16">
          <img
            src="/bg-tech/tech-long.png"
            height={100}
            className="w-full h-20 object-cover opacity-30"
          ></img>

          <section className="absolute top-14 ml-4">
            <p>Category / {currentCategory?.name} </p>
            <h1>{currentCategory?.name}</h1>
          </section>
        </article>
        <article className="ml-4 mb-8 mt-8">
          <div className="flex gap-4">
            <Link href={`?sort=asc`} className="px-3 py-1 bg-gray-200 rounded">
  A-Z
</Link>

<Link href={`?sort=desc`} className="px-3 py-1 bg-gray-200 rounded">
  Z-A
</Link>
          </div>
          <div className="flex flex-wrap gap-8">
        <CategoryList products={products} slug={slug}/>
          </div>
        </article>
        <img
          src="/bg-tech/tech-short.png"
          className="w-screen h-40 object-cover opacity-30"
        ></img>
      </div>
    </div>
  );
};

export default CategoryPage;
