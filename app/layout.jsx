import Navbar from "./components/navbar/Navbar";
// import { Inter, Convergence } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import Headline from "./components/head/Headline";
import Description from "./components/description/Description";
import LatestProject from "./components/latest-project/LatestProject";
// import sad from "../public/Anggi Marito Tak Segampang Itu.mp3"
// import CorsItem from './components/carousel-item/CarouselItem'
import Footer from "./components/footer/Footer";

// const conv = Convergence({
//   subsets: ['latin'],
//   weight: "400",
// })

export const metadata = {
  title: "My Portfolio",
  description: "Creating my first portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <section>
          <Navbar />
          <Headline />
        </section>
        <section>
          <Description />
        </section>
        <section>
          <LatestProject />
        </section>
        <section>
          {/* <Footer /> */}
        </section>
        {/* <CorsItem /> */}
      </body>
    </html>
  );
}
