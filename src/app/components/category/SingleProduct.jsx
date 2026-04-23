import Favorite from "../indexpage/FavoritElement";
import Button from "../../components/singleview/Button";

const SingleProduct = ({ data }) => {
	return (
		<section className="flex flex-row gap-4 p-10 font-sans items-start mt-20">
			<figure
				className="flex relative h-[500px] w-[500px] items-center justify-center rounded-sm p-8"
				style={{ background: "var(--color-3)" }}
			>
				<img src={data.thumbnail} alt={data.title} className="h-[352px] object-contain" />
				<Favorite />
			</figure>

			<div className="max-w-[490px] text-black">
				<h1 className="text-3xl font-bold mb-3">{data.title}</h1>
				<p className="text-gray-600 mb-6 leading-relaxed">{data.description}</p>

				<div className="mb-6">
					<p className="text-2xl font-medium">${data.price}</p>
					<p className="text-sm mt-1">in stock ({data.stock})</p>
				</div>

				<Button />

				<div className="space-y-4 pt-6 text-sm border-t border-gray-200 mt-6">
					<div className="flex items-start gap-3">
						<span className="text-xl">🚚</span>
						<div>
							<p className="font-semibold">Free Delivery</p>
							<p className="text-gray-500 underline text-xs">
								Enter your Postal code for Delivery Availability
							</p>
						</div>
					</div>

					<div className="flex items-start gap-3">
						<span className="text-xl">🔄</span>
						<div>
							<p className="font-semibold">Return Delivery</p>
							<p className="text-gray-500 text-xs">Free 30 days Delivery Returns</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SingleProduct;
