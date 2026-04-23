"use client";

import Button from "./Button";
import Summary from "./Summary";
import { useCart } from "../context/CartContext";

const Payment = () => {
	const { cart } = useCart();
	const subtotal = cart.reduce((acc, item) => {
		return acc + Number(item.price) * item.quantity;
	}, 0);

	return (
		<div className="flex flex-col gap-8 p-10 font-sans max-w-4xl mx-auto text-black">
			{cart.length === 0 ? (
				<p>Your cart is empty</p>
			) : (
				cart.map((item, index) => (
					<div key={index} className="flex flex-row gap-6 items-start border-b border-[#B9C6CB] pb-6">
						<figure
							className="flex h-[252px] w-[252px] items-center justify-center rounded-sm p-8"
							style={{ background: "var(--color-3)" }}
						>
							<img src={item.image} className="h-full object-contain" alt={item.title} />
						</figure>

						<div className="flex-1">
							<div className="flex justify-between items-start">
								<div>
									<h3 className="font-normal">{item.title}</h3>

									<Button cartId={item.cartId} quantity={item.quantity} />
								</div>

								<h3 className="text-xl font-normal uppercase">{item.price * item.quantity}$</h3>
							</div>

							<div className="mt-6 space-y-1 text-sm flex items-center gap-2">
								<span>🚚</span>
								<p>In stock and ready to ship</p>
							</div>
						</div>
					</div>
				))
			)}

			<Summary subtotal={subtotal} />
		</div>
	);
};

export default Payment;
