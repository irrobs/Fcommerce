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
  mainNavPaths,
}: {
  children: React.ReactNode;
  mainNavPaths: string[];
  onActivateProductListPage: () => void;
  onSetProductListCategory: (a: string) => void;
}) {
  return (
    <>
      <section className="mt-8 grid grid-cols-2 grid-rows-4 lg:grid-rows-2 lg:grid-cols-4 gap-4 max-w-[600px] lg:max-w-full">
        <a
          href={mainNavPaths[2]}
          className="relative rounded-2xl overflow-hidden  cursor-pointer max-w-[400px] "
          onClick={() => {
            onSetProductListCategory("men's clothing");
            onActivateProductListPage();
          }}
        >
          <img className="h-full w-full" src={roupasM} alt="Modelo masculino" />
          <span className="main-nav__item-text capitalize absolute left-2 bottom-1 text-2xl text-white font-semibold">
            Voce bem vestido
          </span>
          <div className="main-nav--shadow h-full w-full absolute top-0 left-0"></div>
        </a>

        <a
          href={mainNavPaths[0]}
          className="relative row-start-1 col-start-2 lg:row-start-2 lg:col-start-1 lg:col-end-2 rounded-2xl overflow-hidden shadow-xl cursor-pointer max-w-[400px]"
          onClick={() => {
            onSetProductListCategory("jewelery");
            onActivateProductListPage();
          }}
        >
          <img className="h-full" src={acessorios} alt="Mão com anel" />
          <span className="main-nav__item-text capitalize absolute left-2 top-1 text-2xl text-white font-semibold">
            Complemente seu look
          </span>
          <div className="main-nav--shadow h-full w-full absolute top-0 left-0"></div>
        </a>

        <a
          href="#mais vendidos"
          className="relative row-span-full row-start-2 row-end-4 col-span-full lg:col-start-2 lg:col-end-4 lg:row-span-full rounded-2xl overflow-hidden shadow-xl cursor-pointer"
          onClick={() => {
            onSetProductListCategory("mais vendidos");
            onActivateProductListPage();
          }}
        >
          <img
            className="h-full max-w-screen-md"
            src={maisVendidos}
            alt="Pessoa no notebook fazendo compras"
          />
          <span className="main-nav__item-text capitalize absolute right-4 top-4 text-3xl text-white font-semibold">
            Mais Vendidos
          </span>
          <div className="main-nav--shadow h-full w-full absolute top-0 left-0"></div>
        </a>

        <a
          href={mainNavPaths[1]}
          className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer row-start-4 col-start-1 lg:col-start-4 lg:row-start-1 "
          onClick={() => {
            onSetProductListCategory("electronics");
            onActivateProductListPage();
          }}
        >
          <img className="h-full" src={eletronicos} alt="Computador gamer" />
          <span className="main-nav__item-text capitalize absolute left-2 bottom-1 text-2xl text-white font-semibold">
            Melhore seu setup
          </span>
          <div className="main-nav--shadow h-full w-full absolute top-0 left-0"></div>
        </a>

        <a
          href={mainNavPaths[3]}
          className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer row-start-4 col-start-2 lg:col-start-4 lg:row-start-2 "
          onClick={() => {
            onSetProductListCategory("women's clothing");
            onActivateProductListPage();
          }}
        >
          <img className="h-full" src={roupasF} alt="Modelo femina" />
          <span className="main-nav__item-text capitalize absolute right-2 bottom-1 text-2xl text-white font-semibold">
            Voce bem vestida
          </span>
          <div className="main-nav--shadow h-full w-full absolute top-0 left-0"></div>
        </a>
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
