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
import { useState } from "react";
import listingsData from "./assets/listings.json";

function App() {
  const [listResults, setListResults] = useState(listingsData.results);
  return (
    <>
      <Navbar />
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <Listings listings={listResults} setListings={setListResults} />
              }
            />
            <Route
              path="/details/:listId"
              element={
                <ItemDetailsPage
                  listings={listResults}
                  setListings={setListResults}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route
              path="/:listId/edit"
              element={
                <Edit listings={listResults} setListings={setListResults} />
              }
            />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
