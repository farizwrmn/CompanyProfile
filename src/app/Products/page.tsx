"use client";
import Navbar from "../home/navbar";
import logo from "../img/cup.png";
import SmallWithSocial from "../home/footer";
import CoffeeCard from "./items/coffee";
import Coffee1Card from "./items/coffee1";
import Coffee2Card from "./items/coffee2";
import Coffee3Card from "./items/coffee3";
import Tea from "./items/tea";
import Latte from "./items/latte";
import Candle from "./items/candles";
import Mug from "./items/mug";

export default function Products() {
  return (
    <>
      <Navbar brandName="" imageSrcPath={logo} />
      <CoffeeCard />
      <Coffee1Card />
      <Coffee2Card />
      <Coffee3Card />
      <Tea />
      <Latte />
      <Mug />
      <Candle />
      <SmallWithSocial />
    </>
  );
}
