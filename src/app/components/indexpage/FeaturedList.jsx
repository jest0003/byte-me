import FeaturedCard from "./FeaturedCard";
import Link from "next/link";

const FeaturedList = () => {
	return <FetchBreed />;
};

const FetchBreed = async () => {
	"use server";
	try {
		const response = await fetch("https://dummyjson.com/products/category/smartphones", {
			headers: { "x-api-key": process.env.API_KEY },
		});
		console.log(response);
		const breeds = await response.json();

		return breeds.map((breed) => {
			return (
				<div key={breed.id} className="relative">
					<Link href={`/detailview/${breed.id}`}>
						<FeaturedCard key={breed.id} breedGroup={breed.name} origin={breed.price} image={breed.image.url} />
					</Link>
				</div>
			);
		});
	} catch (error) {
		return <p>Whoops! An error has occurred</p>;
	}
};

export default FeaturedList;
