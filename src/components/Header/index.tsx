import { Component, For } from "solid-js";
import { Link } from 'solid-app-router';
import Wrapper from "./styles";
import SvgIcon from '../SvgIcon';
const Logo  = require("../../assets/svg/l.svg");
const NavIcon  = require("../../assets/svg/nav-icon.svg");

const Header: Component = () => {
  let collapseRef: any;
  const links = [
    {
      name: "Why Launch",
      to: "/about",
    },
    {
      name: "Blog",
      to: "/blog",
    },
    {
      name: "Interviews",
      to: "/blog",
    },
  ];

  const toggle = () => {
    collapseRef.classList.toggle("hidden");
    collapseRef.classList.toggle("flex");
  };

  return (
    <Wrapper>
      <nav>
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="header--mobile flex justify-between items-center">
            <Link href='/' className="font-bold text-xl text-indigo-600 logo">
              <SvgIcon src={Logo} />
            </Link>
            <button
              className="toggle-btn border border-solid py-1 rounded opacity-50 hover:opacity-75 md:hidden"
              onClick={toggle}
              id="navbar-toggle"
            >
              <SvgIcon src={NavIcon}/>
            </button>
          </div>

          <div
            className="hidden md:flex flex-col md:flex-row mt-3 md:mt-0 header--mobile header--xs"
            ref={collapseRef}
            id="navbar-collapse"
          >
            <ul className="md:flex flex-col md:flex-row mt-3 md:mt-0">
              <For each={links}>
                {(link: any) => (
                  <li>
                    <Link
                      href={link.to || "#"}
                      className="p-2 lg:px-4 md:mx-2 text-gray-600 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                )}
              </For>
            </ul>
          </div>
          <div className="button--wrapper">
            <button>Join</button>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Header;
