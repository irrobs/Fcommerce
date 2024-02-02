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
      <div className="productList__container mt-10 ">
        {wishlistProducts.map((produto) => (
          <Card
            product={produto}
            width="w-full"
            onSetProductPage={onSetProductPage}
            onSetWishlistProducts={onSetWishlistProducts}
            wishlistProducts={wishlistProducts}
          />
        ))}
      </div>
    </div>
  );
}
