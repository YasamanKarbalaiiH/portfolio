export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <p className="text-sm text-text-secondary">
          © 2026 Yasaman Karbalaii. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/YasamanKarbalaiiH"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary transition-colors hover:text-primary"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/yasaman-karbalaei-663524436/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary transition-colors hover:text-primary"
          >
            LinkedIn
          </a>

          <a
            href="#"
            className="text-sm text-text-secondary transition-colors hover:text-primary"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
