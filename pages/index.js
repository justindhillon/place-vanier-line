import Navbar from '../components/navbar';
import LineChart from "../components/line-chart";
import AboutWebsite from '../components/about-website';
import Footer from '../components/footer';
import Head from 'next/head';

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <LineChart />
      <AboutWebsite />
      <Footer />
    </div>
  );
}
