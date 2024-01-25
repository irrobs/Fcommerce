import Header from "./components/Header";
import HeaderIcons from "./components/HeaderIcons";
import Navigation from "./components/Navigation";
import NavigationItem from "./components/NavigationItem";
import MainPageContent from "./components/MainPageContent";
import ProductListPage from "./components/ProductListPage";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";
import { useState } from "react";
import MainCarrousel from "./components/MainCarrousel";

export default function App() {
  const [isMainPageActive, setIsMainPageActive] = useState(true);
  const [isProductListPageActive, setIsProductListPageActive] = useState(false);
  const [isProductPageActive, setIsProductPageActive] = useState(false);
  const [curProduct, setCurProduct] = useState<number | null>(null);

  function activateMainPage() {
    setIsMainPageActive(true);
    setIsProductListPageActive(false);
    setIsProductPageActive(false);
  }
  function activateProductListPage() {
    setIsMainPageActive(false);
    setIsProductListPageActive(true);
    setIsProductPageActive(false);
  }
  function activateProductPage(productId: number) {
    setIsMainPageActive(false);
    setIsProductListPageActive(false);
    setIsProductPageActive(true);
    setCurProduct(productId);
  }

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
    <div className="app font-body relative">
      {/* <CartSidebar /> */}
      <Header>
        <HeaderIcons />
      </Header>
      <Navigation>
        {navItems.map((item) => (
          <NavigationItem
            path={item.path}
            title={item.title}
            key={item.title}
          />
        ))}
      </Navigation>
      <main className="col-start-2 col-span-12 row-start-3 ">
        {isMainPageActive && (
          <MainPageContent>
            <MainCarrousel onSetProductPage={activateProductPage} />
          </MainPageContent>
        )}
        {isProductListPageActive && <ProductListPage />}
        {isProductPageActive && <ProductPage curProduct={curProduct} />}
      </main>
      <Footer />
    </div>
  );
}
