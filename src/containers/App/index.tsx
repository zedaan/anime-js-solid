import { Component, For } from "solid-js";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Item from "./Item";
import Wrapper from "./styles";
const Logo1 = require('../../assets/svg/logo.svg');
const Logo2 = require("../../assets/svg/logo-2.svg");
const GlobeIcon = require("../../assets/svg/globe.svg");
const Fastly = require("../../assets/svg/4.svg");
const Write = require("../../assets/svg/1.svg");
const Dissect = require("../../assets/svg/2.svg");
const Fasm = require("../../assets/svg/3.svg");

const App: Component = () => {
  const items = [
    {
      title: "Vectorized",
      image: "",
      para:
        "A modern streaming platform for mission critical workloads. Much faster than Kafka. No Zookeeper.",
      stars: "5.2k",
      icon: GlobeIcon,
      version: "v0.21.2.2",
      logo: Logo2,
    },
    {
      title: "Fastly",
      image: "",
      para:
        "An alternative to Cloudflare, Fastly is a content delivery network that offers everything from DDoS mitigation to image optimization.",
      icon: GlobeIcon,
      logo: Fastly,
    },
  ];

  const items2 = [
    {
      title: "Write",
      image: "",
      para:
        "A real-time API-first content management system with over 50 ready to use templates. Perfect for blogs, news & content sites.",
      icon: GlobeIcon,
      version: "Private beta",
      logo: Write,
    },
    {
      title: "Dissect",
      image: "",
      para:
        "A modern analytics solution offering deeper user insights. Able to track visitor behavior, heatmaps, replays. GDPR compliant.",
      icon: GlobeIcon,
      version: "Private beta",
      logo: Dissect,
    },
    {
      title: "Fasm",
      image: "",
      para:
        "Serverless Streaming Framework for Low-latency Edge Computing applications. Specialized for IoT.",
      icon: GlobeIcon,
      version: "v0.24.0",
      logo: Fasm,
    },
  ];

  const items3 = [
    {
      title: "Solid JS",
      image: "",
      para:
        "Forget React. Solid is the fastest front-end framework for creating user interfaces. It’s efficient. No Virtual DOM",
      icon: GlobeIcon,
      version: "v0.24.0",
      stars: '5.2K',
      logo: Logo1,
    },
    {
      title: "Skybase DB",
      image: "",
      para:
        "A real-time API-first content management system with over 50 ready to use templates. Perfect for blogs, news & content sites.",
      icon: GlobeIcon,
      version: "Coming soon",
      stars: '5.2K',
      logo: Write,
    },
  ];

  return (
    <Wrapper>
      <Header />
      <div className="container px-4 mx-auto">
        <div className="main--heading">
          <Heading className="text-center">Building the Next-Web</Heading>
          <p className="text-center">
            Discover cutting edge technology, gain unfair advantage and launch
            your next big thing.
          </p>
        </div>

        <h3 className="sub--heading">Recommended</h3>
        <div className="flex flex-wrap cards">
          <For each={items}>
            {(item: any) => (
              <div>
                <Item item={item} />
              </div>
            )}
          </For>
        </div>

        <h3 className="sub--heading">From Launch labs</h3>
        <div className="flex flex-wrap cards">
          <For each={items2}>
            {(item: any) => (
              <div>
                <Item item={item} />
              </div>
            )}
          </For>
        </div>

        <h3 className="sub--heading">Open source we</h3>
        <div className="flex flex-wrap cards">
          <For each={items3}>
            {(item: any) => (
              <div>
                <Item item={item} />
              </div>
            )}
          </For>
        </div>
      </div>
    </Wrapper>
  );
};

export default App;
