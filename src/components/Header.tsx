import { useEffect, useState, Dispatch, SetStateAction } from "react";
import logoCart from "../assets/cart-solid.svg";
import mobileIcon from "../assets/mobileNav.svg";
import magnifyingIcon from "../assets/magnifying-glass.svg";

export default function Header({
  children,
  onActivateMainPage,
  onSetShowMobileNav,
}: {
  children: React.ReactNode;
  onActivateMainPage: () => void;
  onSetShowMobileNav: Dispatch<SetStateAction<boolean>>;
}) {
  const [showIcon, setShowIcon] = useState(false);

  useEffect(function () {
    setShowIcon(window.innerWidth < 768);
  }, []);

  return (
    <header className="flex flex-col w-2/3 lg:w-auto mx-auto lg:mx-0 lg:flex-row gap-4 col-start-2 col-span-12 justify-between items-center py-4">
      {showIcon && (
        <button onClick={() => onSetShowMobileNav(true)}>
          <img
            src={mobileIcon}
            alt="Abrir navegação mobile"
            className="w-8 h-8 absolute top-4 left-4"
          />
        </button>
      )}
      <a
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => onActivateMainPage()}
        href="#main"
      >
        <img src={logoCart} alt="Logo" className="w-8 h-8 fill-primary" />
        <span className="text-2xl font-bold text-primary uppercase">
          Fcommerce
        </span>
      </a>
      <div className="relative w-full max-w-md ">
        <input
          type="text"
          placeholder="Pesquise pelo produto..."
          className="border border-neutral-950 rounded-full p-0.5 pl-2 w-full"
        />
        <img
          src={magnifyingIcon}
          alt="Icone lupa"
          className="w-4 h-4 absolute top-2 right-3"
        />
      </div>
      {children}
    </header>
  );
}
