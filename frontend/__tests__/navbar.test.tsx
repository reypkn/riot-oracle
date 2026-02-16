import { render, screen } from "@testing-library/react";
import Navbar from "@/components/layout/Navbar";

describe("Navbar", () => {
  it("renders logo", () => {
    render(<Navbar />);
    expect(screen.getByText(/Riot Oracle/i)).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Navbar />);
    expect(screen.getByText(/Matchs/i)).toBeInTheDocument();
    expect(screen.getByText(/Recherche/i)).toBeInTheDocument();
  });
});
