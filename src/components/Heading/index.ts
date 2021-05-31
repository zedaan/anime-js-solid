import { styled } from 'solid-styled-components';

const Header = styled('h2')`
  background: linear-gradient(90deg, #26C5E8 -3.87%, #C7F14F 110.33%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-style: normal;
  font-weight: 800;
  font-size: 4.375em;
  line-height: 80px;
  letter-spacing: -0.5px;

  &.heading--about {
    background: linear-gradient(90deg, #E82683 -3.87%, #C7F14F 110.33%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media(max-width: 1200px) {
    font-size: 4em;
    line-height: 70px;
    letter-spacing: 0;
  }

  @media(max-width: 1024px) {
    font-size: 3.5em;
    line-height: 65px;
  }

  @media(max-width: 767px) {
    font-size: 3em;
    line-height: 60px;
    letter-spacing: 0;
  }
`;

export default Header;
