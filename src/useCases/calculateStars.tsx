import React from "react";
import { useUserContext } from "../hooks/useUserContext";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface Rule {
  followers: number | number[];
  repositories: number;
  stars: number;
}

const rules: Record<string, Rule> = {
  a: { followers: 10, repositories: 8, stars: 5 },
  b: { followers: [7, 9], repositories: 7, stars: 4 },
  c: { followers: [5, 6], repositories: 5, stars: 3 },
  d: { followers: [3, 4], repositories: 3, stars: 2 },
  e: { followers: [1, 2], repositories: 1, stars: 1 },
  f: { followers: [0], repositories: 0, stars: 0 },
};

function getNumStars(followers: number, repositories: number) {
  const default_stars = 0.5;

  // map each rule
  for (const rule in rules) {
    const actualRule = rules[rule] as Rule;
    const verifyFollowers = Array.isArray(actualRule.followers)
      ? followers >= actualRule.followers[0] &&
        followers <= actualRule.followers[1]
      : followers >= actualRule.followers;

    const verifyRepositories = repositories >= actualRule.repositories;

    // check if the user matches the rules
    if (verifyFollowers && verifyRepositories) {
      console.log("matching");
      return actualRule.stars;
    }
  }

  // loop ended. if there is no matching rules, return the default value
  return default_stars;
}

interface StarRatingProps {
  score: number;
}

const StarRating: React.FC<StarRatingProps> = ({ score }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(score);
    const hasHalfStar = score % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar className="h-7 w-7" key={i} />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" />);
    }

    return stars;
  };

  return <div className="flex gap-3">{renderStars()}</div>;
};

export function CalculateStars() {
  const { userData } = useUserContext();

  if (!userData) return <></>;

  const { followers, public_repos } = userData;
  const stars = getNumStars(followers, public_repos);
  return <StarRating score={stars} />;
}
