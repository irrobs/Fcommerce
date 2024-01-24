import arrowRight from "../assets/arrow-right.svg";
import chevronUp from "../assets/chevron-up.svg";

export default function Footer() {
  return (
    <footer className="mt-12 row-start-4 col-span-full bg-black text-primary  p-6 flex flex-col items-center relative">
      <h2 className="text-2xl font-medium">Ajuda e informação</h2>
      <ul className="mt-2 flex justify-center gap-4 text-grayDark">
        <li className="hover:text-gray duration-300">
          <a href="#">Termos de uso</a>
        </li>
        <li className="hover:text-gray duration-300">
          <a href="#">Ajuda</a>
        </li>
        <li className="hover:text-gray duration-300">
          <a href="#">Sobre</a>
        </li>
        <li className="hover:text-gray duration-300">
          <a href="#">Lojas</a>
        </li>
        <li className="hover:text-gray duration-300">
          <a href="#">Contate-nos</a>
        </li>
      </ul>
      <div className="mt-4 relative w-fit">
        <label className="text-xl font-medium" htmlFor="email">
          Se inscreve para receber promoções!
        </label>
        <input
          className="rounded-full p-1 pl-2 w-96 ml-5"
          type="email"
          placeholder="seuemail@gmail.com..."
          id="email"
        />
        <img
          className="w-5 h-5 absolute top-1.5 right-3"
          src={arrowRight}
          alt="Flecha para a direita"
        />
      </div>
      <div className="mt-4">
        <span className="text-xl font-medium">Diga-nos o que achou!</span>
        <button className="rounded-full px-8 py-1 uppercase bg-white font-semibold ml-5 hover:bg-primary hover:text-white duration-300">
          Feedback
        </button>
      </div>
      <button className="absolute bg-white rounded-2xl w-16 h-16 flex items-center justify-center top-5 right-5 hover:bg-primary duration-300">
        <img className="w-6 h-6" src={chevronUp} alt="Seta para cima" />
      </button>
    </footer>
  );
}
