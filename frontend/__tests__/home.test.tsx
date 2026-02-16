import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("Homepage", () => {
  it("renders hero title", () => {
    render(<HomePage />);
    expect(
      screen.getByText(/Prédisez les matchs esport/i)
    ).toBeInTheDocument();
  });

  it("renders upcoming matches section", () => {
    render(<HomePage />);
    expect(
      screen.getByText(/Matchs à venir/i)
    ).toBeInTheDocument();
  });

  it("renders leaderboard section", () => {
    render(<HomePage />);
    expect(
      screen.getByText(/Classement/i)
    ).toBeInTheDocument();
  });
});
