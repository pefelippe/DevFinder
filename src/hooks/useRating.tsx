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

export function useRating() {
  const { data } = useUserContext();

  if (!data || (data.followers === 0 && data.public_repos === 0)) {
    return EMPTY_STARS;
  }

  const { followers, public_repos } = data;

  for (const ruleKey in rules) {
    const rule = rules[ruleKey];
    const {
      followers: ruleFollowers,
      public_repos: rulePublicRepos,
      stars,
    } = rule;

    const followersInRange =
      Array.isArray(ruleFollowers) &&
      followers >= ruleFollowers[0] &&
      followers <= ruleFollowers[1];

    const verifyFollowersRule = Array.isArray(ruleFollowers)
      ? followersInRange
      : followers >= ruleFollowers;

    const verifyPublicReposRule = public_repos >= rulePublicRepos;

    if (verifyFollowersRule && verifyPublicReposRule) {
      return stars;
    }
  }

  return DEFAULT_STARS;
}
