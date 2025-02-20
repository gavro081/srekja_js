import Navbar from "../shumaComponents/Navbar.jsx";
import Footer from "../shumaComponents/Footer.jsx";
import Hero from "../shumaComponents/Hero.jsx";
import Podcasts from "../shumaComponents/Podcasts.jsx";
import Blogs from "../shumaComponents/Blogs.jsx";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Blogs />
      <Podcasts />
      <Footer />
    </div>
  );
}
