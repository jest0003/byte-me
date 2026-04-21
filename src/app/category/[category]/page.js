import Filter from "../../components/category/Filter";
import FeaturedCard from "../../components/indexpage/FeaturedCard";

const CategoryPage = async ({ params }) => {
  const { category } = await params;

  const [productRes, catRes] = await Promise.all([
    fetch(
      `https://dummyjson.com/products/category/${category}`,
    ),
    fetch(
      "https://dummyjson.com/products/categories",
    ),
  ]);

  const productData = await productRes.json();
  const categories = await catRes.json();

  const currentCategory = categories.find(
    (cat) => cat.slug === category,
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
            <p>Bred / crumb </p>
            <h1>{currentCategory?.name}</h1>
          </section>
        </article>
        <article className="ml-4 mb-8 mt-8">
          <div className="flex flex-wrap gap-8">
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
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
