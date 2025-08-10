import { useState } from "react";
import { Logo } from "./Logo/Logo";
import { NavigationMenu } from "@components/NavigationMenu/NavigationMenu";
import { Menu } from "lucide-react";
  
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md w-full">
      <div className="relative flex justify-between items-center h-16 px-4">
        <Logo />
        <div className="md:hidden">
          <button
            className="text-3xl text-[#E6BE8A] px-3 py-2 rounded"
            onClick={toggleMenu}
            aria-label="Открыть меню"
          >
            <Menu />
          </button>
        </div>

        {/* Десктоп-меню */}
        <div className="hidden md:block">
          <NavigationMenu isOpen={true} onClose={() => {}} />
        </div>

        {/* Мобильное меню */}
        <div className="absolute top-full left-0 w-full md:hidden">
          <NavigationMenu isOpen={isMenuOpen} onClose={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

