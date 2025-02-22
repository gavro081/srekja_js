import Navbar from "../shumaComponents/Navbar.jsx";
import Footer from "../shumaComponents/Footer.jsx";
import Hero from "../shumaComponents/Hero.jsx";
import Podcasts from "../shumaComponents/Podcasts.jsx";
import BlogsHome2 from "../shumaComponents/BlogsHome2.jsx";
import StartUpsListings from "../StartUps1/startUpsListings.jsx";
import ChatBot from "../AI/Chatbot.jsx";

export default function Home() {
  return (
    <div style={{ backgroundColor: "var(--body-white)" }}>
      <Navbar />
      <Hero />
      <StartUpsListings />
      <BlogsHome2 />
      <ChatBot />
      <Podcasts />
      <Footer />
    </div>
  );
}
