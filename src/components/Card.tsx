import Rating from "./Rating";

type productType = {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: number;
  width: string;
  onSetProductPage: (a: number) => void;
};

export default function Card({
  id,
  title,
  price,
  image,
  rating,
  width,
  onSetProductPage,
}: productType) {
  function handleSetProductPage(id: number) {
    onSetProductPage(id);
  }

  return (
    <div
      className={`shadow-md flex flex-col rounded-2xl overflow-hidden relative ${width} p-4`}
      onClick={() => handleSetProductPage(id)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6 absolute top-2 right-2 cursor-pointer fill-transparent hover:fill-red  duration-300"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
      <img className="h-44" src={image} alt={title} />

      <div className="p-4 flex flex-col grow ">
        <Rating rating={rating} marginTop="mt-2" />
        <h3 className="font-medium mb-4">{title}</h3>
        <span className="mt-auto font-bold">R${price}</span>
      </div>
    </div>
  );
}
