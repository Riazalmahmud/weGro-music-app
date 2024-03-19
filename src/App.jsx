import "./App.css";
import { Outlet } from "react-router-dom";
import Navigation from "./Shared/Component/Navigation/Navigation";
import FooterComponent from "./Shared/Component/Footer/FooterComponent";
function App() {
  return (
    <>
      <div className="bg-[#1C0357]">
        <header>
          <Navigation />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <FooterComponent />
        </footer>
      </div>
    </>
  );
}

export default App;
