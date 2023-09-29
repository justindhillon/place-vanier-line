import Navbar from '../components/navbar';
import LineChart from "../components/line-chart";
import AboutWebsite from '../components/about-website';

export default function Homepage() {
  return (
    <div style={{height:"100vh"}}>
      <Navbar />
      <br />
      <LineChart />
      <br />
      <AboutWebsite />
      <div class="footer">
        <p>Learn More <a href="https://placevanierline.vercel.app/about-me">About Me</a></p>
        <br />
      </div>
    </div>
  );
}
