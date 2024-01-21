import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useUserRating } from "@hooks/useUserRating";
import React from "react";

type RenderStarsProps = {
  rating: number;
};

const renderStars = ({ rating }: RenderStarsProps) => {
  const stars = [];
  const numOfStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  // Fill the stars array with blank stars
  while (stars.length < numOfStars) {
    stars.push(<FaRegStar key={stars.length} className="star-icon" />);
  }

  // Replace the first star with a half star if needed
  if (hasHalfStar) {
    stars[0] = <FaStarHalfAlt key={stars.length} className="star-icon" />;
    return stars;
  }

  // Replace the stars array with full stars
  for (let i = 0; i < fullStars; i++) {
    stars[i] = <FaStar key={stars.length} className="star-icon" />;
  }

  return stars;
};

const StarsRating = () => {
  const rating = useUserRating();

  return <div className="flex gap-3 text-4xl">{renderStars({ rating })}</div>;
};

export default StarsRating;
