import { useUserContext } from "../hooks/useUserContext";

interface Rule {
  followers: number | number[];
  public_repos: number;
  stars: number;
}

const DEFAULT_STARS = 0.5;

const EMPTY_STARS = 0;

const rules: Record<string, Rule> = {
  a: { followers: 10, public_repos: 8, stars: 5 },
  b: { followers: [7, 9], public_repos: 7, stars: 4 },
  c: { followers: [5, 6], public_repos: 5, stars: 3 },
  d: { followers: [3, 4], public_repos: 3, stars: 2 },
  e: { followers: [1, 2], public_repos: 1, stars: 1 },
};

export function useCalculateStarRating() {
  const { userData } = useUserContext();

  if (!userData) return EMPTY_STARS;

  const { followers, public_repos } = userData;

  // map each rule
  for (const rule in rules) {
    const actualRule = rules[rule] as Rule;

    if (followers === 0 && public_repos === 0) return EMPTY_STARS;

    const verifyFollowers = Array.isArray(actualRule.followers)
      ? followers >= actualRule.followers[0] &&
        followers <= actualRule.followers[1]
      : followers >= actualRule.followers;

    const verifyPublicRepos = public_repos >= actualRule.public_repos;

    // check if the user matches the rules
    if (verifyFollowers && verifyPublicRepos) {
      return actualRule.stars;
    }
  }

  // loop ended. return the default value
  return DEFAULT_STARS;
}
