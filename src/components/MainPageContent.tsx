import roupasM from "../../public/assets/nav-roupasM.jpg";
import roupasF from "../../public/assets/nav-roupasF.jpg";
import eletronicos from "../../public/assets/nav-eletronico.jpg";
import acessorios from "../../public/assets/nav-acessorios.jpg";
import maisVendidos from "../../public/assets/nav-mais-vendidos.jpg";

export default function MainPageContent() {
  return (
    <>
      <section className="mt-8 grid grid-cols-4 grid-rows-2 gap-4">
        <div className="relative rounded-2xl overflow-hidden  cursor-pointer">
          <img className="h-full " src={roupasM} alt="Modelo masculino" />
          <span className="main-nav__item-text capitalize absolute left-2 bottom-1 text-2xl text-white font-semibold">
            Voce bem vestido
          </span>
          <div className="main-nav--shadow h-full w-full absolute top-0 left-0"></div>
        </div>
        <div className="relative row-start-2 col-start-1 col-end-2 rounded-2xl overflow-hidden shadow-xl cursor-pointer">
          <img src={acessorios} alt="Mão com anel" />
          <span className="main-nav__item-text capitalize absolute left-2 top-1 text-2xl text-white font-semibold">
            Complemente seu look
          </span>
          <div className="main-nav--shadow h-full w-full absolute top-0 left-0"></div>
        </div>
        <div className="relative row-span-full col-start-2 col-end-4 rounded-2xl overflow-hidden shadow-xl cursor-pointer">
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
        <div className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer">
          <img src={eletronicos} alt="Computador gamer" />
          <span className="main-nav__item-text capitalize absolute left-2 bottom-1 text-2xl text-white font-semibold">
            Melhore seu setup
          </span>
          <div className="main-nav--shadow h-full w-full absolute top-0 left-0"></div>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer">
          <img src={roupasF} alt="Modelo femina" />
          <span className="main-nav__item-text capitalize absolute right-2 bottom-1 text-2xl text-white font-semibold">
            Voce bem vestida
          </span>
          <div className="main-nav--shadow h-full w-full absolute top-0 left-0"></div>
        </div>
      </section>
      <section>
        <h2 className="mt-12 flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-9 h-9 fill-primary"
          >
            <path
              fill-rule="evenodd"
              d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"
              clip-rule="evenodd"
            />
          </svg>
          <span className="font-bold text-2xl text-primary uppercase self-center">
            Populares
          </span>
        </h2>
        <div className="mt-6 flex gap-4 relative">
          <button className="carrousel__button--previous absolute top-1/2 left-0 z-10 w-12 h-12 rounded-full border flex items-center justify-center bg-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button className="carrousel__button--next absolute top-1/2 right-0 z-10 w-12 h-12 rounded-full border flex items-center justify-center bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <div className="shadow-md flex flex-col rounded-2xl overflow-hidden relative ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 absolute top-2 right-2 cursor-pointer fill-transparent hover:fill-red  duration-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <img className="h-44" src={roupasM} alt="Produto" />

            <div className="p-4">
              <div className="mt-2 flex gap-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 fill-black"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 fill-black"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 fill-black"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 fill-black"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 fill-black"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </div>
              <h3 className="mt-2 text-lg font-semibold">Nome do Produto</h3>
              <span className="font-bold">R$900,00</span>
            </div>
          </div>
          <div className="shadow-md flex flex-col rounded-2xl overflow-hidden relative ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 absolute top-2 right-2 cursor-pointer fill-transparent hover:fill-red  duration-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <img className="h-44" src={roupasM} alt="Produto" />

            <div className="p-4">
              <div className="mt-2">Estrelas</div>
              <h3 className="mt-2 text-lg font-semibold">Nome do Produto</h3>
              <span className="font-bold">R$900,00</span>
            </div>
          </div>
          <div className="shadow-md flex flex-col rounded-2xl overflow-hidden relative ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 absolute top-2 right-2 cursor-pointer fill-transparent hover:fill-red  duration-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <img className="h-44" src={roupasM} alt="Produto" />

            <div className="p-4">
              <div className="mt-2">Estrelas</div>
              <h3 className="mt-2 text-lg font-semibold">Nome do Produto</h3>
              <span className="font-bold">R$900,00</span>
            </div>
          </div>
          <div className="shadow-md flex flex-col rounded-2xl overflow-hidden relative ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 absolute top-2 right-2 cursor-pointer fill-transparent hover:fill-red  duration-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <img className="h-44" src={roupasM} alt="Produto" />

            <div className="p-4">
              <div className="mt-2">Estrelas</div>
              <h3 className="mt-2 text-lg font-semibold">Nome do Produto</h3>
              <span className="font-bold">R$900,00</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
