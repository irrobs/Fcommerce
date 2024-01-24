import Card from "./Card";

export default function MainCarrousel() {
  const produtosPopulares = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: 3.9,
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: 4.1,
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: 4.7,
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: 2.1,
    },
  ];
  return (
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

      {produtosPopulares.map((produto) => (
        <Card
          id={produto.id}
          title={produto.title}
          price={produto.price}
          image={produto.image}
          rating={produto.rating}
        />
      ))}
    </div>
  );
}
