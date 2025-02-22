import Navbar from "../shumaComponents/Navbar.jsx";
import Footer from "../shumaComponents/Footer.jsx";
import Hero from "../shumaComponents/Hero.jsx";
import Podcasts from "../shumaComponents/Podcasts.jsx";
import Blogs from "../shumaComponents/Blogs.jsx";
import BlogsHome2 from "../shumaComponents/BlogsHome2.jsx";
import BlogsHome from "../shumaComponents/BlogsHome.jsx";
import StartUpsListings from "../StartUps1/startUpsListings.jsx";

export default function Home() {
  return (
    <div style={{ backgroundColor: "var(--body-white)" }}>
      <Navbar />
      <Hero />
      <StartUpsListings />
      <BlogsHome2 />
      <Podcasts />
      <Footer />
    </div>
  );
}
