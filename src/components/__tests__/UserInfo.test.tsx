import { useUserData } from "@hooks/useUserData";
import { render, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import React from "react";

import UserInfo from "../UserInfo";

jest.mock("@hooks/useUserData");

describe("UserInfo", () => {
  test("renders error state", () => {
    (useUserData as jest.Mock).mockReturnValue({
      isError: true,
    });

    const { result } = renderHook(() => useUserData());
    expect(result.current.isError).toBe(true);

    render(<UserInfo />);

    const errorCard = screen.getByTestId("error-card");
    expect(errorCard).toBeInTheDocument();
    expect(screen.getByText("Failed to Retrieve User 😞")).toBeInTheDocument();
    expect(
      screen.getByText(
        "We apologize for the inconvenience. Please double-check the username or try again later."
      )
    ).toBeInTheDocument();
  });

  test("renders loading state", () => {
    (useUserData as jest.Mock).mockReturnValue({
      isPending: true,
    });

    const { result } = renderHook(() => useUserData());
    expect(result.current.isPending).toBe(true);

    render(<UserInfo />);

    const errorCard = screen.getByTestId("loading-indicator");
    expect(errorCard).toBeInTheDocument();
  });

  test("renders user details", () => {
    (useUserData as jest.Mock).mockReturnValue({
      data: {
        avatar_url: "https://example.com/avatar.jpg",
        name: "John Doe",
        bio: "Software Developer",
        email: "john@example.com",
        location: "New York, NY",
        followers: 100,
        public_repos: 20,
      },
    });

    render(<UserInfo />);

    const userCard = screen.getByTestId("user-details-card");

    expect(userCard).toBeInTheDocument();

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Software Developer")).toBeInTheDocument();
    expect(screen.getByText("Followers")).toBeInTheDocument();
    expect(screen.getByText("Repos")).toBeInTheDocument();
    expect(screen.getByAltText("User Avatar")).toHaveAttribute(
      "src",
      "https://example.com/avatar.jpg"
    );
  });
});
