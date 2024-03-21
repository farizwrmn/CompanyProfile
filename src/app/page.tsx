import SimpleThreeColumns from "./home/features";
import Carousel from "./home/gallery";
import Navbar from "./home/navbar";
import Contact from "./home/book";
import SmallWithSocial from "./home/footer";
import logo from "./img/cup.png";
import WithSpeechBubbles from "./home/testimonial";
import CallToActionWithAnnotation from "./home/overview";
import CaptionCarousel from "./home/hero1";

export default function Home() {
  return (
    <div>
      <Navbar brandName="Warkop Militan" imageSrcPath={logo} />
      <CaptionCarousel />
      <CallToActionWithAnnotation />
      <SimpleThreeColumns />
      <br />
      <Carousel />
      <WithSpeechBubbles />
      <Contact />
      <SmallWithSocial />
    </div>
  );
}
