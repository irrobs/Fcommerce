import roupasM from "../../public/assets/nav-roupasM.jpg";
import roupasF from "../../public/assets/nav-roupasF.jpg";
import eletronicos from "../../public/assets/nav-eletronico.jpg";
import acessorios from "../../public/assets/nav-acessorios.jpg";
import maisVendidos from "../../public/assets/nav-mais-vendidos.jpg";

export default function MainPageContent() {
  return (
    <div className="mt-8 grid grid-cols-4 grid-rows-2 gap-4">
      <div className=" relative ">
        <img
          className="rounded-2xl h-full "
          src={roupasM}
          alt="Modelo masculino"
        />
        <span className="main-nav__item-text capitalize absolute left-2 bottom-1 text-2xl text-white font-semibold">
          Voce bem vestido
        </span>
        <div className="test h-full w-full absolute top-0 left-0"></div>
      </div>
      <div className="relative row-start-2 col-start-1 col-end-2">
        <img className="rounded-2xl" src={acessorios} alt="Mão com anel" />
        <span className="main-nav__item-text capitalize absolute left-2 top-1 text-2xl text-white font-semibold">
          Complemente seu look
        </span>
        <div className="test h-full w-full absolute top-0 left-0"></div>
      </div>
      <div className="relative row-span-full col-start-2 col-end-4">
        <img
          className="h-full rounded-2xl "
          src={maisVendidos}
          alt="Pessoa no notebook fazendo compras"
        />
        <span className="main-nav__item-text capitalize absolute right-4 top-4 text-3xl text-white font-semibold">
          Mais Vendidos
        </span>
        <div className="test h-full w-full absolute top-0 left-0"></div>
      </div>
      <div className="relative">
        <img
          className="rounded-2xl "
          src={eletronicos}
          alt="Computador gamer"
        />
        <span className="main-nav__item-text capitalize absolute left-2 bottom-1 text-2xl text-white font-semibold">
          Melhore seu setup
        </span>
        <div className="test h-full w-full absolute top-0 left-0"></div>
      </div>
      <div className="relative">
        <img className="rounded-2xl" src={roupasF} alt="Modelo femina" />
        <span className="main-nav__item-text capitalize absolute right-2 bottom-1 text-2xl text-white font-semibold">
          Voce bem vestida
        </span>
        <div className="test h-full w-full absolute top-0 left-0"></div>
      </div>
    </div>
  );
}
