import styled from "styled-components";

export const SagopaHeroBanner = styled.div`
overflow: hidden;
padding-top: 100px;
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        padding-top: 60px;
    }
`
export const HeroImageContainer = styled.div`
  width: 300vw;
`
export const HeroImage = styled.img`
  width: 100vw;
  transition: all 1s;
  transform: ${(props) => 
    props.number === 1 ? 'translateX(-100vw)' :
    props.number === 2 ? 'translateX(-200vw)' : 
    'none'};
`
