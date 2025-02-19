import Navbar from "../shumaComponents/Navbar.jsx";
import Footer from "../shumaComponents/Footer.jsx";
import Hero from "../shumaComponents/Hero.jsx";
import Podcasts from "../shumaComponents/Podcasts.jsx";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Podcasts />
      <Footer />
    </div>
  );
}
