import Logo from "../atoms/Logo";
import NavLink from "../atoms/NavLink";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 h-16 flex items-center">
        <Logo />

        <nav className="hidden md:flex items-center gap-8 ml-auto">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/ingredients">Ingredients</NavLink>
        </nav>

        <nav className="flex md:hidden items-center gap-3 ml-auto">
          <NavLink to="/ingredients">Explore</NavLink>
        </nav>
      </div>
    </header>
  );
}

