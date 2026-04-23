"use client"
import { IoOptionsOutline } from "react-icons/io5";
import { useRouter, useSearchParams } from "next/navigation";



const Filter = () => {
  const router = useRouter();
const searchParams = useSearchParams();

const handleFilter = (event, key, value) => {
    const checked = event.target.checked;
  const params = new URLSearchParams(searchParams);

 if (checked) {
    params.set(key, value);
  } else {
    params.delete(key);
  }

  router.push(`?${params.toString()}`);
};
  return (
    <section className="border-solid border-2 w-fit pl-8 pr-6 pb-2 h-fit">
      <div className="flex items-center gap-3 pt-2 pb-2">
        <IoOptionsOutline className="size-7" />{" "}
        <h4>FILTER</h4>
      </div>
      <div className="mt-2 ml-4">
        <section className="mb-4">
          <h4>Price</h4>
          <div className="flex items-center gap-3">
            <input
              className="accent-black"
              type="checkbox"
              onChange={(event) => handleFilter(event, "price", "low")}
/>
            {" "}
            <p className="w-20">under 500</p>
          </div>
          <div className="flex items-center gap-3">
            <input
              className="accent-black"
              type="checkbox"
              onChange={(event) => handleFilter( event,"price", "high")}
/>{" "}
            <p>over 500</p>
          </div>
        </section>

        <section className="mb-4">
          <h4>Brand</h4>
          <div className="flex items-center gap-3">
            <input
              className="accent-black"
              type="checkbox"
              onChange={(event) => handleFilter(event, "brand", "apple")}
/>{" "}
            <p>Apple</p>
          </div>
          <div className="flex items-center gap-3">
            <input
              className="accent-black"
              type="checkbox"
              onChange={(event) => handleFilter(event, "brand", "asus")}
            />{" "}
            <p>Asus</p>
          </div>
          <div className="flex items-center gap-3">
            <input
              className="accent-black"
              type="checkbox"
              onChange={(event) => handleFilter(event, "brand", "huwawei")}
            />{" "}
            <p>Huawei</p>
          </div>
          <div className="flex items-center gap-3">
            <input
              className="accent-black"
              type="checkbox"
              onChange={(event) => handleFilter(event, "brand", "lenovo")}
            />{" "}
            <p>Lenovo</p>
          </div>
          <div className="flex items-center gap-3">
            <input
              className="accent-black"
              type="checkbox"
              onChange={(event) => handleFilter(event, "brand", "oppo")}
            />{" "}
            <p>Oppo</p>
          </div>
          <div className="flex items-center gap-3">
            <input
              className="accent-black"
              type="checkbox"
              onChange={(event) => handleFilter(event, "brand", "samsung")}
            />{" "}
            <p>Samsung</p>
          </div>
<div className="flex items-center gap-3">
            <input
              className="accent-black"
              type="checkbox"
              onChange={(event) => handleFilter(event, "brand", "vivo")}
            />{" "}
            <p>Vivo</p>
          </div>
        </section>

      </div>
    </section>
  );
};

export default Filter;
<section>
  <div className="flex">
    ICON <h4>FILTER</h4>
  </div>
</section>;
