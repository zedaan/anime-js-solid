import { glob } from "solid-styled-components";

export default glob`
html,
body {
  background: #1A1818;
  font-family: 'Inter', sans-serif;
  padding: 0;
  margin: 0;
}

h2 {
  font-size: 28px;
  color: #e9e9e9;
}

* {
  box-sizing: border-box;
}

.line {
  fill: none;
  stroke: #ffab00;
  stroke-width: 3;
}
  
.overlay {
  fill: none;
  pointer-events: all;
}

.dot {
  fill: #ffab00;
  stroke: #fff;
  height: 100px;
}
  
.focus {
  fill: #fff;
  stroke: steelblue;
  cursor: pointer;
}

.btn--wrap {
  > button {
    margin-right: 10px;
  }
}

.container {
  max-width: 1200px;
}

.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;

  h2 {
    font-size: 30px;
    color: #fff;
    margin-bottom: 20px;
  }

  a {
    display: inline-block;
    text-align: center;
    font-family: Proxima;
    color: #1A1818;
    background: #F2F1EA;
    border-radius: 5px;
    padding: 8px 30px;
    border-radius: 5px;
    margin: auto;

  }
}

.dir-reverse,
.dir-alternate,
.dir-normal {
  height: 10px;
  width: 10px;
  background: red;
  margin: 5px;
}

.green,
.blue {
    width: 2rem;
    height: 2rem;
    margin: .5rem;
}

.green {
  background: #31FFA6;
}

.blue {
  background: #206EFF;
}


.easings {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
}
.output {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 400px;
}
.options {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  min-height: 300px;
  border-top: 1px solid #09090B;
}
.grid {
  border-top: 1px solid rgba(255,255,255,0.2);
  border-right: 1px solid rgba(255,255,255,0.2);
  background: linear-gradient(0deg, rgba(255,255,255,0.2) 1px, rgba(0,0,0,0) 1px),
    linear-gradient(90deg, rgba(255,255,255,0.2) 1px, rgba(0,0,0,0) 1px),
    linear-gradient(0deg, rgba(255,255,255,0.1) 1px, rgba(0,0,0,0) 1px),
    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, rgba(0,0,0,0) 1px);
  background-position: 0px -1px;
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
}
.visualizer-wrapper {
  position: relative;
  width: 200px;
  height: 200px;
}
.visualizer {
  position: relative;
  width: 100px;
  height: 100px;
  transform: scale(2);
  transform-origin: 0 0;
}
.value {
  width: 20px;
  height: 200px;
  margin-left: 20px;
}
@media screen and (min-width: 980px) {
  .easings {
    flex-direction: row;
  }
  .output {
    width: 50%;
    height: 100%;
  }
  .options {
    width: 50%;
    height: 100%;
  }
  .visualizer-wrapper {
    width: 400px;
    height: 400px;
  }
  .visualizer {
    transform: scale(4);
  }
  .value {
    width: 40px;
    height: 400px;
    margin-left: 40px;
  }
}
.axis {
  opacity: 0;
  position: absolute;
  background: #5A87FF;
}
.axis.x {
  width: 1px;
  height: 100%;
  transform-origin: 0 0;
}
.axis.y {
  bottom: 0;
  width: 100%;
  height: 1px;
  transform-origin: 100% 0;
}
.ball {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 100%;
  width: 10px;
  height: 10px;
  margin: -5px 0 0 10px;
  background: #FF1461;
  border-radius: 50%;
}
svg {
  overflow: visible;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
}
path {
  fill: none;
  stroke: #18FF92;
}
button {
  opacity: 1;
  position: relative;
  color: currentColor;
  font-size: 16px;
  width: calc(25% + 1px);
  border: 1px solid #09090B;
  background: transparent;
  margin: -1px 0 0 -1px;
  letter-spacing: 1px;
}
label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% + 1px);
  margin: -1px 0 0 -1px;
  border-top: 0px;
  border-left: 1px solid #09090B;
  border-right: 1px solid #09090B;
  color: rgba(255,255,255,.3);
}
button.active {
  color: #18FF92;
  z-index: 1;
  opacity: 1;
  border: 1px solid currentColor;
  background: #222027;
}
button:focus {
  outline: none;
}
button:hover {
  background: #222027;
}

`;
