import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-center items-center py-4 px-4 md:px-9 bg-transparent absolute top-0 left-0 z-50">
      <div className="w-full flex justify-between items-center">
        <Link to="/" className="flex-shrink-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a6a2cd8707c5b0e8541f7d697fb7f3a52fe8fef1?width=130"
            alt="Logo"
            className="w-12 h-12 md:w-16 md:h-16 object-contain"
          />
        </Link>

        <button
          className="lg:hidden text-background"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>

        <nav
          className={`${mobileMenuOpen ? "flex" : "hidden"} lg:flex flex-col lg:flex-row absolute lg:relative top-20 lg:top-0 left-0 lg:left-auto w-full lg:w-auto bg-primary-green lg:bg-transparent p-6 lg:p-0 justify-center items-center gap-6 lg:gap-8 xl:gap-10`}
        >
          <Link
            to="/"
            className="text-background font-palatino text-xl lg:text-2xl font-bold hover:opacity-80 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          >
            Acceuil
          </Link>
          <Link
            to="/a-propos"
            className="text-background font-palatino text-xl lg:text-2xl font-bold hover:opacity-80 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          >
            A propos
          </Link>
          <Link
            to="/animation"
            className="text-background font-palatino text-xl lg:text-2xl font-bold hover:opacity-80 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          >
            Animation
          </Link>
          <Link
            to="/randonnee"
            className="text-background font-palatino text-xl lg:text-2xl font-bold hover:opacity-80 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          >
            Randonnée
          </Link>
          <Link
            to="/gmnf"
            className="text-background font-palatino text-xl lg:text-2xl font-bold hover:opacity-80 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          >
            GMNF
          </Link>
        </nav>
      </div>
    </header>
  );
}
