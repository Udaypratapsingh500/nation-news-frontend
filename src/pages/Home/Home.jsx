import TopHeader from "../../component/TopHeader/TopHeader";
import Navbar from "../../component/Navbar/Navbar";
import BreakingNews from "../../component/BreakingNews/BreakingNews";
import Hero from "../../component/Hero/Hero";
import LatestNews from "../../component/LatestNews/LatestNews";
import CategorySection from "../../component/CategorySection/CategorySection";
import VideoSection from "../../component/VideoSection/VideoSection";
import MostRead from "../../component/MostRead/MostRead";
import Footer from "../../component/Footer/Footer";

const Home = () => {
  return (
    <>
      <TopHeader />
      <Navbar />
      <BreakingNews />
      <Hero />
      <LatestNews />

      <CategorySection title="Politics" />

      <CategorySection title="Sports" />

      <CategorySection title="Technology" />

      <CategorySection title="Business" />

      <VideoSection />
      <MostRead />
      <Footer />
    </>
  );
};

export default Home;