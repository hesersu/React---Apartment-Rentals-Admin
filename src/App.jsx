import "./App.css";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Listings from "./components/Listings";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Listings />
      <Footer />
    </>
  );
}

export default App;
