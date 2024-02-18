import { useEffect, useState } from "react";
import Card from "./Card";
import Loading from "./Loading";

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
  onSetWishlistProducts,
  wishlistProducts,
}: {
  productCategory: string | null;
  onSetProductPage: (a: number) => void;
  onSetWishlistProducts: () => void;
  wishlistProducts: productListProps;
}) {
  const [produtos, setProdutos] = useState<null | productListProps>(null);

  useEffect(
    function () {
      if (productCategory === "mais vendidos") {
        const produtosMaisVendidos = [
          {
            id: 2,
            title: "Mens Casual Premium Slim Fit T-Shirts ",
            price: 22.3,
            description:
              "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            category: "men's clothing",
            image:
              "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            rating: {
              rate: 4.1,
              count: 259,
            },
          },
          {
            id: 7,
            title: "White Gold Plated Princess",
            price: 9.99,
            description:
              "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
            category: "jewelery",
            image:
              "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
            rating: {
              rate: 3,
              count: 400,
            },
          },
          {
            id: 10,
            title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
            price: 109,
            description:
              "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
            category: "electronics",
            image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
            rating: {
              rate: 2.9,
              count: 470,
            },
          },
          {
            id: 12,
            title:
              "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
            price: 114,
            description:
              "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
            category: "electronics",
            image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
            rating: {
              rate: 4.8,
              count: 400,
            },
          },
          {
            id: 17,
            title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
            price: 39.99,
            description:
              "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
            category: "women's clothing",
            image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
            rating: {
              rate: 3.8,
              count: 679,
            },
          },
        ];
        setProdutos(produtosMaisVendidos);
        return;
      }
      setProdutos(null);
      fetch(`https://fakestoreapi.com/products/category/${productCategory}`)
        .then((res) => res.json())
        .then((data) => setProdutos(data));
    },
    [productCategory]
  );

  if (!produtos) {
    // Product data is not yet available
    return <Loading />; /* criar loading component */
  }
  return (
    <div className="py-16 min-h-screen ">
      <h1 className="font-bold text-3xl text-primary uppercase">
        {productCategory}
      </h1>
      <div className="grid grid-cols-1 px-12 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 ">
        {produtos.map((produto) => (
          <Card
            key={produto.id}
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
