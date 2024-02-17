export default function Navigation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <nav className="absolute w-full top-0 left-0 md:relative grid grid-cols-subgrid row-start-2 col-span-full bg-black z-30 ">
      <div className="flex flex-col w-full md:flex-row text-white col-start-2 col-span-12 justify-between">
        {children}
      </div>
    </nav>
  );
}
