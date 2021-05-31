import { onMount } from "solid-js";
// @ts-ignore
import anime from "animejs";
import { styled } from "solid-styled-components";

const Wrapper = styled("div")`
  display: block;

  .container {
    border-radius: 10px;
    height: 68px;
    overflow: hidden;
    position: relative;
    width: 340px;
  }
  .hidden-- {
    background-color: #121726;
    box-sizing: border-box;
    height: 100%;
    padding: 0 86px 0 60px;
    position: absolute;
    width: 100%;
  }
  .lock {
    left: 28px;
    position: absolute;
    top: 0px;
    width: 17px;
  }
  .lock-white {
    fill: white;
  }
  .lock-black {
    fill: black;
  }
  .hidden-input {
    background-color: transparent;
    border: 0;
    color: #575cba;
    font-family: "Space Mono", monospace;
    font-size: 18px;
    height: 100%;
    outline: none;
    width: 100%;
  }
  .revealed {
    background-color: #fff;
    box-sizing: border-box;
    clip-path: polygon(
      85.39075% 28.16254%,
      85.86161% 27.31304%,
      86.33801% 26.7167%,
      86.81675% 26.36695%,
      87.29462% 26.25723%,
      87.7684% 26.38091%,
      88.23487% 26.73144%,
      88.69081% 27.30221%,
      89.13302% 28.08664%,
      89.55826% 29.07816%,
      89.96332% 30.27017%,
      90.345% 31.6561%,
      90.70007% 33.22935%,
      91.02531% 34.98333%,
      91.31751% 36.91147%,
      91.57346% 39.00718%,
      91.78992% 41.26386%,
      91.95983% 43.6181%,
      92.0791% 46.00012%,
      92.14904% 48.39386%,
      92.17099% 50.78321%,
      92.14625% 53.15209%,
      92.07615% 55.48444%,
      91.96199% 57.76415%,
      91.80511% 59.97518%,
      91.6068% 62.10138%,
      91.3684% 64.12672%,
      91.09122% 66.0351%,
      90.77657% 67.81044%,
      90.42577% 69.43666%,
      90.04014% 70.89766%,
      89.621% 72.17737%,
      89.16967% 73.25972%,
      88.69881% 74.10923%,
      88.22241% 74.70556%,
      87.74366% 75.05532%,
      87.26579% 75.16504%,
      86.79201% 75.04135%,
      86.32555% 74.69083%,
      85.86961% 74.12006%,
      85.4274% 73.33563%,
      85.00216% 72.3441%,
      84.59709% 71.15209%,
      84.21541% 69.76616%,
      83.86035% 68.19292%,
      83.53511% 66.43893%,
      83.2429% 64.51079%,
      82.98696% 62.41508%,
      82.77049% 60.1584%,
      82.60059% 57.80416%,
      82.48132% 55.42214%,
      82.41137% 53.0284%,
      82.38942% 50.63905%,
      82.41416% 48.27017%,
      82.48427% 45.93782%,
      82.59843% 43.65811%,
      82.75531% 41.4471%,
      82.95362% 39.3209%,
      83.19202% 37.29556%,
      83.4692% 35.38717%,
      83.78385% 33.61184%,
      84.13465% 31.98561%,
      84.52027% 30.5246%,
      84.93942% 29.2449%
    );
    height: 100%;
    padding: 0 86px 0 60px;
    position: absolute;
    pointer-events: none;
    transition: clip-path 300ms cubic-bezier(0.4, 0, 0.2, 1);
    width: 100%;
  }
  .revealed-input {
    border: 0;
    font-family: "Space Mono", monospace;
    font-size: 18px;
    height: 100%;
    outline: none;
    width: 100%;
  }
  .active .revealed {
    clip-path: polygon(
      2.28031% 0%,
      14.21024% 0.00147%,
      26.14016% 0%,
      38.07008% 0.00147%,
      50% 0%,
      61.92992% 0.00147%,
      73.85984% 0%,
      85.78976% 0.00147%,
      97.71969% 0%,
      98.18037% 0.23084%,
      98.60894% 0.89324%,
      98.99635% 1.94205%,
      99.33358% 3.33211%,
      99.61159% 5.01825%,
      99.82135% 6.95531%,
      99.95383% 9.09814%,
      100% 11.40157%,
      100.00029% 21.05118%,
      100% 30.70079%,
      100.00029% 40.35039%,
      100% 50%,
      100.00029% 59.64961%,
      100% 69.29921%,
      100.00029% 78.94882%,
      100% 88.59843%,
      99.95383% 90.90186%,
      99.82135% 93.04469%,
      99.61159% 94.98175%,
      99.33358% 96.66789%,
      98.99635% 98.05795%,
      98.60894% 99.10676%,
      98.18037% 99.76916%,
      97.71969% 100%,
      85.78976% 100.00147%,
      73.85984% 100%,
      61.92992% 100.00147%,
      50% 100%,
      38.07008% 100.00147%,
      26.14016% 100%,
      14.21024% 100.00147%,
      2.28031% 100%,
      1.81963% 99.76916%,
      1.39106% 99.10676%,
      1.00365% 98.05795%,
      0.66642% 96.66789%,
      0.38841% 94.98175%,
      0.17865% 93.04469%,
      0.04617% 90.90186%,
      0% 88.59843%,
      0.00029% 78.94882%,
      0% 69.29921%,
      0.00029% 59.64961%,
      0% 50%,
      0.00029% 40.35039%,
      0% 30.70079%,
      0.00029% 21.05118%,
      0% 11.40157%,
      0.04617% 9.09814%,
      0.17865% 6.95531%,
      0.38841% 5.01825%,
      0.66642% 3.33211%,
      1.00365% 1.94205%,
      1.39106% 0.89324%,
      1.81963% 0.23084%
    );
  }
  .button {
    border-radius: 50%;
    cursor: pointer;
    height: 33px;
    left: 280px;
    position: absolute;
    top: 18px;
    width: 33px;
  }
  .eye {
    left: 0px;
    position: absolute;
    top: -1px;
  }
  .eye-lower {
    fill: none;
    stroke: #575cba;
    stroke-width: 4.5;
    stroke-linecap: round;
  }
  .eye-iris {
    fill: #575cba;
    stroke-width: 4.65066;
    stroke-linecap: round;
  }
  .eye-lid {
    clip-path: polygon(17px 53px, 61px 52px, 57px 14px, 25px 14px);
    fill: #fff;
    stroke-linecap: butt;
    stroke-width: 4.5;
    stroke: #575cba;
  }
  .eye-lashes {
    transform-origin: 50%;
  }
  .eye-lash {
    fill: none;
    stroke: #575cba;
    stroke-width: 4.5;
    stroke-linecap: butt;
  }
`;

