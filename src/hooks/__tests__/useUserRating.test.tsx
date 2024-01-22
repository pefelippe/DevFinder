import { useUserData } from "@hooks/useUserData";
// useUserRating.test.ts
import { renderHook } from "@testing-library/react-hooks";

import { useUserRating } from "../useUserRating";

jest.mock("@hooks/useUserData");

describe("useUserRating", () => {
  it("should return empty stars if user data is not available", () => {
    (useUserData as jest.Mock).mockReturnValueOnce({ data: null });

    const { result } = renderHook(() => useUserRating());
    expect(result.current).toBe(0);
  });

  it("should return empty stars if followers and public_repos are both zero", () => {
    (useUserData as jest.Mock).mockReturnValueOnce({
      data: { followers: 0, public_repos: 0 },
    });

    const { result } = renderHook(() => useUserRating());
    expect(result.current).toBe(0);
  });

  it("should return 1 stars based on rules for a user with data", () => {
    (useUserData as jest.Mock).mockReturnValueOnce({
      data: { followers: 1, public_repos: 1 },
    });

    const { result } = renderHook(() => useUserRating());
    expect(result.current).toBe(1);
  });

  it("should return 2 stars based on rules for a user with data", () => {
    (useUserData as jest.Mock).mockReturnValueOnce({
      data: { followers: 3, public_repos: 3 },
    });

    const { result } = renderHook(() => useUserRating());
    expect(result.current).toBe(2);
  });

  it("should return 3 stars based on rules for a user with data", () => {
    (useUserData as jest.Mock).mockReturnValueOnce({
      data: { followers: 5, public_repos: 5 },
    });

    const { result } = renderHook(() => useUserRating());
    expect(result.current).toBe(3);
  });

  it("should return 4 stars based on rules for a user with data", () => {
    (useUserData as jest.Mock).mockReturnValueOnce({
      data: { followers: 7, public_repos: 7 },
    });

    const { result } = renderHook(() => useUserRating());
    expect(result.current).toBe(4);
  });

  it("should return 5 stars based on rules for a user with data", () => {
    (useUserData as jest.Mock).mockReturnValueOnce({
      data: { followers: 10, public_repos: 8 },
    });

    const { result } = renderHook(() => useUserRating());
    expect(result.current).toBe(5);
  });

  it("should return default stars if no rules match", () => {
    (useUserData as jest.Mock).mockReturnValueOnce({
      data: { followers: 20, public_repos: 0 },
    });

    const { result } = renderHook(() => useUserRating());
    expect(result.current).toBe(0.5);
  });
});
