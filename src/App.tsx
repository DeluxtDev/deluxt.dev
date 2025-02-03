import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Sidebar from "./components/Sidebar";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <Router>
      <Header />
      <main className="container">
        <div className="row">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Sidebar />
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
