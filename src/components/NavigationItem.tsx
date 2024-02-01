export default function NavigationItem({
  title,
  id,
  path,
  onActivateProductListPage,
  onSetProductListCategory,
}: {
  title: string;
  id: string;
  path: string;
  onActivateProductListPage: () => void;
  onSetProductListCategory: (a: string) => void;
}) {
  return (
    <a
      id={id}
      href={path}
      className="mt-2 pt-2 pb-4 px-3 uppercase rounded-t-2xl text-lg font-bold hover:bg-white  hover:text-black transition  duration-500 ease-out cursor-pointer"
      onClick={() => {
        onActivateProductListPage();
        onSetProductListCategory(id);
      }}
    >
      {title}
    </a>
  );
}
