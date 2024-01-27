import { Dispatch, SetStateAction } from "react";

import heartIcon from "../assets/heart.svg";
import userIcon from "../assets/user.svg";
import cartIcon from "../assets/cart.svg";

export default function HeaderIcons({
  isActive,
  onSetSidebar,
}: {
  isActive: boolean;
  onSetSidebar: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <ul className="flex gap-4">
      <li className="h-16 w-16 flex align-center justify-center rounded-full transition duration-300 ease-out hover:bg-gray">
        <button>
          <img src={heartIcon} alt="Icone de coração" className="w-8 h-8" />
        </button>
      </li>
      <li className="h-16 w-16 flex align-center justify-center rounded-full transition  duration-300 ease-out hover:bg-gray">
        <button>
          <img src={userIcon} alt="Icone de usuário" className="w-8 h-8" />
        </button>
      </li>
      <li className="h-16 w-16 flex align-center justify-center rounded-full transition  duration-300 ease-out hover:bg-gray">
        <button onClick={() => onSetSidebar(!isActive)}>
          <img src={cartIcon} alt="Icone de carrinho" className="w-8 h-8" />
        </button>
      </li>
    </ul>
  );
}
