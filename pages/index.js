import Navbar from '../components/navbar';
import LineChart from "../components/line-chart";
import AboutWebsite from '../components/about-website';

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <br />
      <LineChart />
      <br />
      <AboutWebsite />
    </div>
  );
}
