import { Dispatch, SetStateAction } from "react";

import Rating from "./Rating";

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
type productType = {
  product: productsProps;
  wishlistProducts: productsProps[];
  translate?: number;
  width?: string;
  onSetProductPage: (a: number) => void;
  onSetWishlistProducts: Dispatch<SetStateAction<object[]>>;
};

export default function Card({
  product,
  translate,
  width,
  wishlistProducts,
  onSetProductPage,
  onSetWishlistProducts,
}: productType) {
  function handleSetProductPage(id: number) {
    onSetProductPage(id);
  }

  function handleSetWishlistProducts(product: productsProps) {
    wishlistProducts.some((p) => p.id === product.id)
      ? onSetWishlistProducts(
          wishlistProducts.filter((p) => p.id !== product.id)
        )
      : onSetWishlistProducts([...wishlistProducts, product]);
  }

  return (
    <div
      style={
        translate !== undefined && translate !== 0
          ? {
              transform: `translateX(${
                translate < 0
                  ? `calc(${translate}% - 24px)`
                  : `calc(${translate}% + 24px)`
              })`,
            }
          : { transform: `translateX(0)` }
      }
      className={`min-w-60 shadow-md flex flex-col shrink-0 rounded-2xl overflow-hidden relative ${width} p-4  duration-300 `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`w-6 h-6 absolute top-2 right-2 cursor-pointer ${
          wishlistProducts.some((p) => p.id === product.id)
            ? "fill-red"
            : "fill-transparent"
        } hover:fill-red  duration-300 z-20`}
        onClick={() => handleSetWishlistProducts(product)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
      <img
        className="h-44 cursor-pointer"
        src={product.image}
        alt={product.title}
        onClick={() => handleSetProductPage(product.id)}
      />

      <div
        className="p-4 flex flex-col grow cursor-pointer"
        onClick={() => handleSetProductPage(product.id)}
      >
        <Rating rating={product.rating.rate} marginTop="mt-2" />
        <h3 className="font-medium mb-4">{product.title}</h3>
        <span className="mt-auto font-bold">R${product.price}</span>
      </div>
    </div>
  );
}
