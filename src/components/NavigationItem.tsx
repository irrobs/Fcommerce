export default function NavigationItem({
  path,
  title,
}: {
  path: string;
  title: string;
}) {
  return (
    <li className="mt-2 pt-2 pb-4 px-3 uppercase rounded-t-2xl text-lg font-bold hover:bg-white  hover:text-black transition  duration-500 ease-out">
      <a href={path}>{title}</a>
    </li>
  );
}
