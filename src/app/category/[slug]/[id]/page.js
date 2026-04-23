"use server";
import SingleProduct from "../../../components/category/SingleProduct";
import ReviewList from "../../../components/category/ReviewList";
import Link from "next/link";
import { Suspense } from "react";

const ProductPage = async ({ params }) => {
  const { id, category, title } = await params;
  /* const { category } = await params; */

  const response = await fetch(
    `https://dummyjson.com/products/${id}`,
    {
      cache: "no-store",
    },
  );

  const data = await response.json();

  return (
    <article>
      <Suspense fallback={<div>Loading...</div>}>
        <p>
          <Link href={"/"}>Home</Link> /{" "}
          <Link
            href={`/category/${data.category}`}
          >
            {data.category}
          </Link>{" "}
          / {data.title}
        </p>
        <SingleProduct data={data} />
        <ReviewList data={data} />
      </Suspense>
    </article>
  );
};

export default ProductPage;
