type StarRatingProps = {
  rating: number; // Рейтинг от 1 до 5
};

export default function StarRating({ rating }: StarRatingProps) {
  const maxStars = 5; // Максимальное количество звезд
  return (
    <div className="flex items-center">
      {Array.from({ length: maxStars }, (_, index) => (
        <span key={index} className={index < rating ? "text-yellow-500" : "text-gray-300"}>
          ★
        </span>
      ))}
    </div>
  );
}
