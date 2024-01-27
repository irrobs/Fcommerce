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
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [curProduct, setCurProduct] = useState<number | null>(null);
  const [productListCategory, setProductListCategory] = useState<string | null>(
    null
  );

  function activateMainPage() {
    setIsMainPageActive(true);
    setIsProductListPageActive(false);
    setIsProductPageActive(false);
    setCurProduct(null);
  }
  function activateProductListPage() {
    setIsMainPageActive(false);
    setIsProductListPageActive(true);
    setIsProductPageActive(false);
    setCurProduct(null);
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
      id: "jewelery",
    },
    {
      path: "#",
      title: "eletrônicos",
      id: "electronics",
    },
    {
      path: "#",
      title: "roupas masculinas",
      id: "men's clothing",
    },
    {
      path: "#",
      title: "roupas femininas",
      id: "women's clothing",
    },
  ];

  return (
    <div className="app font-body relative">
      <CartSidebar
        sidebarActive={isSidebarActive}
        onSetSidebar={setIsSidebarActive}
      />
      <Header onActivateMainPage={activateMainPage}>
        <HeaderIcons
          isActive={isSidebarActive}
          onSetSidebar={setIsSidebarActive}
        />
      </Header>
      <Navigation>
        {navItems.map((item) => (
          <NavigationItem
            title={item.title}
            id={item.id}
            key={item.title}
            onActivateProductListPage={activateProductListPage}
            onSetProductListCategory={setProductListCategory}
          />
        ))}
      </Navigation>
      <main className="col-start-2 col-span-12 row-start-3 ">
        {isMainPageActive && (
          <MainPageContent
            onActivateProductListPage={activateProductListPage}
            onSetProductListCategory={setProductListCategory}
          >
            <MainCarrousel onSetProductPage={activateProductPage} />
          </MainPageContent>
        )}
        {isProductListPageActive && (
          <ProductListPage
            productCategory={productListCategory}
            onSetProductPage={activateProductPage}
          />
        )}
        {isProductPageActive && <ProductPage curProduct={curProduct} />}
      </main>
      <Footer />
    </div>
  );
}
