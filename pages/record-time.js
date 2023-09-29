import AboutWebsite from "../components/about-website";
import Button from "../components/button";
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Button />
      <AboutWebsite />
      <br />
      <Footer />
    </div>
  );
}
