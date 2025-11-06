import "./global.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import APropos from "./pages/APropos";
import Animation from "./pages/Animation";
import Randonnee from "./pages/Randonnee";
import GMNF from "./pages/GMNF";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/animation" element={<Animation />} />
          <Route path="/randonnee" element={<Randonnee />} />
          <Route path="/gmnf" element={<GMNF />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

createRoot(document.getElementById("root")!).render(<App />);
