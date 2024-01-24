import Button from "./Button";
import CardCart from "./CardCart";

export default function CartSidebar() {
  return (
    <div className="flex flex-col fixed z-40 top-0 right-0 bg-white h-screen w-1/4 border-l-2 border-primary py-4 px-3 text-primary font-bold ">
      <button className="text-black absolute top-4 right-4 text-4xl font-bold hover:text-red duration-200">
        X
      </button>
      <h2 className="text-3xl ">Seu carrinho</h2>
      <div className="mt-4 flex flex-col items-center gap-4 overflow-y-scroll h-full ">
        <CardCart />
        <CardCart />
        <CardCart />
        <CardCart />
        <CardCart />
      </div>
      <div className="py-3 mt-auto">
        <div className="text-2xl flex justify-between py-3 border-b-2 border-primary">
          <span>Quantidade</span>
          <span>10 produtos</span>
        </div>
        <div className="flex justify-between items-center py-3 relative">
          <span className="text-xl">Total:</span>
          <span className="font-bold text-black text-3xl">R$9000,00</span>
        </div>
        <div className="text-center">
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
