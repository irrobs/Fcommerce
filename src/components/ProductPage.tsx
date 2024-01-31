import { useEffect, useState } from "react";
import Button from "./Button";
import Rating from "./Rating";
import Loading from "./Loading";

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

export default function ProductPage({
  curProduct,
  onSetCartProduct,
  cartProducts,
}: {
  curProduct: null | number;
  onSetCartProduct: (a: productsProps[]) => void;
  cartProducts: productsProps[] | [];
}) {
  const [product, setProduct] = useState<productsProps | object>({});

  useEffect(
    function () {
      fetch(`https://fakestoreapi.com/products/${curProduct}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    },
    [curProduct]
  );

  function handleAddCart(id: number | null) {
    if (!cartProducts.some((p) => p.id === id)) {
      onSetCartProduct([
        ...cartProducts,
        {
          ...(product as productsProps),
          amount: 0,
        },
      ]);
    }
  }

  if (!("id" in product)) {
    return <Loading />;
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
          <div onClick={() => handleAddCart(curProduct)}>
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
          </div>
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
