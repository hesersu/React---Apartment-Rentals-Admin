import "./App.css";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Listings from "./components/Listings";
import { Route, Routes } from "react-router-dom";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import CreateForm from "./components/CreateForm";
import Edit from "./components/Edit";

function App() {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Listings />} />
            <Route path="/details/:listId" element={<ItemDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/:listId/edit" element={<Edit />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
