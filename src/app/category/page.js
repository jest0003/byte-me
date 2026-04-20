import Filter from "../components/category/Filter";
const Category = () => {
    return ( 
        <div>
        <article className="relative pb-16">
<Filter />
<img src="/bg-tech/tech-long.png"
height={100}
className="w-full h-20 object-cover opacity-30"></img>

<section className="absolute top-14">
    <p>Bred / crumb </p>
        <h1>Phones</h1>
</section>
        </article>
        <article>
            <p>Tekst</p>
        </article>
        <img src="/bg-tech/tech-short.png" className="w-full h-40 object-cover opacity-30"></img>
        </div>
     );
}
 
export default Category;