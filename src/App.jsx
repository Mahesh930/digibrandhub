import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="start-a-project" element={<Navigate to="/contact" replace />} />
        <Route path="privacy" element={<Privacy />} />
      </Route>
    </Routes>
  );
}
