import StarRating from "@/components/star-rating/star-rating";

type ReviewsProps = {
  id: number;
  name: string;
  review: string;
  link: string;
  rating: number;
}

export const Reviews = ({reviews}: {reviews:ReviewsProps[]}) => {
  return (
    <div className=" w-full h-full">
      {reviews.map((review) => (
        <div key={review.id} className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow mb-5">
          <div>
            <a href={review.link} className="text-gray-800 font-semibold text-xl hover:underline">
              {review.name}
            </a>
            <StarRating rating={review.rating}/>
          </div>
          <p className="text-gray-600 mt-4 leading-relaxed">
            {review.review}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Reviews;