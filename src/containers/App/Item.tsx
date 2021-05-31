import { Component, Show } from "solid-js";
import Card from "../../components/Card";
import { styled } from "solid-styled-components";
// @ts-ignore
import Vector from "../../assets/svg/vector.svg";
import SvgIcon from '../../components/SvgIcon';

const Wrapper = styled("div")`
  .heading {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    h4 {
      font-size: 16px;
      font-weight: bold;
      margin-left: 10px;
    }
  }

  .para,
  .heading h4 {
    color: ${(props) => props.theme.colors.primaryText};
  }

  .para {
    p {
      font-size: 14px;
      line-height: 22px;
      max-width: 313px;
    }
  }

  .logo {
    display: flex;
    background: #191818;
    border-radius: 40px;
    width: 65px;
    height: 65px;
    text-align: center;
    line-height: 65px;

    > div {
      margin: auto;
      svg {
        object-fit: contain;
        margin: auto;
      }
    }
  }

  .info {
    padding-top: 15px;
    color: ${(props) => props.theme.colors.primaryText};

    img {
      object-fit: contain;
      margin-right: 8px;
      height: 15px;
      width: 15px;
    }

    > span {
      margin-right: 15px;
      font-size: 12px;
      align-items: center;

    }
    .item {
      svg {
        margin-right: 8px;
      }
    }

    .info__version {
      color: rgba(183, 236, 94, 0.8);
    }

  }
`;

const Item: Component<any> = (props) => {
  return (
    <Wrapper>
      <Card style={{ "padding-bottom": "40px" }}>
        <div className="heading">
          <div className="logo">
            <SvgIcon src={props?.item?.logo} />
          </div>
          <h4>{props?.item?.title}</h4>
        </div>
        <div className="para">
          <p>{props?.item?.para}</p>
        </div>
        <div className="info flex">
          <Show when={props.item?.stars}>
            <span className="flex item">
              <SvgIcon src={Vector}/> {props.item?.stars}
            </span>
          </Show>
          <Show when={props.item?.icon}>
            <span className="flex site item">
              <SvgIcon src={props.item?.icon} /> Website
            </span>
          </Show>
          <Show when={props.item?.version}>
            <span className="info__version">{props.item.version}</span>
          </Show>
        </div>
      </Card>
    </Wrapper>
  );
};

export default Item;
