import { useEffect, useState } from "react";
import Button from "./Button";
import Rating from "./Rating";

type productProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default function ProductPage({ curProduct }: { curProduct: number }) {
  const [product, setProduct] = useState<object | productProps>({});

  useEffect(
    function () {
      fetch(`https://fakestoreapi.com/products/${curProduct}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    },
    [curProduct]
  );

  if (!("id" in product)) {
    // Product data is not yet available
    return <div>Loading...</div>; /* criar loading component */
  }

  return (
    <div className="flex gap-8 py-24">
      <div className="w-1/2 h-1/2">
        <img src={product.image} alt={product.title} />
      </div>
      <div className=" w-1/2 flex flex-col gap-6">
        <h2 className="text-3xl font-bold uppercase">{product.title}</h2>
        <p className="text-lg uppercase">{product.description}</p>
        <p className="flex items-center gap-2">
          <span className="text-xl font-bold">
            {Math.round(product.rating.rate)}
          </span>
          <Rating rating={product.rating.rate} />
          <span className="ml-auto font-bold text-2xl">R${product.price}</span>
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
