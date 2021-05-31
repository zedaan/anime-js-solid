import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import SvgIcon from '../../components/SvgIcon';

const Wrapper = styled('div')`
  display: flex;
  background: #000000;
  width: 120px;
  height: 120px;
  justify-content: center;
  align-items: center;
  margin: 75px 0;
  margin-right: 70px;
  border-radius: 40px;
  
  svg {
    width: 73px;
    height: 73px;
    object-fit: contain;
    filter: contrast(2);
  }

  @media(max-width: 767px) {
    height: 80px;
    width: 80px;
    margin-right: 20px;
    border-radius: 20px;

    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

const Icon: Component<any> = (props) => {
  return (
    <Wrapper>
      <SvgIcon src={props.src} className="staurate" />
    </Wrapper>
  )
}

export default Icon;
