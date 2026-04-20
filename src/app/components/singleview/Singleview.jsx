import Button from "./Button";

const Singleview = async () => {
	const res = await fetch("https://dummyjson.com/products/1");
	const data = await res.json();

	return (
		<div className="flex flex-row gap-4 p-10 font-sans items-start">
			{/* thumbnails */}
			<div className="flex flex-col gap-4">
				{[1, 2, 3].map((i) => (
					<div key={i} className="h-[100px] w-[100px] rounded-sm" style={{ background: "var(--color-3)" }} />
				))}
			</div>

			{/* billede */}

			{/* info */}
			<div className="max-w-[490px] text-black">
				<h1 className="mb-1 mt-[-1.5rem]">Product name</h1>

				<p className="text-gray-600 mb-6 leading-relaxed">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
					dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
					ex ea commodo consequat.
				</p>

				<div className="mb-6">
					<p className="text-2xl font-medium">$9.99</p>
					<p className="text-sm mt-1">in stock 99kr</p>
				</div>

				<Button />

				{/* info */}
				<div className="space-y-4 pt-2 text-sm">
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
							<p className="text-gray-500 text-xs">Free 30days Delivery Returns</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Singleview;

// import Button from "./Button";

// const Singleview = async () => {
//   const res = await fetch("https://dummyjson.com/products/1");
//   const data = await res.json();

//   return (
//     <div className="flex flex-row gap-4 p-10 font-sans items-start">
//       {/* thumbnails */}
//       <div className="flex flex-col gap-4">
//         {[1, 2, 3].map((i) => (
//           <div key={i} className="h-[100px] w-[100px] rounded-sm" style={{ background: "var(--color-3)" }} />
//         ))}
//       </div>

//       {/* billede */}
//       <figure className="flex h-[500px] w-[500px] items-center justify-center rounded-sm p-8" style={{ background: "var(--color-3)" }}>
//         <img src={data.thumbnail} alt={data.title} className="max-h-full object-contain" />
//       </figure>

//       {/* info */}
//       <div className="max-w-[490px] text-black">
//         <h1 className="mb-1 mt-[-1.6rem]">{data.title}</h1>

//         <p className="text-gray-600 mb-6 leading-relaxed">{data.description}</p>

//         <div className="mb-6">
//           <p className="text-2xl font-medium">${data.price}</p>
//           <p className="text-sm mt-1">in stock ({data.stock})</p>
//         </div>

//         <Button />

//         {/* info */}
//         <div className="space-y-4 pt-2 text-sm">
//           <div className="flex items-start gap-3">
//             <span className="text-xl">🚚</span>
//             <div>
//               <p className="font-semibold">Free Delivery</p>
//               <p className="text-gray-500 underline text-xs">Enter your Postal code for Delivery Availability</p>
//             </div>
//           </div>

//           <div className="flex items-start gap-3">
//             <span className="text-xl">🔄</span>
//             <div>
//               <p className="font-semibold">Return Delivery</p>
//               <p className="text-gray-500 text-xs">Free 30days Delivery Returns</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Singleview;
