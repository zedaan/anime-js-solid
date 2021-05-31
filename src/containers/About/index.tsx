import { Component, For } from "solid-js";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Icon from "./Icon";
import ImageBox from "./ImageBox";
import Wrapper from "./styles";
const Icon1 = require("../../assets/svg/1.svg");
const Icon2 = require("../../assets/svg/2.svg");
const Icon3 = require("../../assets/svg/3.svg");
const Img = require("../../assets/svg/10.svg");
const IconS = require("../../assets/icons/sort-up.svg");

const About: Component = () => {
  const items: any = [Icon2, Icon3, Icon1];

  return (
    <Wrapper>
      <Header />
      <div className="content">
        <div className="main--heading">
          <Heading className="heading--about">We’re onto something</Heading>
          <div className="heading__description">
            <p>
              When a vague collection of ideas from some of the brightest minds
              materialize
              <span className="title">Innovation happens.</span>
            </p>
          </div>
        </div>
        <div className="description">
          <p>
            Innovation is merely a byproduct. The key lies in cultivating
            Intellectual Capital — an intangible asset that’s often overlooked
            in an increasingly commercial society. With Intellectual Capital as
            our foundation, Launch is building and supporting everything from
            next-generation web platforms to IoT frameworks. Each day, we’re
            inching closer to our vision of creating a highly performant
            connected web.
          </p>
        </div>
        <div className="flex">
          <For each={items}>{(item: any) => <Icon src={item} />}</For>
        </div>
        <div className="section__value">
          <h3>Valuing the undervalued.</h3>
          <h4>Empowering undervalued creators.</h4>
          <p>
            With the advent of globalization, we are constantly identifying and
            supporting undervalued talent. To us, the constructs of First,
            Second, and the Third world are <b>nonexistent</b> and we’ve broken
            all the geographical barriers. Our strong belief is that disruption
            has humble beginnings and its roots can be traced back to small, yet
            efficient teams.
          </p>
        </div>
        <div className="flex justify-between flex-wrap">
          <ImageBox
            src={Img}
            title="This 17 year old built one of the fastest databases ever."
          />
          <ImageBox
            src={Img}
            title="This 17 year old built one of the fastest databases ever."
          />
        </div>

        <div className="performance">
          <div>
            <h2>Obsessed with Performance</h2>
            <p>
              {" "}
              When good just isn’t good enough, breakthroughs happen. Here are a
              few —{" "}
            </p>

            <h3>Queried 1.5 Billion records in 70 ms</h3>
            <hr className="divider" />

            <h4>Processed 100k orders in 50 ms</h4>
            <h4>1M concurrent users on a single machine</h4>
            <h4>Generated 10k pages a second</h4>
            <h4>Tracking 1M events a second</h4>
            <h4>1M concurrent users on a single machine</h4>
          </div>

          <button>View more</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
