import AboutWebsite from "../components/about-website";
import Button from "../components/button";
import Navbar from '../components/navbar';

export default function Homepage() {
  return (
    <div style={{overflow: "scroll"}}>
      <Navbar />
      <Button />
      <br />
      <AboutWebsite />
    </div>
  );
}
