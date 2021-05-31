import { render } from "solid-js/web";
import { ThemeProvider } from "solid-styled-components";
import { Router, Route } from "solid-app-router";
// @ts-ignore
import anime from "animejs";
import routes from "./router";
import { themes } from "./utils/themeConfig";
import "./assets/css/main.css";
import "./globalStyles";
import { onMount } from "solid-js";
import InputAnimation from './components/InputAnimation';

const App = () => {
  onMount(() => {
    anime({
      targets: ".dir-normal",
      translateX: 250,
      easing: "easeInOutSine",
      duration: 2000,
      loop: true,
    });

    anime({
      targets: ".dir-reverse",
      translateX: 250,
      direction: "reverse",
      easing: "easeInOutSine",
      duration: 2000,
      loop: true,
    });

    anime({
      targets: ".dir-alternate",
      translateX: 250,
      direction: "alternate",
      easing: "easeInOutSine",
      duration: 2000,
      loop: true,
    });

    anime({
      targets: [".blue", ".green"],
      translateX: "13rem",
      rotate: 180,
      borderRadius: "8px",
      duration: 2000,
      loop: true,
    });

    var pathEl: any = document.querySelector(".curve");
    var presetsEls: any = document.querySelectorAll(".options button");
    var ratio: any = window.innerWidth >= 980 ? 2 : 1;

    var timeline = anime.timeline({
      loop: true,
    });

    function animateProgress(easingName: any) {
      timeline.pause();

      timeline = anime.timeline({
        loop: true,
      });

      timeline.add([
        {
          targets: ".axis.x",
          opacity: [
            { value: [0, 1], delay: 0, duration: 500 },
            { value: 0, delay: 1500, duration: 500 },
          ],
          translateX: { value: [0, 200 * ratio], delay: 500, duration: 1500 },
          easing: "linear",
          offset: 0,
        },
        {
          targets: ".axis.y",
          opacity: [
            { value: [0, 1], delay: 0, duration: 500 },
            { value: 0, delay: 1500, duration: 500 },
          ],
          translateY: {
            value: [0, -(200 * ratio)],
            delay: 500,
            duration: 1500,
            easing: easingName,
          },
          easing: "linear",
          offset: 0,
        },
        {
          targets: ".ball",
          translateY: {
            value: [100, 0],
            delay: 500,
            duration: 1500,
            easing: easingName,
          },
          scale: [
            { value: [0, 1], delay: 0, duration: 500, easing: "easeOutBack" },
            { value: 0, delay: 1500, duration: 500, easing: "easeInBack" },
          ],
          offset: 0,
        },
      ]);
    }

    function convertCoordinates(coords:  any) {
      var x1 = coords[0] * 100;
      var y1 = 100 - coords[1] * 100;
      var x2 = coords[2] * 100;
      var y2 = 100 - coords[3] * 100;
      return "M0 100C" + x1 + " " + y1 + " " + x2 + " " + y2 + " 100 0";
    }

    function getCoordinates(value: any) {
      return convertCoordinates(value.split(","));
    }

    function changeEase(event: any) {
      for (var i = 0; i < presetsEls.length; i++) {
        presetsEls[i].classList.remove("active");
      }
      var buttonEl = event.target;
      var value = buttonEl.value;
      var name = buttonEl.name;
      buttonEl.classList.add("active");
      var coordinates = getCoordinates(value);
      animateProgress(name);
      anime.remove(pathEl);
      anime({
        targets: pathEl,
        d: coordinates,
      });
    }

    for (var i = 0; i < presetsEls.length; i++) {
      presetsEls[i].onclick = changeEase;
    }

    presetsEls[0].click();

    pathEl.setAttribute("d", getCoordinates(presetsEls[0].value));
  });

  return (
    <div>
      <h2>Demo example</h2>
      <div className="dir-normal"></div>
      <div className="dir-alternate"></div>
      <div className="dir-reverse"></div>

      <div class="blue"></div>
      <div class="green"></div>

      <div style={{ "margin-bottom": '60px', "margin-top": '60px'}}>
        <h2>Input animation demo</h2>
        <InputAnimation />
      </div>

      <h2>visualizer Demo</h2>
      <div style={{ display: 'block', height: '100%'}}>
        <div class="easings">
          <div class="output">
            <div class="visualizer-wrapper grid">
              <div class="axis x"></div>
              <div class="axis y"></div>
              <div class="visualizer">
                <div
                  class="ball"
                  style="transform: translateY(100px) scale(0)"
                ></div>
                <svg viewBox="0 0 100 100">
                  <path class="curve" />
                </svg>
              </div>
            </div>
            <div class="value grid"></div>
          </div>
          <div class="options">
            <label>Ease In</label>
            <button
              class="active"
              value="0.550, 0.085, 0.680, 0.530"
              name="easeInQuad"
            >
              Quad
            </button>
            <button value="0.550, 0.055, 0.675, 0.190" name="easeInCubic">
              Cubic
            </button>
            <button value="0.895, 0.030, 0.685, 0.220" name="easeInQuart">
              Quart
            </button>
            <button value="0.755, 0.050, 0.855, 0.060" name="easeInQuint">
              Quint
            </button>
            <button value="0.470, 0.000, 0.745, 0.715" name="easeInSine">
              Sine
            </button>
            <button value="0.950, 0.050, 0.795, 0.035" name="easeInExpo">
              Expo
            </button>
            <button value="0.600, 0.040, 0.980, 0.335" name="easeInCirc">
              Circ
            </button>
            <button value="0.600, -0.280, 0.735, 0.045" name="easeInBack">
              Back
            </button>
            <label>Ease Out</label>
            <button value="0.250, 0.460, 0.450, 0.940" name="easeOutQuad">
              Quad
            </button>
            <button value="0.215, 0.610, 0.355, 1.000" name="easeOutCubic">
              Cubic
            </button>
            <button value="0.165, 0.840, 0.440, 1.000" name="easeOutQuart">
              Quart
            </button>
            <button value="0.230, 1.000, 0.320, 1.000" name="easeOutQuint">
              Quint
            </button>
            <button value="0.390, 0.575, 0.565, 1.000" name="easeOutSine">
              Sine
            </button>
            <button value="0.190, 1.000, 0.220, 1.000" name="easeOutExpo">
              Expo
            </button>
            <button value="0.075, 0.820, 0.165, 1.000" name="easeOutCirc">
              Circ
            </button>
            <button value="0.175, 0.885, 0.320, 1.275" name="easeOutBack">
              Back
            </button>
            <label>Ease In Out</label>
            <button value="0.455, 0.030, 0.515, 0.955" name="easeInOutQuad">
              Quad
            </button>
            <button value="0.645, 0.045, 0.355, 1.000" name="easeInOutCubic">
              Cubic
            </button>
            <button value="0.770, 0.000, 0.175, 1.000" name="easeInOutQuart">
              Quart
            </button>
            <button value="0.860, 0.000, 0.070, 1.000" name="easeInOutQuint">
              Quint
            </button>
            <button value="0.445, 0.050, 0.550, 0.950" name="easeInOutSine">
              Sine
            </button>
            <button value="1.000, 0.000, 0.000, 1.000" name="easeInOutExpo">
              Expo
            </button>
            <button value="0.785, 0.135, 0.150, 0.860" name="easeInOutCirc">
              Circ
            </button>
            <button value="0.680, -0.550, 0.265, 1.550" name="easeInOutBack">
              Back
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

render(
  () => (
    <Router routes={routes}>
      <ThemeProvider theme={themes.default}>
        <App />
      </ThemeProvider>
    </Router>
  ),
  document.getElementById("root") as any
);
