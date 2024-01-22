// Import useContext from react

import { renderHook } from "@testing-library/react-hooks";
import { useContext } from "react";

import { useUserData } from "../useUserData";

const mockUserContextValue = {};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

describe("useUserData", () => {
  it("should throw an error when used outside UserProvider", () => {
    (useContext as jest.Mock).mockReturnValue(null);
    const { result } = renderHook(() => useUserData());

    expect(result.error).toEqual(
      new Error("must be used within a UserProvider")
    );
  });

  it("should return the context within UserProvider", () => {
    (useContext as jest.Mock).mockReturnValue(mockUserContextValue);
    const { result } = renderHook(() => useUserData());

    expect(result.current).toEqual(mockUserContextValue);
  });
});
