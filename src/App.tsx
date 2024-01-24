import Header from "./components/Header";
import HeaderIcons from "./components/HeaderIcons";

import Navigation from "./components/Navigation";
import NavigationItem from "./components/NavigationItem";

import MainPageContent from "./components/MainPageContent";
import ProductListPage from "./components/ProductListPage";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";

export default function App() {
  const navItems = [
    {
      path: "#",
      title: "jóias",
    },
    {
      path: "#",
      title: "eletrônicos",
    },
    {
      path: "#",
      title: "roupas masculinas",
    },
    {
      path: "#",
      title: "roupas femininas",
    },
  ];
  return (
    <div className="app font-body">
      <Header>
        <HeaderIcons />
      </Header>
      <Navigation>
        {navItems.map((item) => (
          <NavigationItem path={item.path} title={item.title} />
        ))}
      </Navigation>
      <main className="col-start-2 col-span-12 row-start-3 ">
        {/* <MainPageContent /> */}
        <ProductListPage />
        {/* <ProductPage /> */}
      </main>
      <Footer />
    </div>
  );
}
