import { Component } from 'solid-js';
import Wrapper from './styles';

const Card: Component<any> = (props) => {
  const { children, ...rest } = props;
  return (
    <Wrapper {...rest}>
      {children}
    </Wrapper>
  )
}

export default Card;
