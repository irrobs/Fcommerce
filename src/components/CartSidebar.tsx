import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";
import Button from "./Button";
import CardCart from "./CardCart";

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

export default function CartSidebar({
  sidebarActive,
  onSetSidebar,
  onSetCartProduct,
  cartProducts,
}: {
  sidebarActive: boolean;
  onSetSidebar: Dispatch<SetStateAction<boolean>>;
  onSetCartProduct: (a: productsProps[]) => void;
  cartProducts: productsProps[] | [];
}) {
  function handleFinishPurchase() {
    onSetCartProduct([]);
    onSetSidebar(false);
    toast.success("Compra realizada com sucesso!");
  }
  return (
    <div
      className={`${
        sidebarActive ? "activeSidebar" : ""
      } flex flex-col fixed z-40 top-0 right-0 bg-white h-full w-full sm:w-2/3 md:w-1/2 lg:w-1/3 border-l-2 border-primary py-4 px-3 text-primary font-bold translate-x-full duration-500 ease-out `}
    >
      <button
        className="text-black absolute top-4 right-4 text-4xl font-bold hover:text-red duration-200"
        onClick={() => onSetSidebar(!sidebarActive)}
      >
        X
      </button>
      <h2 className="text-3xl ">Seu carrinho</h2>
      <div className="mt-4 flex flex-col items-center gap-4 overflow-y-scroll h-full ">
        {cartProducts.length === 0 ? (
          <span className="text-grayDark text-lg my-auto">
            Seu carrinho está vazio.
          </span>
        ) : (
          cartProducts.map((product) => (
            <CardCart
              key={product.id}
              cartProduct={product}
              onSetCartProduct={onSetCartProduct}
              cartProducts={cartProducts}
            />
          ))
        )}
      </div>
      <div className="py-3 mt-auto">
        <div className="text-2xl flex justify-between py-3 border-b-2 border-primary">
          <span>Quantidade</span>
          <p className="flex gap-2">
            <span>
              {cartProducts.reduce(
                (acc, product) => acc + (product.amount || 0),
                0
              )}
            </span>
            <span>produtos</span>
          </p>
        </div>
        <div className="flex justify-between items-center py-3 relative">
          <span className="text-xl">Total:</span>
          <span className="font-bold text-black text-3xl">
            R$
            {cartProducts
              .reduce(
                (acc, product) => acc + product.price * (product.amount || 0),
                0
              )
              .toFixed(2)}
          </span>
        </div>
        <div className="text-center" onClick={handleFinishPurchase}>
          <Button
            border="border"
            text="finalizar compra"
            textColor="text-primary"
            fontWeight="font-medium"
            paddingHorizontal="px-12"
            paddingVertical="py-2"
            bgColor="bg-white"
            marginLeft="ml-0"
            bgHoverColor="hover:bg-primary"
            textHoverColor="hover:text-white"
          />
        </div>
      </div>
    </div>
  );
}
