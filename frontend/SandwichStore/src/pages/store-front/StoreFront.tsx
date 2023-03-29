import React from 'react'
import Navbar from '../../components/Navbar';
import { Container, Typography } from '@mui/material';

import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";

const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";


export const StoreFront: React.FC = ({}) => {
  return (
    <>
      <Navbar/>
      
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
        shouldRenderMask
        label="Giau Pass - Italy"
        background={{
          backgroundImageSrc: giauPass
        }}
      />

      <Slide
        shouldRenderMask
        label="Bogliasco - Italy"
        background={{
          backgroundImageSrc: bogliasco
        }}
      />

      <Slide
        shouldRenderMask
        label="County Clare - Ireland"
        background={{
          backgroundImageSrc: countyClare
        }}
      />

      <Slide
        shouldRenderMask
        label="Crater Rock, OR - United States"
        background={{
          backgroundImageSrc: craterRock
        }}
      />
    </HeroSlider>

      <Container sx={{height: "1000px" }}>
        <Typography>
          dshfiusdhfiudshfiusdhfiusdhfiusdhfdshfiusdhfiudshfiusdhfiusdhfiusdhfdshfiusdhfiudshfiusdhfiusdhfiusdhfdshfiusdhfiudshfiusdhfiusdhfiusdhfdshfiusdhfiudshfiusdhfiusdhfiusdhfdshfiusdhfiudshfiusdhfiusdhfiusdhfdshfiusdhfiudshfiusdhfiusdhfiusdhfdshfiusdhfiudshfiusdhfiusdhfiusdhfdshfiusdhfiudshfiusdhfiusdhfiusdhf
        </Typography>
      </Container>
    </>
  );
}