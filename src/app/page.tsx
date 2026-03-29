import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import OrderNow from "@/components/OrderNow";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Menu />
      <div className="section-divider" />
      <Reviews />
      <div className="section-divider" />
      <OrderNow />
      <div className="section-divider" />
      <Contact />
    </>
  );
}
