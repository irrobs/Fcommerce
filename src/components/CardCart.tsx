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

export default function CardCart({
  cartProduct,
  cartProducts,
  onSetCartProduct,
}: {
  cartProduct: productsProps;
  cartProducts: productsProps[];
  onSetCartProduct: (a: productsProps[]) => void;
}) {
  function handleIncreaseAmount(id: number) {
    const updatedCartProducts = cartProducts.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          amount: (product.amount || 0) + 1,
        };
      }
      return product;
    });

    onSetCartProduct(updatedCartProducts);
  }
  function handleDecreaseAmount(id: number) {
    const updatedCartProducts = cartProducts.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          amount:
            product.amount === 1 ? product.amount : (product.amount || 0) - 1,
        };
      }
      return product;
    });

    onSetCartProduct(updatedCartProducts);
  }

  function handleDeleteCartItem(id: number) {
    const updatedCartProducts = cartProducts.filter(
      (product) => product.id !== id
    );

    onSetCartProduct(updatedCartProducts);
  }

  return (
    <div className="h-40 relative w-11/12 rounded-2xl border border-black overflow-hidden flex shrink-0 gap-4 p-4 text-black">
      <img
        className="w-1/3 h-32 shrink-0"
        src={cartProduct.image}
        alt={cartProduct.title}
      />
      <div className="flex flex-col">
        <h3 className="text-md font-normal line-clamp-2 max-w-52">
          {cartProduct.title}
        </h3>
        <p className="text-sm font-medium">(R${cartProduct.price} cada)</p>
        <span className="">
          R${(cartProduct.price * (cartProduct.amount || 0)).toFixed(2)}
        </span>

        <div className="mt-auto flex items-center gap-4 font-medium text-lg">
          <button
            className="hover:font-bold duration-200"
            onClick={() => handleIncreaseAmount(cartProduct.id)}
          >
            +
          </button>
          <span>{cartProduct.amount}</span>
          <button
            className="hover:font-bold duration-200"
            onClick={() => handleDecreaseAmount(cartProduct.id)}
          >
            -
          </button>
        </div>
      </div>
      <button
        className="absolute bottom-4 right-4 text-2xl hover:text-red duration-200"
        onClick={() => handleDeleteCartItem(cartProduct.id)}
      >
        X
      </button>
    </div>
  );
}
