import Filter from "../../components/category/Filter";
import CategoryList from "@/app/components/category/CategoryList";
import SortDropdown from "@/app/components/category/SortDropDown";
import { Suspense } from "react";

const CategoryPage = async ({
  params,
  searchParams,
}) => {
  const { slug } = await params;
  const { sort, price, brand } =
    await searchParams;

  const [productRes, catRes] = await Promise.all([
    fetch(
      `https://dummyjson.com/products/category/${slug}`,
    ),
    fetch(
      "https://dummyjson.com/products/categories",
    ),
  ]);

  const productData = await productRes.json();
  let products = [...productData.products];

  //Sorting
  if (sort === "asc") {
    products = products.sort((a, b) =>
      a.title.localeCompare(b.title),
    );
  }

  if (sort === "desc") {
    products = products.sort((a, b) =>
      b.title.localeCompare(a.title),
    );
  }

  if (sort === "price-asc") {
    products = products.sort(
      (a, b) => a.price - b.price,
    );
  }

  if (sort === "price-desc") {
    products = products.sort(
      (a, b) => b.price - a.price,
    );
  }

  //Filtering
  if (price === "low") {
    products = products.filter(
      (p) => p.price < 500,
    );
  }

  if (price === "high") {
    products = products.filter(
      (p) => p.price >= 500,
    );
  }

  if (brand) {
    products = products.filter(
      (p) => p.brand.toLowerCase() === brand,
    );
  }
  const categories = await catRes.json();

  const currentCategory = categories.find(
    (cat) => cat.slug === slug,
  );

  return (
    <div className="flex">
      <Suspense fallback={<div>Loading...</div>}>
        <Filter />
        <div className="w-screen">
          <article className="relative pb-16">
            <img
              src="/bg-tech/tech-long.png"
              height={100}
              className="w-full h-20 object-cover opacity-30"
            ></img>

            <section className="absolute top-14 ml-4">
              <p>
                Category /{" "}
                {currentCategory?.name}{" "}
              </p>
              <h1>{currentCategory?.name}</h1>
            </section>
            <div className="absolute right-0 top-28">
              <SortDropdown />
            </div>
          </article>
          <article className="ml-4 mb-8 mt-8">
            <div className="flex flex-wrap gap-8">
              <CategoryList
                products={products}
                slug={slug}
              />
            </div>
          </article>
          <img
            src="/bg-tech/tech-short.png"
            className="w-screen h-40 object-cover opacity-30"
          ></img>
        </div>
      </Suspense>
    </div>
  );
};

export default CategoryPage;
