import { Dispatch, SetStateAction } from "react";

import Card from "./Card";

type productsProps = {
  id: number;
  title: string;
  price: number;
  amount?: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default function WishlistPage({
  onSetProductPage,
  onSetWishlistProducts,
  wishlistProducts,
}: {
  onSetProductPage: (a: number) => void;
  onSetWishlistProducts: Dispatch<SetStateAction<object[]>>;
  wishlistProducts: productsProps[];
}) {
  return (
    <div className="py-16 min-h-screen">
      <h1 className="font-bold text-3xl text-primary uppercase">
        Lista de desejos
      </h1>
      <div className="grid grid-cols-1 px-12 md:px-0 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  mt-10 ">
        {wishlistProducts.length === 0 ? (
          <span className="mt-12 text-grayDark text-lg mx-auto col-span-full">
            Sua lista de desejos está vazia.
          </span>
        ) : (
          wishlistProducts.map((produto) => (
            <Card
              key={produto.id}
              product={produto}
              width="w-full"
              onSetProductPage={onSetProductPage}
              onSetWishlistProducts={onSetWishlistProducts}
              wishlistProducts={wishlistProducts}
            />
          ))
        )}
      </div>
    </div>
  );
}
