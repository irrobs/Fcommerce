import logoCart from "../assets/cart-solid.svg";
import magnifyingIcon from "../assets/magnifying-glass.svg";

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="flex col-start-2 col-span-12 justify-between  items-center py-4">
      <div className="flex items-center gap-1">
        <img src={logoCart} alt="Logo" className="w-8 h-8 fill-primary" />
        <span className="text-2xl font-bold text-primary uppercase">
          Fcommerce
        </span>
      </div>
      <div className="relative w-6/12">
        <input
          type="text"
          placeholder="Pesquise pelo produto..."
          className="border border-neutral-950 rounded-full p-0.5 pl-2 w-full "
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