const InputAnimation = () => {
  onMount(() => {
    const container: any = document.querySelector(".container");
    const hidden: any = document.querySelector(".hidden--");
    const hiddenInput: any = document.querySelector(".hidden-input");
    const revealed: any = document.querySelector(".revealed");
    const revealedInput: any = document.querySelector(".revealed-input");
    const button: any = document.querySelector(".button");
    const timeline: any = anime
      .timeline({
        duration: 300,
        easing: "cubicBezier(.4, 0, .2, 1)",
        autoplay: false,
      })
      .add(
        {
          targets: document.querySelector(".eye-lid"),
          d: "M -5,-5 V 37 H 15.6 C 15.6,37 21.35124,23.469343 34.312131,23.469343 47.273022,23.469343 53.4,37 53.4,37 H 77 V -5 Z",
        },
        0
      )
      .add(
        {
          targets: document.querySelector(".eye-lashes"),
          rotateX: ["180deg", "0deg"],
        },
        0
      );
    hiddenInput.addEventListener("input", () => {
      if (!container.classList.contains("active")) {
        revealedInput.value = hiddenInput.value;
      }
    });
    revealedInput.addEventListener("input", () => {
      if (container.classList.contains("active")) {
        hiddenInput.value = revealedInput.value;
      }
    });
    button.addEventListener("click", () => {
      container.classList.toggle("active");
      timeline.reverse();
      timeline.play();
      if (container.classList.contains("active")) {
        revealedInput.focus();
      } else {
        hiddenInput.focus();
      }
    });
    timeline.reverse();
    timeline.play();
  });

  return (
    <Wrapper>
      <div class="container">
        <div class="hidden--">
          <svg class="lock" width="30" height="40" viewBox="0 0 30 40">
            <path
              class="lock-white"
              d="M 12.519565,0 C 6.7072359,0 2.0282227,4.622895 2.0282227,10.365511 V 19.386852 C 0.81380849,20.12592 0,21.438885 0,22.957364 V 40 H 30 V 22.957364 C 30,21.444973 29.193452,20.135235 27.987171,19.394457 V 10.365511 C 27.987171,4.622895 23.308158,0 17.495831,0 Z M 12.519565,4.384239 H 17.495831 C 20.923632,4.384239 23.682489,7.111909 23.682489,10.498597 V 19.002803 H 6.3309823 V 10.498597 C 6.3309823,7.111909 9.091764,4.384239 12.519565,4.384239 Z"
            />
          </svg>
          <input type="password" class="hidden-input" />
        </div>
        <div class="revealed">
          <svg class="lock" width="30" height="40" viewBox="0 0 30 40">
            <path
              class="lock-black"
              d="M 12.519565,0 C 6.7072359,0 2.0282227,4.622895 2.0282227,10.365511 V 19.386852 C 0.81380849,20.12592 0,21.438885 0,22.957364 V 40 H 30 V 22.957364 C 30,21.444973 29.193452,20.135235 27.987171,19.394457 V 10.365511 C 27.987171,4.622895 23.308158,0 17.495831,0 Z M 12.519565,4.384239 H 17.495831 C 20.923632,4.384239 23.682489,7.111909 23.682489,10.498597 V 19.002803 H 6.3309823 V 10.498597 C 6.3309823,7.111909 9.091764,4.384239 12.519565,4.384239 Z"
            />
          </svg>
          <input class="revealed-input" />
        </div>
        <div class="button">
          <svg class="eye" width="36" height="36" viewBox="0 0 72 72">
            <path
              class="eye-lower"
              d="M 15.6,37 C 15.6,37 24.309181,49.073101 34.102911,49.166773 43.896641,49.260445 53.4,37 53.4,37"
            />
            <circle r="6" cy="36" cx="34.400002" class="eye-iris" />
            <path
              class="eye-lid"
              d="M -5,-5 V 37 H 15.6 C 15.6,37 25.327177,48.715274 34.312131,48.785 43.297085,48.854726 53.4,37 53.4,37 H 77 V -5 Z"
            />
            <g class="eye-lashes">
              <path
                class="eye-lash"
                d="M 17.45627,17.07484 24.778981,25.652873"
              />
              <path class="eye-lash" d="M 34.602,12.600574 V 23.601076" />
              <path
                class="eye-lash"
                d="M 51.580203,17.07484 44.257492,25.652873"
              />
            </g>
          </svg>
        </div>
      </div>
    </Wrapper>
  );
};

export default InputAnimation;
