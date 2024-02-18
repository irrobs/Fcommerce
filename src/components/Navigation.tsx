export default function Navigation({
  children,
  showMobileNav,
}: {
  children: React.ReactNode;
  showMobileNav: boolean;
}) {
  return (
    <nav
      className={`${
        showMobileNav ? "translate-y-0" : "-translate-y-full"
      } md:translate-y-0 absolute w-full top-0 left-0 md:relative grid grid-cols-subgrid md:row-start-2 col-span-full bg-blackTint md:bg-black z-30 duration-200 `}
    >
      <div className="flex flex-col py-2 md:py-0 md:mt-2 gap-2 md:gap-0 items-center w-full md:flex-row text-white  md:col-start-2 md:col-span-12 justify-between">
        {children}
      </div>
    </nav>
  );
}
