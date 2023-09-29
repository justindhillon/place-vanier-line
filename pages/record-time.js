import AboutWebsite from "../components/about-website";
import Button from "../components/button";
import Navbar from '../components/navbar';

export default function Homepage() {
  return (
    <div style={{overflow: "scroll"}}>
      <Navbar />
      <br />
      <Button />
      <br /><br /><br /><br /><br />
      <AboutWebsite />
    </div>
  );
}
