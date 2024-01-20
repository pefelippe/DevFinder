import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

import { useRating } from "../hooks/useRating";

type RenderStarsProps = {
  rating: number;
};

const renderStars = ({ rating }: RenderStarsProps) => {
  const stars = [];
  const numOfStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  stars.push(
    hasHalfStar ? (
      <FaStarHalfAlt key={stars.length} className="star-icon" />
    ) : null
  );

  for (let i = 0; i < fullStars; i++)
    stars.push(<FaStar key={stars.length} className="star-icon" />);

  // fill the remaining stars with blank stars
  while (stars.length <= numOfStars)
    stars.push(<FaRegStar key={stars.length} className="star-icon" />);

  return stars;
};

const StarsRating = () => {
  const rating = useRating();
  return <div className="flex gap-2">{renderStars({ rating })}</div>;
};

export default StarsRating;
