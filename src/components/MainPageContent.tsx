import roupasM from "../assets/nav-roupasM.jpg";
import roupasF from "../assets/nav-roupasF.jpg";
import eletronicos from "../assets/nav-eletronico.jpg";
import acessorios from "../assets/nav-acessorios.jpg";
import maisVendidos from "../assets/nav-mais-vendidos.jpg";
import fireIcon from "../assets/fire-solid.svg";

export default function MainPageContent({
  children,
  onActivateProductListPage,
  onSetProductListCategory,
}: {
  children: React.ReactNode;
  onActivateProductListPage: () => void;
  onSetProductListCategory: (a: string) => void;
}) {
  return (
    <>
      <section className="mt-8 grid grid-cols-4 grid-rows-2 gap-4">
        <div
          className="relative rounded-2xl overflow-hidden  cursor-pointer"
          onClick={() => {
            onSetProductListCategory("men's clothing");
            onActivateProductListPage();
          }}
        >
          <img className="h-full " src={roupasM} alt="Modelo masculino" />
          <span className="main-nav__item-text capitalize absolute left-2 bottom-1 text-2xl text-white font-semibold">
            Voce bem vestido
          </span>
          <div className="main-nav--shadow h-full w-full absolute top-0 left-0"></div>
        </div>

        <div
          className="relative row-start-2 col-start-1 col-end-2 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
          onClick={() => {
            onSetProductListCategory("jewelery");
            onActivateProductListPage();
          }}
        >
          <img src={acessorios} alt="Mão com anel" />
          <span className="main-nav__item-text capitalize absolute left-2 top-1 text-2xl text-white font-semibold">
            Complemente seu look
          </span>
          <div className="main-nav--shadow h-full w-full absolute top-0 left-0"></div>
        </div>

        <div
          className="relative row-span-full col-start-2 col-end-4 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
          onClick={() => {
            onSetProductListCategory("mais vendidos");
            onActivateProductListPage();
          }}
        >
          <img
            className="h-full"
            src={maisVendidos}
            alt="Pessoa no notebook fazendo compras"
          />
          <span className="main-nav__item-text capitalize absolute right-4 top-4 text-3xl text-white font-semibold">
            Mais Vendidos
          </span>
          <div className="main-nav--shadow h-full w-full absolute top-0 left-0"></div>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer"
          onClick={() => {
            onSetProductListCategory("electronics");
            onActivateProductListPage();
          }}
        >
          <img src={eletronicos} alt="Computador gamer" />
          <span className="main-nav__item-text capitalize absolute left-2 bottom-1 text-2xl text-white font-semibold">
            Melhore seu setup
          </span>
          <div className="main-nav--shadow h-full w-full absolute top-0 left-0"></div>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer"
          onClick={() => {
            onSetProductListCategory("women's clothing");
            onActivateProductListPage();
          }}
        >
          <img src={roupasF} alt="Modelo femina" />
          <span className="main-nav__item-text capitalize absolute right-2 bottom-1 text-2xl text-white font-semibold">
            Voce bem vestida
          </span>
          <div className="main-nav--shadow h-full w-full absolute top-0 left-0"></div>
        </div>
      </section>
      <section>
        <h2 className="mt-12 flex gap-1">
          <img
            src={fireIcon}
            alt="Icone de fogo"
            className="w-9 h-9 fill-primary"
          />
          <span className="font-bold text-2xl text-primary uppercase self-center">
            Populares
          </span>
        </h2>
        {children}
      </section>
    </>
  );
}
