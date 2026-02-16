"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b bg-background sticky top-0 z-50">
      <nav
        className="container mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight hover:opacity-80 transition"
        >
          Riot Oracle
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/matches" className="text-sm hover:text-primary">
            Matchs
          </Link>
          <Link href="/search" className="text-sm hover:text-primary">
            Recherche
          </Link>
          <Link href="/leaderboard" className="text-sm hover:text-primary">
            Classement
          </Link>

          <div className="flex gap-2 ml-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Connexion</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/register">S’inscrire</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Ouvrir le menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-background px-6 py-4 space-y-4">
          <Link
            href="/matches"
            className="block text-sm"
            onClick={() => setIsOpen(false)}
          >
            Matchs
          </Link>
          <Link
            href="/search"
            className="block text-sm"
            onClick={() => setIsOpen(false)}
          >
            Recherche
          </Link>
          <Link
            href="/leaderboard"
            className="block text-sm"
            onClick={() => setIsOpen(false)}
          >
            Classement
          </Link>

          <div className="flex flex-col gap-2 pt-4">
            <Button variant="outline" asChild>
              <Link href="/login">Connexion</Link>
            </Button>
            <Button asChild>
              <Link href="/register">S’inscrire</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
