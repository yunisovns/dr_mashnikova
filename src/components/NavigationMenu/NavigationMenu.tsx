type NavigationMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const navLinks = [
  { href: "#aboutMe", label: "Обо мне" },
  { href: "#services", label: "Услуги" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

export const NavigationMenu = ({ isOpen, onClose }: NavigationMenuProps) => {
  return (
    <nav
      className={`
        transition-all duration-300
        bg-white shadow-lg px-6 py-4
        md:flex md:flex-row md:gap-6 md:shadow-none md:bg-transparent md:px-0 md:py-0
        ${isOpen ? "block" : "hidden"}
      `}
    >
      <ul className="flex flex-col md:flex-row gap-4">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={onClose}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
