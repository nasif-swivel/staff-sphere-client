import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import LandingPage from "../../src/app/page";

describe("Landing Page", () => {
  it("should render without crashing", () => {
    render(<LandingPage />);

    const title = screen.getByText("Welcome to Staff Sphere");

    expect(title).toBeInTheDocument();
  });
});
