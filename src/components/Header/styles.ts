import { styled } from "solid-styled-components";

const Wrapper = styled("div")`
  width: 100%;
  position: sticky;
  top: 0;
  box-shadow: rgb(132 121 121 / 10%) 0px -1px 0px inset;
  backdrop-filter: blur(10px);
  z-index: 99;

  nav {
    height: 60px;
    line-height: 60px;
    border-bottom: 2px solid ${(props) => props.theme.colors.grey};
    
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
    }
    
    @media(max-width: 767px) {
      min-height: 60px;
      height: auto;
      line-height: 60px;
      padding-top: 15px;
      
      > div {
        display: block;
      }
    }

    li {
      a {
        color: ${(props) => props.theme.colors.primaryText};
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        font-weight: 600;
        font-family: Proxima;
      }
    }
  }

  .button--wrapper {
    padding-right: 10px;

    @media(max-width: 767px) {
      padding-left: 0;
    }
  
    button {
      font-family: Proxima;
      background: #f2f1ea;
      border-radius: 5px;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 16px;
      color: #1a1818;
      padding: 7px 20px;
      
      &:active,
      &:hover,
      &:visited {
        outline: none;
      }
    }
    @media(max-width: 767px) {  
      display: none;
    }

  }

  .header--mobile {
    @media (max-width: 767px) {
      width: 100%;
    }
  }

  .header--xs {
    @media (max-width: 767px) {
      position: relative;
      width: 100%;
      left: 0;
      top: 0;
      right: 0;
      color: rgb(255, 255, 255);
      padding: 15px 0px;
      box-shadow: rgb(132 121 121 / 10%) 0px -1px 0px inset;
      backdrop-filter: blur(10px);
      width: 100%;
      padding: 0;
      border-top: 2px solid ${(props) => props.theme.colors.grey};

      ul {
        padding: 0;
        margin: 0;
        li {
          a {
            padding: 15px 25px;
            display: block;

            &:hover {
              background-color: ${(props) => props.theme.colors.grey};
            }
          }
        }
      }
    }
  }

  .logo {
    padding-left: 10px;

    @media(max-width: 767px) {
      padding-left: 0;
    }
  }

  .toggle-btn {
    height: 28px;
    width: 28px;
    border-color: 1px solid ${(props) => props.theme.colors.grey};
    color: ${(props) => props.theme.colors.primaryText};
    svg {
      margin: auto;
    }
  }
`;

export default Wrapper;
