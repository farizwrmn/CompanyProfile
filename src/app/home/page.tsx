import SimpleThreeColumns from "./features";
import Carousel from "./gallery";
import WithBackgroundImage from "./hero";
import Navbar from "./navbar";
import Contact from "./book";
import SmallWithSocial from "./footer";
import logo from "../img/cup.png";

export default function Home() {
  return (
    <div>
      <Navbar brandName="" imageSrcPath={logo} />
      <WithBackgroundImage />
      <br />
      <br />
      <SimpleThreeColumns />
      <br />
      <Carousel />
      <Contact />
      <SmallWithSocial />
    </div>
  );
}
