const Footer = () => {
	/* 151318 */
	return (
		<nav className="px-5 py-10 w-full" style={{ background: "var(--text)", color: "var(--color-white)" }}>
			<div className="max-w-[1200px] mx-auto flex justify-between gap-8">
				<div className="flex flex-1 mt-10">
					<div className="flex-1">
						<h2 className="text-2xl mb-5">About</h2>
						<ul className="space-y-2">
							<li>
								<a href="#" className="text-base hover:underline">
									About Us
								</a>
							</li>
							<li>
								<a href="#" className="text-base hover:underline">
									Careers
								</a>
							</li>
							<li>
								<a href="#" className="text-base hover:underline">
									Privacy Policy
								</a>
							</li>
							<li>
								<a href="#" className="text-base hover:underline">
									Cookie Policy
								</a>
							</li>
						</ul>
					</div>

					<div className="flex-1">
						<h2 className="text-2xl mb-5">Support</h2>
						<ul className="space-y-2">
							<li>
								<a href="#" className="text-base hover:underline">
									Customer Care
								</a>
							</li>
							<li>
								<a href="#" className="text-base hover:underline">
									Shipping
								</a>
							</li>
							<li>
								<a href="#" className="text-base hover:underline">
									Returns
								</a>
							</li>
							<li>
								<a href="#" className="text-base hover:underline">
									FAQ
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="flex flex-1 justify-end">
					<div>
						<h2 className="text-2xl mb-5 hyphens-auto">
							Get news, offers and competitions directly in your inbox
						</h2>

						<form className="flex flex-col gap-5 mb-5">
							<input
								type="email"
								placeholder="Enter your email"
								className="p-3 border border-black rounded-full text-base bg-[#E8F0F2] text-[#272924]"
							/>
							<button
								type="submit"
								className="p-3 border max-w-[200px] border-[#2729249f] rounded-full bg-[#6BB6B9] text-[#151318] text-base hover:bg-[#8a938e] transition-colors duration-500"
							>
								SIGN UP
							</button>
						</form>

						<p className="text-sm leading-relaxed hyphens-auto">
							By submitting your email address, you agree to receive marketing information about ByteMe's
							products by email and social media platforms. For more information about how we use your personal
							information, please see our
							<a href="#" className="ml-1 underline">
								Privacy Policy
							</a>
							. You can unsubscribe at any time by contacting us.
						</p>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Footer;
