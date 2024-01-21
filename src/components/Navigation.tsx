export default function Navigation() {
  return (
    <nav className="grid grid-cols-subgrid row-start-2 col-span-full bg-black">
      <ul className="flex text-white col-start-2 col-span-12 justify-between">
        <li className="mt-2 pt-2 pb-4 px-3 rounded-t-2xl text-lg font-bold hover:bg-white  hover:text-black transition  duration-500 ease-out">
          <a href="#">JÓIAS</a>
        </li>
        <li className="mt-2  pt-2 pb-4 px-3 text-lg font-bold rounded-t-2xl  hover:bg-white hover:text-black transition  duration-500 ease-out">
          <a href="#">ELETRÔNICOS</a>
        </li>
        <li className="mt-2  pt-2 pb-4 px-3 text-lg font-bold rounded-t-2xl  hover:bg-white hover:text-black transition  duration-500 ease-out">
          <a href="#">ROUPAS MASCULINAS</a>
        </li>
        <li className="mt-2  pt-2 pb-4 px-3 text-lg font-bold rounded-t-2xl  hover:bg-white hover:text-black transition  duration-500 ease-out">
          <a href="#">ROUPAS FEMININAS</a>
        </li>
      </ul>
    </nav>
  );
}
