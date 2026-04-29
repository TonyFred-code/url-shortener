import Boost from "./components/Boost.jsx";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Form />
      <Features />
      <Boost />
      <Footer />
    </div>
  );
}
