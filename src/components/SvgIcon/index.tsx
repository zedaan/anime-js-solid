import { Component, createComputed } from 'solid-js';

const SvgIcon: Component<any> = (props) => {
  const element: any = document.createElement('div');
  
  createComputed(() => {
    element.innerHTML = props.src?.default || props.src;
  })
  
  return element
}

export default SvgIcon;
