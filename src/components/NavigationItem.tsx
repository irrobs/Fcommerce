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
      className="w-full md:w-auto text-center py-2 md:pt-2 md:pb-4 px-3 uppercase md:rounded-t-2xl text-lg font-bold bg-black md:border-b-0 hover:bg-white  hover:text-black transition  duration-500 ease-out cursor-pointer"
      onClick={() => {
        onActivateProductListPage();
        onSetProductListCategory(id);
      }}
    >
      {title}
    </a>
  );
}
