import HomePageBar from '../UI/homepage/HomePageBar';
import LazyImage from '../UI/homepage/LazyImage';
import OverviewContainer from '../UI/homepage/OverviewContainer';
import Footer from '../UI/footer/Footer';
import Features from '../UI/homepage/features';

function HomePage() {
  return (
    <>
      <HomePageBar />
      <LazyImage src='../images/homePageImage.jpg' alt='coverPhoto' />
      <OverviewContainer />
      <Features />
      <Footer withAboutUs={false} />
    </>
  );
}

export default HomePage;
