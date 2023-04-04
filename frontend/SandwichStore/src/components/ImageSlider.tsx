import React from 'react';
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";

const bogliasco = "https://i.ibb.co/K0BjnqH/tasty-breakfast-appetizing-croissant-with-salami-cheese-tomatoes-2829-5526-Large.png";
const countyClare = "https://i.ibb.co/yyMHkwV/juicy-red-pepper-looks-from-wholemeal-bread-sandwich-Large.png";
const craterRock = "https://i.ibb.co/8X4dK8T/club-sandwich-panini-with-ham-cheese-tomato-herbs-2829-19928-Large.png";
const giauPass = "https://i.ibb.co/FmkSwM9/side-view-chicken-doner-with-tomato-greens-lettuce-bread-141793-4827-Large.png";



export const ImageSlider: React.FC = ({}) => {
  return (
    <HeroSlider
      height={"600px"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
      }}
    >

      <Slide
        label="Giau Pass - Italy"
        background={{
          backgroundImageSrc: giauPass
        }}
      />

      <Slide
        label="Bogliasco - Italy"
        background={{
          backgroundImageSrc: bogliasco
        }}
      />

      <Slide
        label="County Clare - Ireland"
        background={{
          backgroundImageSrc: countyClare
        }}
      />

      <Slide
        label="Crater Rock, OR - United States"
        background={{
          backgroundImageSrc: craterRock
        }}
      />
      <MenuNav />
    </HeroSlider>
  );
}