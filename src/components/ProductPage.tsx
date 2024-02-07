import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Button from "./Button";
import Rating from "./Rating";
import Loading from "./Loading";
import { toast } from "sonner";
import arrowLeft from "../assets/chevron-left.svg";

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
  prevPage,
  onActivateMainPage,
  onActivateProductListPage,
  onActivateWishlistPage,
  onSetWishlistProducts,
  wishlistProducts,
}: {
  curProduct: null | number;
  onSetCartProduct: (a: productsProps[]) => void;
  cartProducts: productsProps[] | [];
  prevPage: string;
  onActivateMainPage: () => void;
  onActivateProductListPage: () => void;
  onActivateWishlistPage: () => void;
  onSetWishlistProducts: Dispatch<SetStateAction<productsProps[]>>;
  wishlistProducts: productsProps[];
}) {
  const [product, setProduct] = useState<productsProps | object>({});

  useEffect(
    function () {
      async function fetchProduct() {
        try {
          const res = await fetch(
            `https://fakestoreapi.com/products/${curProduct}`
          );

          if (!res.ok) throw new Error();

          const data = await res.json();
          setProduct(data);
        } catch (error) {
          return <p>Produto não encontrado</p>;
        }
      }
      fetchProduct();
    },
    [curProduct]
  );

  function handleAddCart(id: number | null) {
    if (!cartProducts.some((p) => p.id === id)) {
      onSetCartProduct([
        ...cartProducts,
        {
          ...(product as productsProps),
          amount: 1,
        },
      ]);

      toast.success("Adicionado ao carrinho!");
    }
  }

  function handleReturnToPage() {
    if (prevPage === "#main" || prevPage === "") {
      onActivateMainPage();
    } else if (prevPage === "#wishlist") {
      onActivateWishlistPage();
    } else {
      onActivateProductListPage();
    }
  }

  function handleSetWishlistProducts(product: productsProps) {
    if (wishlistProducts.some((p) => p.id === product.id)) {
      onSetWishlistProducts(
        wishlistProducts.filter((p) => p.id !== product.id)
      );
      toast.success("Removido da lista de desejos!");
    } else {
      onSetWishlistProducts([...wishlistProducts, product]);
      toast.success("Adicionado a lista de desejos!");
    }
  }

  if (!("id" in product)) {
    return <Loading />;
  }

  return (
    <div className="flex gap-8 py-24 relative">
      <button
        className="absolute top-6 left-0 flex items-center gap-2 text-sm uppercase font-medium hover:-translate-x-4 duration-200"
        onClick={() => handleReturnToPage()}
      >
        <img src={arrowLeft} alt="Seta para a esquerda" className="w-6 h-6" />
        voltar
      </button>
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
          <div onClick={() => toast.success("Compra realizada com sucesso")}>
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
          </div>
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
          <div onClick={() => handleSetWishlistProducts(product)}>
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
    </div>
  );
}
