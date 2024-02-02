import { useEffect, useState, useRef } from "react";

import Header from "./components/Header";
import HeaderIcons from "./components/HeaderIcons";
import Navigation from "./components/Navigation";
import NavigationItem from "./components/NavigationItem";
import MainPageContent from "./components/MainPageContent";
import ProductListPage from "./components/ProductListPage";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";
import MainCarrousel from "./components/MainCarrousel";
import { useLocalStorageState } from "./components/useLocalStorageState";
import WishlistPage from "./components/WishlistPage";

export default function App() {
  const [isMainPageActive, setIsMainPageActive] = useState(true);
  const [isProductListPageActive, setIsProductListPageActive] = useState(false);
  const [isProductPageActive, setIsProductPageActive] = useState(false);
  const [isWishlistPageActive, setIsWishlistPageActive] = useState(false);
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [curProduct, setCurProduct] = useState<number | null>(null);
  const [productListCategory, setProductListCategory] = useState<string | null>(
    null
  );
  const [cartProducts, setCartProducts] = useLocalStorageState(
    [],
    "cartProducts"
  );
  const [wishlistProducts, setWishlistProducts] = useLocalStorageState(
    [],
    "wishlistProducts"
  );

  const prevPageRef = useRef("");

  useEffect(() => {
    function handleHashChange() {
      prevPageRef.current = window.location.hash;
    }

    window.addEventListener("hashchange", handleHashChange);
  }, []);

  function activateMainPage() {
    setIsMainPageActive(true);
    setIsProductListPageActive(false);
    setIsProductPageActive(false);
    setIsWishlistPageActive(false);
    setCurProduct(null);
  }
  function activateProductListPage() {
    setIsMainPageActive(false);
    setIsProductListPageActive(true);
    setIsProductPageActive(false);
    setIsWishlistPageActive(false);
    setCurProduct(null);
  }
  function activateProductPage(productId: number) {
    setIsMainPageActive(false);
    setIsProductListPageActive(false);
    setIsProductPageActive(true);
    setIsWishlistPageActive(false);
    setCurProduct(productId);
  }
  function activateWishListPage() {
    setIsMainPageActive(false);
    setIsProductListPageActive(false);
    setIsProductPageActive(false);
    setIsWishlistPageActive(true);
  }

  const navItems = [
    {
      path: "#jewelery",
      title: "jóias",
      id: "jewelery",
    },
    {
      path: "#electronics",
      title: "eletrônicos",
      id: "electronics",
    },
    {
      path: "#men's clothing",
      title: "roupas masculinas",
      id: "men's clothing",
    },
    {
      path: "#women's clothing",
      title: "roupas femininas",
      id: "women's clothing",
    },
  ];

  return (
    <div className="app font-body relative scroll-smooth">
      <CartSidebar
        sidebarActive={isSidebarActive}
        onSetSidebar={setIsSidebarActive}
        cartProducts={cartProducts}
        onSetCartProduct={setCartProducts}
      />
      <Header onActivateMainPage={activateMainPage}>
        <HeaderIcons
          isActive={isSidebarActive}
          onSetSidebar={setIsSidebarActive}
          onSetWishlistPage={activateWishListPage}
          cartProductsLenght={cartProducts.length}
        />
      </Header>
      <Navigation>
        {navItems.map((item) => (
          <NavigationItem
            title={item.title}
            id={item.id}
            key={item.title}
            path={item.path}
            onActivateProductListPage={activateProductListPage}
            onSetProductListCategory={setProductListCategory}
          />
        ))}
      </Navigation>
      <main className="col-start-2 col-span-12 row-start-3 min-h-screen">
        {isMainPageActive && (
          <MainPageContent
            onActivateProductListPage={activateProductListPage}
            onSetProductListCategory={setProductListCategory}
            mainNavPaths={navItems.map((item) => item.path)}
          >
            <MainCarrousel
              onSetProductPage={activateProductPage}
              wishlistProducts={wishlistProducts}
              onSetWishlistProducts={setWishlistProducts}
            />
          </MainPageContent>
        )}
        {isProductListPageActive && (
          <ProductListPage
            productCategory={productListCategory}
            onSetProductPage={activateProductPage}
            onSetWishlistProducts={setWishlistProducts}
            wishlistProducts={wishlistProducts}
          />
        )}
        {isProductPageActive && (
          <ProductPage
            curProduct={curProduct}
            cartProducts={cartProducts}
            onSetCartProduct={setCartProducts}
            prevPage={prevPageRef.current}
            onActivateProductListPage={activateProductListPage}
            onActivateMainPage={activateMainPage}
            onSetWishlistProducts={setWishlistProducts}
            wishlistProducts={wishlistProducts}
          />
        )}
        {isWishlistPageActive && (
          <WishlistPage
            onSetProductPage={activateProductPage}
            onSetWishlistProducts={setWishlistProducts}
            wishlistProducts={wishlistProducts}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
