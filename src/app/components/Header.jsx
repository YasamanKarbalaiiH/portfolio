"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-background/90 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <a href="#" className="text-xl font-bold">
          Yasaman
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#about" className="transition-colors hover:text-primary">
            About
          </a>

          <a href="#skills" className="transition-colors hover:text-primary">
            Skills
          </a>

          <a href="#projects" className="transition-colors hover:text-primary">
            Projects
          </a>

          <a
            href="#experience"
            className="transition-colors hover:text-primary"
          >
            Experience
          </a>

          <a href="#contact" className="transition-colors hover:text-primary">
            Contact
          </a>
        </nav>

        <a href="#contact" className="btn-primary hidden md:inline-flex">
          Contact Me
        </a>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-text-primary md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? "×" : "☰"}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-white/10 bg-background px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-primary"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="hover:text-primary"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-primary"
            >
              Projects
            </a>

            <a
              href="#experience"
              onClick={() => setIsOpen(false)}
              className="hover:text-primary"
            >
              Experience
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-primary"
            >
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
