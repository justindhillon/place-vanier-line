import AboutWebsite from "../components/about-website";
import Button from "../components/button";
import Navbar from '../components/navbar';
import Footer from "../components/footer";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <br />
      <Button />
      <br /><br /><br /><br /><br />
      <AboutWebsite />
      <br />
      <Footer />
    </div>
  );
}
