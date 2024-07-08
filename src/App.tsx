import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Layout } from "./pages/Layout";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { NoPage } from "./pages/NoPage";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
