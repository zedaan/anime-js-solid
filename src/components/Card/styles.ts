import { styled } from 'solid-styled-components';

const Wrapper = styled('div')`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  padding: 16px;
  min-width: 345px;
  height: 250px;

  @media (max-width: 480px) {
    min-width: auto;
    width: 100%;
  }
`;

export default Wrapper;
