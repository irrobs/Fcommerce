export default function CardCart() {
  const produto = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  };
  return (
    <div className="min-h-40 relative w-11/12 rounded-2xl border border-black overflow-hidden flex gap-4 p-4 text-black">
      <img className="w-1/3 h-32" src={produto.image} alt={produto.title} />
      <div className="flex flex-col">
        <h3 className="text-lg font-normal">{produto.title}</h3>
        <p className="text-sm font-medium">(R${produto.price} cada)</p>
        <span className="">R$1800,00</span>

        <div className="mt-auto flex items-center gap-4 font-medium text-lg">
          <button className="hover:font-bold duration-200">+</button>
          <span>2</span>
          <button className="hover:font-bold duration-200">-</button>
        </div>
      </div>
      <button className="absolute bottom-4 right-4 text-2xl hover:text-red duration-200">
        X
      </button>
    </div>
  );
}
