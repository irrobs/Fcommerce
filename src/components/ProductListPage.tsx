import { useEffect, useState } from "react";
import Card from "./Card";

type productListProps = {
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
}[];

export default function ProductListPage({
  productCategory,
  onSetProductPage,
}: {
  productCategory: string | null;
  onSetProductPage: (a: number) => void;
}) {
  const [produtos, setProdutos] = useState<null | productListProps>(null);
  console.log("hi");

  useEffect(
    function () {
      fetch(`https://fakestoreapi.com/products/category/${productCategory}`)
        .then((res) => res.json())
        .then((data) => setProdutos(data));
    },
    [productCategory]
  );

  if (!produtos) {
    // Product data is not yet available
    return <div>Loading...</div>; /* criar loading component */
  }
  return (
    <div className="py-16 min-h-screen">
      <h1 className="font-bold text-3xl text-primary uppercase">
        {productCategory}
      </h1>
      <div className="productList__container mt-10 ">
        {produtos.map((produto) => (
          <Card
            onSetProductPage={onSetProductPage}
            id={produto.id}
            title={produto.title}
            price={produto.price}
            image={produto.image}
            rating={produto.rating.rate}
            width="w-full"
          />
        ))}
      </div>
    </div>
  );
}
