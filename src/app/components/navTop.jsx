"use client";

import { SiAirbyte } from "react-icons/si";
import { IoMdSearch } from "react-icons/io";
import { RiShoppingBasket2Line } from "react-icons/ri";
import Link from "next/link";
import { useCart } from "./context/CartContext";

const NavTop = () => {
	const { cart } = useCart();
	return (
		<nav className="flex items-center justify-between mt-3 mb-12">
			<Link href="/" className="flex items-center">
				<SiAirbyte className="size-8 mr-2" /> <h4>ByteMe</h4>
			</Link>
			<div className="flex items-center justify-end gap-4 ml-6">
				<Link href="/">
					<h5 className="hover:underline">Home</h5>
				</Link>
				<Link href="/category/smartphones">
					<h5 className="hover:underline">Phones</h5>
				</Link>
				<Link href="/category/tablets">
					<h5 className="hover:underline">Tablets</h5>
				</Link>
				<Link href="/category/laptops">
					<h5 className="hover:underline">Laptops</h5>
				</Link>
				<Link href="/category/mobile-accessories">
					<h5 className="hover:underline">Mobile Accessories</h5>
				</Link>
			</div>
			<div className="flex items-center">
				<IoMdSearch className="size-7 mr-3 cursor-pointer" />

				<Link href="/pay" className="relative">
					<RiShoppingBasket2Line className="size-7 cursor-pointer" />

					{/* 4. Vis tallet (badgen) kun hvis der er noget i kurven */}
					{cart.length > 0 && (
						<span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center">
							{cart.length}
						</span>
					)}
				</Link>
			</div>
		</nav>
	);
};

export default NavTop;
