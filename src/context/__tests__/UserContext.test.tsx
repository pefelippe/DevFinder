import { UserProvider } from "@context/UserContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("UserProvider", () => {
  it("renders children without crashing", () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <UserProvider>
          <div data-testid="child">Hello</div>
        </UserProvider>
      </QueryClientProvider>
    );

    const childElement = screen.getByTestId("child");
    expect(childElement).toBeInTheDocument();
  });
});
