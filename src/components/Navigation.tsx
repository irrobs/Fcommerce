export default function Navigation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <nav className="grid grid-cols-subgrid row-start-2 col-span-full bg-black">
      <div className="flex text-white col-start-2 col-span-12 justify-between">
        {children}
      </div>
    </nav>
  );
}
