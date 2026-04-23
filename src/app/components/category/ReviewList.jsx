import ReviewCard from "./ReviewCard";

const ReviewList = ({ data }) => {
	return (
		<section className="p-10 pb-10">
			<h2 className="text-xl mb-6 ml-2 font-medium">Reviews</h2>
			<div className="flex flex-row gap-10 justify-between">
				{data.reviews?.map((review, index) => (
					<ReviewCard
						key={index}
						comment={review.comment}
						rating={review.rating}
						username={review.reviewerName}
						date={review.date}
					/>
				))}
			</div>
		</section>
	);
};

export default ReviewList;
