import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

import { useCalculateStarRating } from "../hooks/useCalculateStarRating";

const RenderStars = (score: number) => {
  const stars = [];
  const NumOfStars = 5;
  const fullStars = Math.floor(score);
  const hasHalfStar = score % 1 !== 0;

  if (hasHalfStar)
    stars.push(<FaStarHalfAlt key={stars.length} className="h-7 w-7" />);

  for (let i = 0; i < fullStars; i++)
    stars.push(<FaStar className="h-7 w-7" key={stars.length} />);

  // fill the starts with blank stars
  while (stars.length < NumOfStars)
    stars.push(<FaRegStar className="h-7 w-7" key={stars.length} />);

  return stars;
};

export function StarsRating() {
  const numStars = useCalculateStarRating();
  return <div className="flex gap-2">{RenderStars(numStars)}</div>;
}

export default StarsRating;
