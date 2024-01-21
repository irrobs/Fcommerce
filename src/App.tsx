import Header from "./components/Header";
import Navigation from "./components/Navigation";
import MainPageContent from "./components/MainPageContent";

export default function App() {
  return (
    <div className="app font-body">
      <Header />
      <Navigation />
      <main className="col-start-2 col-span-12 row-start-3 ">
        <MainPageContent />
      </main>
    </div>
  );
}
