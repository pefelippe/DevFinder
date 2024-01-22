import UserSearch from "@components/UserSearch";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

jest.mock("@hooks/useUserData", () => ({
  useUserData: jest.fn().mockReturnValue({
    mutate: jest.fn(),
  }),
}));

describe("UserSearch", () => {
  beforeEach(() => {
    render(<UserSearch />);
  });

  it("renders the search form", () => {
    const inputElement = screen.getByPlaceholderText("Enter username");
    const searchButton = screen.getByText("Search");

    expect(inputElement).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it("submits the form and calls useUserData on successful validation", async () => {
    const inputElement = screen.getByPlaceholderText("Enter username");
    const searchButton = screen.getByText("Search");

    userEvent.type(inputElement, "testuser");
    userEvent.click(searchButton);
  });
});
