import Filter from "../components/category/Filter";
const Category = () => {
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
            <h1>Phones</h1>
            <p>HER KOMMER CARDS</p>
            <img
              src="/bg-tech/tech-short.png"
              className="w-screen h-40 object-cover opacity-30"
            ></img>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Category;
