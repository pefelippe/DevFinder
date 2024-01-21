import { useUserData } from "@hooks/useUserData";

interface Rule {
  followers: number | [number, number];
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

export function useUserRating() {
  const { data } = useUserData();

  // Return empty stars if user data is not available or followers/public_repos are both zero
  if (!data || (data.followers === 0 && data.public_repos === 0)) {
    return EMPTY_STARS;
  }

  const { followers, public_repos } = data;

  // Iterate through the rules to find a matching rule
  for (const ruleKey in rules) {
    const rule = rules[ruleKey];
    const {
      followers: ruleFollowers,
      public_repos: rulePublicRepos,
      stars,
    } = rule;

    // Check if the user's followers are within the specified range (if it's an array)
    const followersInRange =
      Array.isArray(ruleFollowers) &&
      followers >= ruleFollowers[0] &&
      followers <= ruleFollowers[1];

    // Verify the followers rule based on whether it's a range or a single value
    const verifyFollowersRule = Array.isArray(ruleFollowers)
      ? followersInRange
      : followers >= ruleFollowers;

    // Verify the public_repos rule
    const verifyPublicReposRule = public_repos >= rulePublicRepos;

    // If both followers and public_repos rules are satisfied, return the stars for that rule
    if (verifyFollowersRule && verifyPublicReposRule) {
      return stars;
    }
  }

  // If no rules match, return the default stars
  return DEFAULT_STARS;
}
