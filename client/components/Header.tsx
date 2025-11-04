import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full flex justify-center items-center py-4 px-9 bg-transparent absolute top-0 left-0 z-50">
      <div className="w-full flex justify-between items-center">
        <Link to="/" className="flex-shrink-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a6a2cd8707c5b0e8541f7d697fb7f3a52fe8fef1?width=130"
            alt="Logo"
            className="w-16 h-16 object-contain"
          />
        </Link>
        
        <nav className="flex justify-center items-center gap-10">
          <Link 
            to="/" 
            className="text-background font-palatino text-2xl font-bold hover:opacity-80 transition-opacity"
          >
            Acceuil
          </Link>
          <Link 
            to="/a-propos" 
            className="text-background font-palatino text-2xl font-bold hover:opacity-80 transition-opacity"
          >
            A propos
          </Link>
          <Link 
            to="/animation" 
            className="text-background font-palatino text-2xl font-bold hover:opacity-80 transition-opacity"
          >
            Animation
          </Link>
          <Link 
            to="/randonnee" 
            className="text-background font-palatino text-2xl font-bold hover:opacity-80 transition-opacity"
          >
            Randonnée
          </Link>
          <Link 
            to="/gmnf" 
            className="text-background font-palatino text-2xl font-bold hover:opacity-80 transition-opacity"
          >
            GMNF
          </Link>
        </nav>
      </div>
    </header>
  );
}
