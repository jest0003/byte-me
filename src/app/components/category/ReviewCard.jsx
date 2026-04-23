const ReviewCard = ({ comment, rating, username, date }) => {
	return (
		<section className="flex flex-col border-2 border-b-6 p-5 px-10 rounded border-[#4E77F6]">
			<div className="flex gap-1">
				{[...Array(Math.round(rating))].map((_, index) => (
					<span key={index}>⭐</span>
				))}
			</div>
			<div className="flex flex-col gap-6 items-start">
				<h4>{comment}</h4>
				<p>{username}</p>
				<p className="text-gray-500">{date}</p>
			</div>
		</section>
	);
};

export default ReviewCard;

/* runder rating til et helt tal, hvor den derefter laver et array med den længde som der er i "rating" */
/* man gør arrayet “brugbart”, laver undefined pladser så det ikke bliver sprunget over, så man kan loope over det */
/* looper igennem og viser en stjerne pr. loop */

/* "_" er en parameter til at modtage værdien, selvom man ikke bruger den */
