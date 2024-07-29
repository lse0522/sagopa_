import React, {useState, useEffect} from "react";
import {SagopaHeroBanner, HeroImageContainer, HeroImage} from './MainPageStyled';

function MainPage() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prevNumber) => (prevNumber >= 3 ? 0 : prevNumber + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SagopaHeroBanner>
        <HeroImageContainer>
          <HeroImage number={number} src="heroimage1.png"/>
          <HeroImage number={number} src="heroimage2.png"/>
          <HeroImage number={number} src="heroimage3.png"/>
        </HeroImageContainer>
      </SagopaHeroBanner>
    </>
  );
}

export default MainPage;
