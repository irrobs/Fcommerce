import Button from "./Button";
import Rating from "./Rating";

export default function ProductPage() {
  const produto = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };
  return (
    <div className="flex gap-8 py-24">
      <div className="w-1/2 h-1/2">
        <img src={produto.image} alt={produto.title} />
      </div>
      <div className=" w-1/2 flex flex-col gap-6">
        <h2 className="text-3xl font-bold uppercase">{produto.title}</h2>
        <p className="text-lg uppercase">{produto.description}</p>
        <p className="flex items-center gap-2">
          <span className="text-xl font-bold">
            {Math.round(produto.rating.rate)}
          </span>
          <Rating rating={produto.rating.rate} />
          <span className="ml-auto font-bold text-2xl">R${produto.price}</span>
        </p>
        <div className="flex flex-col gap-4 mt-auto">
          <Button
            width="w-full"
            text="compre já"
            textColor="text-white"
            fontWeight="font-medium"
            paddingHorizontal="px-0"
            paddingVertical="py-2"
            bgColor="bg-primary-dark"
            marginLeft="ml-0"
            bgHoverColor="hover:bg-primary-light"
            textHoverColor="hover:text-white"
          />
          <Button
            width="w-full"
            text="adicione ao carrinho"
            textColor="text-white"
            fontWeight="font-medium"
            paddingHorizontal="px-0"
            paddingVertical="py-2"
            bgColor="bg-primary"
            marginLeft="ml-0"
            bgHoverColor="hover:bg-primary-light"
            textHoverColor="hover:text-white"
          />
          <Button
            width="w-full"
            border="border"
            text="adicione aos items desejados"
            textColor="text-primary"
            fontWeight="font-medium"
            paddingHorizontal="px-0"
            paddingVertical="py-2"
            bgColor="bg-white"
            marginLeft="ml-0"
            bgHoverColor="hover:bg-primary-light"
            textHoverColor="hover:text-white"
          />
        </div>
      </div>
    </div>
  );
}
